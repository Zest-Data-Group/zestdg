// Verifies every internal link and asset reference in _site/ resolves to a real
// file. No dependencies; run with `npm run check` after a build.
import { readdir, readFile, stat } from "node:fs/promises";
import { join, resolve, dirname } from "node:path";

const OUT = resolve("_site");

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((e) =>
      e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)]
    )
  );
  return files.flat();
}

const exists = async (p) => {
  try {
    const s = await stat(p);
    return s.isFile() ? true : await exists(join(p, "index.html"));
  } catch {
    return false;
  }
};

const files = await walk(OUT);
const pages = files.filter((f) => f.endsWith(".html"));
const problems = [];
let checked = 0;

for (const page of pages) {
  const html = await readFile(page, "utf8");
  const refs = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((m) => m[1]);
  for (const ref of refs) {
    // Skip anything that leaves the site or isn't a file path.
    if (/^(https?:|mailto:|tel:|data:|#)/.test(ref)) continue;
    checked++;
    const path = ref.split(/[?#]/)[0];
    const target = path.startsWith("/")
      ? join(OUT, path)
      : resolve(dirname(page), path);
    if (!(await exists(target))) {
      problems.push(`${page.replace(OUT, "_site")} -> ${ref}`);
    }
  }
}

if (problems.length) {
  console.error(`\n${problems.length} broken internal link(s):`);
  for (const p of problems) console.error(`  ${p}`);
  process.exit(1);
}
console.log(`OK: ${checked} internal links across ${pages.length} pages resolve.`);
