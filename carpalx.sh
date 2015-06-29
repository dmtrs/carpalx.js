#!/bin/bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

NODE_ENV=production node $DIR/src/index.js
