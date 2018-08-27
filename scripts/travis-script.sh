#!/bin/bash

set -x
set -e

run_test() {
  npm test -- -w 2 $*
}


if [ "$TEST_TYPE" = lint ]; then
  npm run lint
elif [ "$TEST_TYPE" = test:dist ]; then
  npm run dist
  node ./tests/dekko/dist.test.js
  LIB_DIR=dist run_test
elif [ "$TEST_TYPE" = test:lib ]; then
  npm run compile
  node ./tests/dekko/lib.test.js
  LIB_DIR=lib run_test
elif [ "$TEST_TYPE" = test:es ]; then
  npm run compile
  LIB_DIR=es run_test
elif [ "$TEST_TYPE" = test:dom ]; then
  run_test --coverage
  bash <(curl -s https://codecov.io/bash)
fi
