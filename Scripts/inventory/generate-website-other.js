/**
 * scripts/inventory/generate-website-other.js
 * mission: scan the repo and write website-other-files-2026-02-10.txt
 * category: ops, scripts & audit
 */

import fs from 'node:fs';
import path from 'node:path';

const REPO_ROOT = process.cwd();
const OUTPUT_PATH = path.join(
  REPO_ROOT,
  'AUDIT',
  'website-other-files-2026-02-10.txt',
);

function walk(dir, collected) {
  const EXCLUDES = ['.git', 'node_modules', 'dist'];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (EXCLUDES.includes(entry.name)) continue;

    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, collected);
    } else {
      collected.push(full);
    }
  }
}

function run() {
  const allFiles = [];

  const auditDir = path.dirname(OUTPUT_PATH);
  if (!fs.existsSync(auditDir)) {
    fs.mkdirSync(auditDir, { recursive: true });
  }

  walk(REPO_ROOT, allFiles);

  try {
    fs.writeFileSync(OUTPUT_PATH, allFiles.join('\n'), 'utf8');
    console.log(`success: wrote ${allFiles.length} paths to ${OUTPUT_PATH}`);
  } catch (err) {
    console.error('failed to write website-other report:', err);
    process.exit(1);
  }
}

run();
