#!/bin/bash

if [ -d ./dist ];
then
  echo "dist inside $PWD already exists";
else
  webpack --config webpack.config.js --mode=production;
fi
