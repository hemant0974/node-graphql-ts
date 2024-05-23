initialize node project => npm init -y

add packages: - dependency:- typescript
dev-dependency:- @types/node nodemon rimraf ts-node

initialize typescript in project:- npx tsc --init --rootDir src --outDir build

create nodemon.json file add watch: ['src'] + ext: ".ts, .js" + exec: "ts-node .src/index.ts"

add build and prebuild command to remove and recreate build folder and compile typescript:- npm i rimraf , prebuild: riraf build, build:- npx tsc, npm run start:prod :- node build/index.js, npm run dev: nodemon
