module.exports = {
  apps: [
    {
      name: "app",
      script: "./build/index.js",
      env: {
        NODE_ENV: "development",
        MONGO_URI:
          "mongodb://botkitdb:d26a19ff5153c0a62c3e345c30ad110b@dokku-mongo-botkitdb:27017/botkitdb",
      },
      env_production: {
        NODE_ENV: "production",
        MONGO_URI:
          "mongodb://botkitdb:d26a19ff5153c0a62c3e345c30ad110b@dokku-mongo-botkitdb:27017/botkitdb",
      },
      max_restarts: 100,
    },
  ],
};
