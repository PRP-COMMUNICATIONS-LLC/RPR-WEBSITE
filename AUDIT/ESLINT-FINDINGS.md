# ESLint findings report

Generated after adding ESLint to the project and running `npm run lint`.  
Scripts in `Scripts/` use Node globals (console, process, require, __dirname) so only app source and Scripts type/structure issues are listed.

## Summary

After fixes: **0 errors**, **3 warnings**. `npm run lint` exits 0.

| Severity | Count (initial) | After fixes |
|----------|-----------------|-------------|
| Error   | 3               | 0           |
| Warning | 3               | 3           |

## Structured findings

| File (relative) | Error code | One-line cause | Fix type |
|-----------------|------------|----------------|----------|
| `src/components/AskOllie.tsx` | @typescript-eslint/no-unused-vars | `err` is defined but never used | Remove or prefix unused variable (e.g. `_err`) |
| `src/contexts/AuthContext.tsx` | @typescript-eslint/no-unused-vars | `error` is defined but never used | Remove or prefix unused variable (e.g. `_error`) |
| `src/hooks/useRuleRegistry.ts` | @typescript-eslint/no-unused-vars | `_id` is defined but never used | Remove from destructuring or use/prefix |
| `Scripts/ci-firebase-sa-verify.ts` | @typescript-eslint/no-explicit-any | Unexpected `any` at 47:22, 87:19 | Replace with a specific type |
| `src/components/MermaidViewer.tsx` | react-hooks/exhaustive-deps | useEffect missing dependency `isLoading` | Add `isLoading` to dependency array or adjust effect |

## Commands run

- `npm install` (with ESLint and related devDependencies)
- `npm run lint` → `eslint .`

## Config

- `eslint.config.js` (flat config) with TypeScript, React, and React Hooks.
- `Scripts/**` use Node globals and relaxed no-require-imports / no-explicit-any (warn).
