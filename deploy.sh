#!/bin/sh
# build
npm run build

# cd to dist folder
cd dist

# push code to gh-pages branch
git init
git add .
git commit -m "gh-pages"

git push -f git@github.com:qiaoxun/vue-formbuilder.git master:gh-pages