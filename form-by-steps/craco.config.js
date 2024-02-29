const path = require("path");
module.exports = {
  eslint: null,
  webpack: {
    // this list needs to be in sync with tsconfig.paths.json
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/app/components"),
      "@assets": path.resolve(__dirname, "src/app/assets"),
      "@hooks": path.resolve(__dirname, "src/app/hooks"),
      "@mocks": path.resolve(__dirname, "src/app/mocks"),
      "@models": path.resolve(__dirname, "src/app/models"),
      "@pages": path.resolve(__dirname, "src/app/pages"),
      "@providers": path.resolve(__dirname, "src/app/providers"),
      "@routes": path.resolve(__dirname, "src/app/routes"),
      "@sections": path.resolve(__dirname, "src/app/sections"),
      "@services": path.resolve(__dirname, "src/app/services"),
      "@state": path.resolve(__dirname, "src/app/state"),
      "@styles": path.resolve(__dirname, "src/app/styles"),
      "@theme": path.resolve(__dirname, "src/app/theme"),
      "@utils": path.resolve(__dirname, "src/app/utils"),
    },
  },
};
