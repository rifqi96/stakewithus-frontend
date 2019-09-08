#!/bin/sh

if [ "$NODE_ENV" == "production" ] ; then
  npm run build
  http-server dist -p 8080
else
  npm run serve
fi