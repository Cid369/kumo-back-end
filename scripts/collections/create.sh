#!/bin/bash

API="http://localhost:4741"
URL_PATH="/collections"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "collection": {
      "title": "'"${TITLE}"'",
      "file": "'"${FILE}"'",
      "user": "'"${ID}"'"
    }
  }'

echo
