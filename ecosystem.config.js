module.exports = {
  apps: [
    {
      name: "app",
      script: "./build/index.js",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
      max_restarts: 100,
    },
  ],
};
