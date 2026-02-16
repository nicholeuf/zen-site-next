#!/usr/bin/env bash
# Generate a CI cache status JSON file for a single cache type

set -e

# Arguments
# $1: cache_type (e.g. pnpm, nextjs)
# $2: cache_hit_raw (true/false)
# $3: run_id
# $4: run_attempt
# $5: workflow
# $6: job
# $7: ref
# $8: sha
# $9: output_file (e.g. artifacts/ci-cache-status-pnpm.json)

cache_type="$1"
cache_hit_raw="$2"
run_id="$3"
run_attempt="$4"
workflow="$5"
job="$6"
ref="$7"
sha="$8"
output_file="$9"

# Convert string to boolean/null for JSON
if [[ "$cache_hit_raw" == "true" ]]; then
  cache_hit=true
elif [[ "$cache_hit_raw" == "false" ]]; then
  cache_hit=false
else
  cache_hit=null
fi

mkdir -p "$(dirname "$output_file")"

cat <<EOF > "$output_file"
{
  "cache_type": "$cache_type",
  "cache_hit": $cache_hit,
  "run_id": "$run_id",
  "run_attempt": "$run_attempt",
  "workflow": "$workflow",
  "job": "$job",
  "ref": "$ref",
  "sha": "$sha"
}
EOF

printf "Cache status written to %s\n" "$output_file"
