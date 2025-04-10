import { MCPServer } from "mcp-framework";

const server = new MCPServer({
  transport: {
    type: "http-stream",
    options: {
      port: 8080,
      cors: {
        allowOrigin: "*",
        allowMethods: "GET, POST, OPTIONS",
        maxAge: "86400"
      }
    }
  }});

server.start();