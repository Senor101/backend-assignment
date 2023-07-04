const http = require("http");
require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

const startServer = async () => {
  // TODO database connection
  server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });
};

startServer();
