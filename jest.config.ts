export default {
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
  testEnvironment: "node",
  coverageDirectory: "./coverage/",
  coverageReporters: ["json", "lcov", "clover"],
  collectCoverage: true,
  coveragePathIgnorePatterns: ["src/__tests__"],
  modulePathIgnorePatterns: [
    "<rootDir>/benchmark/.*",
    "<rootDir>/cli/.yalc/.*",
  ],
  testPathIgnorePatterns: [
    "benchmark/",
    "tools/",
    "mobile-test-app/",
    "lib/",
    "lib-es/",
    ".yalc",
    "cli/",
    "test-helpers/",
  ],
  moduleNameMapper: {
    "^@polkadot/metadata/(.*)/(.*)": "@polkadot/metadata/$1/$2.cjs",
    "^@polkadot/metadata/decorate$": "@polkadot/metadata/decorate/index.cjs",
    "^@polkadot/metadata/(.*)": "@polkadot/metadata/$1.cjs",
    "^@polkadot/metadata$": "@polkadot/metadata/index.cjs",
    "^@polkadot/networks/(.*)": "@polkadot/networks/$1.cjs",
    "^@polkadot/networks$": "@polkadot/networks/index.cjs",
    "^@polkadot/types/codec$": "@polkadot/types/codec/index.cjs",
    "^@polkadot/types/primitive$": "@polkadot/types/primitive/index.cjs",
    "^@polkadot/types/augment$": "@polkadot/types/augment/index.cjs",
    "^@polkadot/types/metadata$": "@polkadot/types/metadata/index.cjs",
    "^@polkadot/types/metadata/decorate$":
      "@polkadot/types/metadata/decorate/index.cjs",
    "^@polkadot/types/types$": "@polkadot/types/types/index.cjs",
    "^@polkadot/types/(.*)/(.*)": "@polkadot/types/$1/$2.cjs",
    "^@polkadot/types/(.*)": "@polkadot/types/$1.cjs",
    "^@polkadot/types$": "@polkadot/types/index.cjs",
    "^@polkadot/types-known/(.*)": "@polkadot/types-known/$1.cjs",
    "^@polkadot/types-known$": "@polkadot/types-known/index.cjs",
    "^@polkadot/util$": "@polkadot/util/index.cjs",
    "^@polkadot/util-crypto$": "@polkadot/util-crypto/index.cjs",
    "^@polkadot/wasm-crypto$": "@polkadot/wasm-crypto/index.cjs",
    "^@polkadot/wasm-crypto-asmjs/(.*)": "@polkadot/wasm-crypto-asmjs/$1.cjs",
    "^@polkadot/wasm-crypto-asmjs$": "@polkadot/wasm-crypto-asmjs/empty.cjs",
    "^@polkadot/wasm-crypto-wasm/(.*)": "@polkadot/wasm-crypto-wasm/$1.cjs",
    "^@polkadot/wasm-crypto-wasm$": "@polkadot/wasm-crypto-wasm/data.cjs",
    "^@polkadot/x-global$": "@polkadot/x-global/index.cjs",
    "^@polkadot/x-randomvalues$": "@polkadot/x-randomvalues/node.cjs",
    "^@polkadot/x-textdecoder$": "@polkadot/x-textdecoder/node.cjs",
    "^@polkadot/x-textencoder$": "@polkadot/x-textencoder/node.cjs",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!@polkadot|@babel/runtime/helpers/esm/)",
  ],
  moduleDirectories: ["node_modules", "cli/node_modules"],
};
