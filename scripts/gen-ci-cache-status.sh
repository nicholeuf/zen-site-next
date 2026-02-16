#!/usr/bin/env bash
# Generate a CI cache status JSON file for a single cache type


set -e

# Validate argument count
if [[ $# -ne 9 ]]; then
  echo "Error: Expected 9 arguments, got $#." >&2
  echo "Usage: $0 <cache_type> <cache_hit_raw> <run_id> <run_attempt> <workflow> <job> <ref> <sha> <output_file>" >&2
  exit 1
fi

# Validate non-empty arguments
for i in 1 2 3 4 5 6 7 8 9; do
  eval arg=\${$i}
  if [[ -z "$arg" ]]; then
    echo "Error: Argument $i is required and must be non-empty." >&2
    echo "Usage: $0 <cache_type> <cache_hit_raw> <run_id> <run_attempt> <workflow> <job> <ref> <sha> <output_file>" >&2
    exit 1
  fi
done

# Validate run_attempt is a number
if ! [[ "$4" =~ ^[0-9]+$ ]]; then
  echo "Error: run_attempt (argument 4) must be a number, got '$4'." >&2
  exit 1
fi

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


# Normalize and validate cache_hit_raw to boolean for JSON
if [[ "$cache_hit_raw" == "true" || "$cache_hit_raw" == true ]]; then
  cache_hit=true
elif [[ "$cache_hit_raw" == "false" || "$cache_hit_raw" == false ]]; then
  cache_hit=false
else
  echo "Error: cache_hit_raw (argument 2) must be a boolean or 'true'/'false', got '$cache_hit_raw'." >&2
  exit 1
fi

# Validate run_id is a number
if ! [[ "$3" =~ ^[0-9]+$ ]]; then
  echo "Error: run_id (argument 3) must be a number, got '$3'." >&2
  exit 1
fi

# Validate run_attempt is a number (already checked above, but move here for clarity)
if ! [[ "$4" =~ ^[0-9]+$ ]]; then
  echo "Error: run_attempt (argument 4) must be a number, got '$4'." >&2
  exit 1
fi

mkdir -p "$(dirname "$output_file")"

# Use jq to safely generate JSON with proper escaping
jq -n \
  --arg cache_type "$cache_type" \
  --arg workflow "$workflow" \
  --arg job "$job" \
  --arg ref "$ref" \
  --arg sha "$sha" \
  --argjson cache_hit "$cache_hit" \
  --argjson run_id "$run_id" \
  --argjson run_attempt "$run_attempt" \
  '{
    cache_type: $cache_type,
    cache_hit: $cache_hit,
    run_id: $run_id,
    run_attempt: $run_attempt,
    workflow: $workflow,
    job: $job,
    ref: $ref,
    sha: $sha
  }' > "$output_file"

printf "Cache status written to %s\n" "$output_file"
