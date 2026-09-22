/* Citations over time — a single-file chart with no dependencies.
 *
 * Bars: citations per year across all publications. Lines: the same for up to
 * three individual papers. A toggle switches between per-year counts and the
 * cumulative total.
 *
 * Data comes from either of:
 *   1. window.CITATION_DATA = { byYear: [...], papers: [...] }   (data.js, see README)
 *   2. inline JSON blocks with id="citation-data" (the bars) and
 *      id="citation-series" (the papers), for static-site generators.
 *
 * Markup:
 *   <figure id="citation-chart" class="chart"></figure>
 *   <div id="citation-export"></div>            <!-- optional: download buttons -->
 *
 * Open the page with #cumulative to start in cumulative mode. Colors come from
 * CSS custom properties (--chart-bar, --chart-s1..s3, --ink, --mist, --paper)
 * so the chart follows whatever page it lands on. MIT. zestdg.com
 */
(function () {
  const host = document.getElementById("citation-chart");
  if (!host) return;
  const parseJSON = (node) => { try { return node ? JSON.parse(node.textContent) : null; } catch { return null; } };
  const fromWindow = window.CITATION_DATA || null;
  const barsIn = (parseJSON(document.getElementById("citation-data")) || (fromWindow && fromWindow.byYear) || [])
    .filter((d) => d && Number.isFinite(d.year) && Number.isFinite(d.citations))
    .sort((a, b) => a.year - b.year);
  const seriesIn = (parseJSON(document.getElementById("citation-series")) || (fromWindow && (fromWindow.papers || fromWindow.topPapers)) || [])
    .filter((s) => s && s.byYear && typeof s.byYear === "object").slice(0, 3);
  if (!barsIn.length) {
    const p = document.createElement("p");
    p.className = "error";
    p.textContent = "No citation data found. Check data.js: byYear needs at least one { year, citations } entry.";
    host.appendChild(p);
    return;
  }

  const NS = "http://www.w3.org/2000/svg";
  const el = (tag, attrs = {}, parent) => {
    const n = document.createElementNS(NS, tag);
    for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
    if (parent) parent.appendChild(n);
    return n;
  };
  const h = (tag, cls, parent, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    if (parent) parent.appendChild(n);
    return n;
  };
  const FALLBACK = { "--chart-bar": "#CDBFA6", "--chart-s1": "#F1A104", "--chart-s2": "#1E65A7", "--chart-s3": "#25B396", "--ink": "#122B20", "--mist": "#E3D3BF", "--paper": "#FAF0E6" };
  const v = (name) => `var(${name}, ${FALLBACK[name]})`;
  const seriesColor = (i) => v(`--chart-s${i + 1}`);
  const years = barsIn.map((d) => d.year);

  // Derive the data for a mode. Cumulative sums run from the first year with data.
  function shape(mode) {
    let run = 0;
    const bars = barsIn.map((d) => ({ ...d, value: mode === "cumulative" ? (run += d.citations) : d.citations }));
    const series = seriesIn.map((s) => {
      let acc = 0, started = false;
      const values = {};
      years.forEach((yr) => {
        const raw = s.byYear[yr];
        const n = Number.isFinite(raw) ? raw : Number(raw);
        const has = Number.isFinite(n) && raw !== undefined && raw !== null && raw !== "";
        if (has) started = true;
        if (!started) return;
        acc += has ? n : 0;
        values[yr] = mode === "cumulative" ? acc : (has ? n : null);
      });
      return { ...s, values };
    });
    return { bars, series };
  }

  // Controls: a two-way toggle, plain radio buttons styled as a segmented control.
  const controls = h("div", "chart-controls", host);
  const modes = [["yearly", "Per year"], ["cumulative", "Cumulative"]];
  let mode = location.hash === "#cumulative" ? "cumulative" : "yearly";
  modes.forEach(([value, label]) => {
    const lab = h("label", "chart-toggle", controls);
    const input = h("input", null, lab); input.type = "radio"; input.name = "citation-mode"; input.value = value; input.checked = value === mode;
    h("span", null, lab, label);
    input.addEventListener("change", () => { if (input.checked) { mode = value; render(); } });
  });
  const plot = h("div", "chart-plot", host);
  const legend = h("ul", "chart-legend", host);
  const details = h("details", "chart-table", host);
  let svg = null;

  function render() {
    plot.textContent = ""; legend.textContent = ""; details.textContent = "";
    const { bars, series } = shape(mode);
    const cumulative = mode === "cumulative";
    const unit = cumulative ? "cumulative citations" : "citations";

    // Geometry. The SVG scales with its container through the viewBox.
    const W = 640, H = 300, pad = { top: 28, right: 16, bottom: 36, left: 48 };
    const iw = W - pad.left - pad.right, ih = H - pad.top - pad.bottom;
    const allValues = bars.map((d) => d.value).concat(series.flatMap((s) => Object.values(s.values).filter(Number.isFinite)));
    const max = Math.max(1, ...allValues);
    const step = niceStep(max);
    const yMax = Math.ceil(max / step) * step;
    const band = iw / bars.length;
    const barW = Math.min(24, band * 0.6);
    const xBand = (i) => pad.left + band * i;
    const xMid = (i) => xBand(i) + band / 2;
    const y = (val) => pad.top + ih - (val / yMax) * ih;

    svg = el("svg", { xmlns: NS, viewBox: `0 0 ${W} ${H}`, role: "img", "aria-labelledby": "citation-chart-title" }, plot);
    el("title", { id: "citation-chart-title" }, svg).textContent = `${cumulative ? "Cumulative citations" : "Citations per year"}, all publications${series.length ? " and the most-cited papers" : ""}`;

    // Hatch for a partial (year-to-date) bar, so incompleteness is visible without another color.
    const defs = el("defs", {}, svg);
    const pat = el("pattern", { id: "ytd-hatch", width: 6, height: 6, patternUnits: "userSpaceOnUse", patternTransform: "rotate(45)" }, defs);
    el("rect", { width: 6, height: 6, fill: v("--chart-bar"), opacity: 0.35 }, pat);
    el("rect", { width: 2.5, height: 6, fill: v("--chart-bar") }, pat);

    // Gridlines and y ticks: recessive hairlines, clean numbers.
    for (let t = 0; t <= yMax; t += step) {
      el("line", { x1: pad.left, x2: W - pad.right, y1: y(t), y2: y(t), stroke: v("--mist"), "stroke-width": 1 }, svg);
      el("text", { x: pad.left - 8, y: y(t) + 4, "text-anchor": "end", class: "chart-tick" }, svg).textContent = t.toLocaleString();
    }

    // Bars: rounded 4px at the data end, square at the baseline. Labels only on the peak and the latest.
    const peak = bars.reduce((a, b) => (b.value > a.value ? b : a));
    const latest = bars[bars.length - 1];
    bars.forEach((d, i) => {
      const top = y(d.value), base = y(0), r = Math.min(4, Math.max(0, base - top) / 2), bx = xMid(i) - barW / 2;
      const dPath = `M${bx},${base} V${top + r} a${r},${r} 0 0 1 ${r},-${r} h${barW - 2 * r} a${r},${r} 0 0 1 ${r},${r} V${base} Z`;
      el("path", { d: dPath, fill: d.partial ? "url(#ytd-hatch)" : v("--chart-bar"), class: "chart-bar" }, svg);
      el("text", { x: xMid(i), y: H - pad.bottom + 20, "text-anchor": "middle", class: "chart-tick" }, svg).textContent = d.year;
      if (d === peak || d === latest) {
        el("text", { x: xMid(i), y: top - 8, "text-anchor": "middle", class: "chart-label" }, svg).textContent = d.value.toLocaleString();
      }
    });

    // Lines: 2px, round joins, 8px markers with a 2px surface ring.
    series.forEach((s, si) => {
      const pts = years.map((yr, i) => (Number.isFinite(s.values[yr]) ? [xMid(i), y(s.values[yr])] : null)).filter(Boolean);
      if (!pts.length) return;
      el("path", { d: pts.map(([px, py], k) => `${k ? "L" : "M"}${px},${py}`).join(" "), fill: "none", stroke: seriesColor(si), "stroke-width": 2, "stroke-linejoin": "round", "stroke-linecap": "round" }, svg);
      pts.forEach(([px, py]) => {
        el("circle", { cx: px, cy: py, r: 6, fill: v("--paper") }, svg);
        el("circle", { cx: px, cy: py, r: 4, fill: seriesColor(si) }, svg);
      });
    });

    // Hover and focus: the whole year band is the target; one tooltip lists every series.
    const tip = h("div", "chart-tip", plot); tip.hidden = true;
    const marker = el("line", { y1: pad.top, y2: pad.top + ih, stroke: v("--ink"), "stroke-width": 1, opacity: 0.25, visibility: "hidden", class: "chart-marker" }, svg);
    bars.forEach((d, i) => {
      const g = el("g", { tabindex: 0, class: "chart-hit", "aria-label": `${d.year}: ${d.value} ${unit} across all publications` }, svg);
      el("rect", { x: xBand(i), y: pad.top, width: band, height: ih, fill: "transparent" }, g);
      const show = () => {
        tip.textContent = "";
        h("div", "chart-tip-year", tip, `${d.year}${d.partial ? " (year to date)" : ""}${cumulative ? ", cumulative" : ""}`);
        const row = h("div", "chart-tip-row", tip);
        h("span", "chart-tip-key chart-tip-key-bar", row);
        h("strong", null, row, d.value.toLocaleString());
        h("span", null, row, " all publications");
        series.forEach((s, si) => {
          if (!Number.isFinite(s.values[d.year])) return;
          const r = h("div", "chart-tip-row", tip);
          const key = h("span", "chart-tip-key", r); key.style.background = seriesColor(si);
          h("strong", null, r, s.values[d.year].toLocaleString());
          h("span", null, r, ` ${s.short || s.title || ""}`);
        });
        tip.hidden = false;
        const box = svg.getBoundingClientRect();
        const px = (xMid(i) / W) * box.width;
        tip.style.left = `${px}px`;
        tip.style.top = `${(pad.top / H) * box.height}px`;
        tip.classList.toggle("is-left", px > box.width * 0.6);
        marker.setAttribute("x1", xMid(i)); marker.setAttribute("x2", xMid(i));
        marker.setAttribute("visibility", "visible");
      };
      const hide = () => { tip.hidden = true; marker.setAttribute("visibility", "hidden"); };
      g.addEventListener("pointerenter", show);
      g.addEventListener("pointerleave", hide);
      g.addEventListener("focus", show);
      g.addEventListener("blur", hide);
    });

    // Legend: always present with more than one series; paper names link to their DOI.
    const li0 = h("li", null, legend);
    h("span", "chart-key chart-key-bar", li0);
    h("span", null, li0, `All publications, ${unit}`);
    series.forEach((s, si) => {
      const li = h("li", null, legend);
      const key = h("span", "chart-key chart-key-line", li); key.style.background = seriesColor(si);
      const label = s.short || s.title || s.doi || `Paper ${si + 1}`;
      if (s.doi) {
        const a = h("a", null, li, label);
        a.href = `https://doi.org/${s.doi}`; a.target = "_blank"; a.rel = "noopener"; if (s.title) a.title = s.title;
      } else {
        h("span", null, li, label);
      }
    });

    // Table view: every value reachable without hovering.
    h("summary", null, details, "View as a table");
    const table = h("table", null, details);
    const headRow = table.createTHead().insertRow();
    ["Year", "All publications"].concat(series.map((s, i) => s.short || s.title || `Paper ${i + 1}`)).forEach((t) => h("th", null, headRow, t));
    const body = table.createTBody();
    bars.forEach((d) => {
      const row = body.insertRow();
      row.insertCell().textContent = d.year + (d.partial ? " (to date)" : "");
      row.insertCell().textContent = d.value.toLocaleString();
      series.forEach((s) => { row.insertCell().textContent = Number.isFinite(s.values[d.year]) ? s.values[d.year].toLocaleString() : "–"; });
    });
  }

  // Export: a standalone SVG (custom properties resolved, text styles inlined) and a PNG of it.
  const exportHost = document.getElementById("citation-export");
  if (exportHost) {
    const resolved = () => {
      const cs = getComputedStyle(document.documentElement);
      const out = {};
      for (const k of Object.keys(FALLBACK)) out[k] = (cs.getPropertyValue(k) || "").trim() || FALLBACK[k];
      return out;
    };
    const standaloneSVG = () => {
      const c = resolved();
      const clone = svg.cloneNode(true);
      clone.querySelector(".chart-marker")?.remove();
      clone.querySelectorAll(".chart-hit").forEach((n) => n.remove());
      const style = el("style", {}, clone);
      style.textContent = `text{font-family:${getComputedStyle(svg).fontFamily || "sans-serif"}}.chart-tick{font-size:12px;fill:${c["--ink"]};opacity:.7}.chart-label{font-size:13px;font-weight:600;fill:${c["--ink"]}}`;
      clone.insertBefore(style, clone.firstChild);
      let s = new XMLSerializer().serializeToString(clone);
      for (const [k, val] of Object.entries(c)) s = s.split(`var(${k}, ${FALLBACK[k]})`).join(val);
      s = s.replace("<svg ", `<svg style="background:${c["--paper"]}" `);
      return s;
    };
    const download = (blob, name) => {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob); a.download = name; a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    };
    const bSvg = h("button", null, exportHost, "Download SVG"); bSvg.type = "button";
    bSvg.addEventListener("click", () => download(new Blob([standaloneSVG()], { type: "image/svg+xml" }), `citations-${mode}.svg`));
    const bPng = h("button", null, exportHost, "Download PNG"); bPng.type = "button";
    bPng.addEventListener("click", () => {
      const img = new Image();
      const url = URL.createObjectURL(new Blob([standaloneSVG()], { type: "image/svg+xml" }));
      img.onload = () => {
        const scale = 2, canvas = document.createElement("canvas");
        canvas.width = 640 * scale; canvas.height = 300 * scale;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = resolved()["--paper"]; ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        URL.revokeObjectURL(url);
        canvas.toBlob((b) => download(b, `citations-${mode}.png`), "image/png");
      };
      img.src = url;
    });
  }

  function niceStep(m) {
    const rough = m / 4, mag = Math.pow(10, Math.floor(Math.log10(rough)));
    for (const k of [1, 2, 2.5, 5, 10]) if (rough <= k * mag) return k * mag;
    return 10 * mag;
  }

  render();
})();
