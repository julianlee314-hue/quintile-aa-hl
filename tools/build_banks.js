#!/usr/bin/env node
/**
 * Regenerate site/assets/skills-*.js and types-*.js from data/*.json
 * Overwrites the existing hashed filenames in place.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const DATA = path.join(ROOT, "data");
const SITE_DATA = path.join(ROOT, "site", "data");
const ASSETS = path.join(ROOT, "site", "assets");

const SKILLS_OUT = path.join(ASSETS, "skills-DdKtCXio.js");
const TYPES_OUT = path.join(ASSETS, "types-BvDvTBbh.js");

function loadJson(name) {
  const p = path.join(DATA, name);
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

/** Serialize a JS value using String.raw for strings that contain backslashes. */
function ser(v) {
  if (v === null) return "null";
  if (typeof v === "boolean") return v ? "!0" : "!1";
  if (typeof v === "number") return String(v);
  if (typeof v === "string") return serStr(v);
  if (Array.isArray(v)) return "[" + v.map(ser).join(",") + "]";
  if (typeof v === "object") {
    return (
      "{" +
      Object.entries(v)
        .map(([k, val]) => `${ident(k)}:${ser(val)}`)
        .join(",") +
      "}"
    );
  }
  throw new Error("unsupported " + typeof v);
}

function ident(k) {
  return /^[A-Za-z_][A-Za-z0-9_]*$/.test(k) ? k : JSON.stringify(k);
}

function serStr(s) {
  // Prefer String.raw`...` when backslashes present (matches existing bundle style).
  if (s.includes("\\") || s.includes("`") || s.includes("${")) {
    // Escape backticks and ${ for template literal; keep backslashes as-is for String.raw
    const escaped = s
      .replace(/\\/g, "\\") // keep
      .replace(/`/g, "\\`")
      .replace(/\$\{/g, "\\${");
    // Actually for String.raw, backslash-backtick is needed; backslashes for latex stay single.
    // Rebuild: in String.raw, only ` and ${ need escaping (with backslash).
    let out = "";
    for (let i = 0; i < s.length; i++) {
      const ch = s[i];
      if (ch === "`") out += "\\`";
      else if (ch === "$" && s[i + 1] === "{") {
        out += "\\${";
        i++;
      } else out += ch;
    }
    return "e`" + out + "`";
  }
  // JSON.stringify produces a quoted string with escapes — fine for plain text
  return JSON.stringify(s);
}

function buildSkills(skills) {
  return (
    "var e=String.raw,t=" +
    ser(skills) +
    ";function n(e){return t.find(t=>t.id===e)}export{t as n,n as t};\n"
  );
}

function buildTypes(papers) {
  return (
    "var e=String.raw,t=" +
    ser(papers) +
    ";function n(e){return t.find(t=>t.id===e)}function r(e){return e.parts.reduce((e,t)=>e+t.marks,0)}export{n,t as r,r as t};\n"
  );
}

function main() {
  const skills = loadJson("skills.json");
  const papers = loadJson("papers.json");
  // sync site/data
  fs.mkdirSync(SITE_DATA, { recursive: true });
  for (const name of ["skills.json", "papers.json", "catalog.json"]) {
    const src = path.join(DATA, name);
    if (fs.existsSync(src)) fs.copyFileSync(src, path.join(SITE_DATA, name));
  }
  fs.writeFileSync(SKILLS_OUT, buildSkills(skills));
  fs.writeFileSync(TYPES_OUT, buildTypes(papers));
  console.log(
    `Built ${SKILLS_OUT} (${skills.length} skills, ${skills.reduce((n, s) => n + s.items.length, 0)} items)`
  );
  console.log(`Built ${TYPES_OUT} (${papers.length} papers)`);
}

main();
