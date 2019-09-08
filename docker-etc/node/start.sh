#!/bin/sh

# If node_modules folder exists, don't npm ci unless --npm-i option is set
if [ ! -d "node_modules" ] || [ "$FORCE_NPM_I" == "true" ] ; then
  npm ci
fi

if [ "$NODE_ENV" == "production" ] ; then
  npm run build
  http-server dist -p 8080
else
  npm run serve
fi