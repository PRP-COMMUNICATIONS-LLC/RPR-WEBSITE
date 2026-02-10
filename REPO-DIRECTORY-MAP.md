# Locked Map (2026-02-10)
src/: Source post-strike.
inventory/: Read-only 1-6.
AUDIT/: Reports.
Scripts/: Ops (.js).
.gitignore: .cursor/ legacy/ services/.

## Scripts: Stabilization Protocol (v5.1.0)
# PROTOCOL v5.1.0 SG-CANONICAL-2026
globs: ['src/components/**/*.tsx','src/components/icons/**.{tsx,css}','scripts/**/*.mjs']
alwaysApply: true

RULES:
- SINGLE FILE ONLY. Reject multi.
- Tabs exact: L1 skull, L2 assistant_device (FILL 0), L3 workspaces, L4 apk_install.
- Icons: SymbolTile wrapper + #glow; no SVG/local filter.
- Modules: L0Firm/L3Forge/AskOllieLauncher src/components/ props/layout NO logic.
- Imports: Relative ./ only.
- Lint: Resolve undef/unused-vars.
- LOOP: Edit → npm run build(0) → lint(≤3) → commit 'chore/fix: [file]'.
FORBID: inventory/ touch, new deps, multi-file, .cjs.

No other files.
