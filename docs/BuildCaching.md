# Build caching

## CI caching strategy

The CI workflow uses two caches to speed up runs. These are intentional and should stay aligned with the workflow file to avoid cache misses or wasted storage.

- **pnpm store cache**: Enabled via `actions/setup-node` with `cache: 'pnpm'`. The key is based on the lockfile, so changes to `pnpm-lock.yaml` create a new cache.
- **Next.js build cache**: Stored at `.next/cache` via `actions/cache`. The key combines the OS, the lockfile hash, and a hash of source files so edits to app code invalidate the cache while dependency-only changes reuse it.

## CI timing baseline (GitHub Actions)

Measured on 2026-02-16 using ubuntu-latest runners. The comparison below records the observed end-to-end job duration (checkout → tests) and the cache-hit conditions so we can validate the speed-up is real and repeatable.

| Scenario | Cache conditions | Job duration | Delta |
| --- | --- | --- | --- |
| Cold run (baseline) | pnpm: miss, Next.js: miss | TBD | — |
| Warm run (cached) | pnpm: hit, Next.js: hit | TBD | TBD |

Notes:
- The cache-hit signals are written to the Actions job summary in the workflow.
- Replace TBD with real measurements from the Actions job duration once captured.
- If timings regress by >10%, re-run with warm caches and update this table.

## Debugging cache misses

- Check the Actions log for “Cache restored from key” or “Cache not found” in the cache step.
- Verify the cache path is still `.next/cache` and the key/restore-keys match the workflow.
- If a cache is corrupted or stale, delete it from the repository’s Actions cache list and re-run the workflow.
