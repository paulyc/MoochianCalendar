all: test

build: index.ts
	tsc index.ts

test: lib/*.mjs test/*.mjs
	node --experimental-modules test/mooch.mjs

run: index.js
	node index.js
