#!/bin/bash

# deploy2 브랜치로 전환
git checkout deploy2 || exit 1

# main 브랜치의 dist 폴더 가져오기
git checkout main -- dist

# dist 내용만 루트로 이동
mkdir temp
mv dist/* temp/
rm -rf dist
mv temp/* .
rmdir temp

echo "✅ dist contents deployed to deploy2 branch root."
