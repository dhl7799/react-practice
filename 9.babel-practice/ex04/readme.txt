npm init -y
npm i -D @babel/core
npm i -D @babel/core @babel/cli
npx babel src -d dist


npm i - D @babel/plugin-transform-block-scoping
npx babel src/index.js -o dist/index.js --plugins @babel/plugin-transform-block-scoping

npm i - D @babel/plugin-transform-parameters
npx babel src/index.js -o dist/index.js --plugins @babel/plugin-transform-parameters

npm i - D @babel/plugin-transform-for-of
npx babel src/index.js -o dist/index.js --plugins @babel/plugin-transform-for-of


Env Preset: 변환 규칙 모음
npm i -D @babel/core @babel/cli @babel/preset-env

npm list

npx babel src/index.js -o dist/index.js
