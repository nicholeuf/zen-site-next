#!/usr/bin/env bash
# Generate a CI cache status JSON file from environment variables

set -e

# Arguments (all optional, fallback to env)
pnpm_cache_hit="${1:-${PNPM_CACHE_HIT:-unknown}}"
nextjs_cache_hit="${2:-${NEXTJS_CACHE_HIT:-false}}"
run_id="${3:-${GITHUB_RUN_ID:-}}"
run_attempt="${4:-${GITHUB_RUN_ATTEMPT:-}}"
workflow="${5:-${GITHUB_WORKFLOW:-}}"
job="${6:-${GITHUB_JOB:-}}"
ref="${7:-${GITHUB_REF:-}}"
sha="${8:-${GITHUB_SHA:-}}"

output_file="${9:-artifacts/ci-cache-status.json}"
mkdir -p "$(dirname "$output_file")"

cat <<EOF > "$output_file"
{
  "pnpm_cache_hit": "$pnpm_cache_hit",
  "nextjs_cache_hit": "$nextjs_cache_hit",
  "run_id": "$run_id",
  "run_attempt": "$run_attempt",
  "workflow": "$workflow",
  "job": "$job",
  "ref": "$ref",
  "sha": "$sha"
}
EOF

printf "Cache status written to %s\n" "$output_file"
