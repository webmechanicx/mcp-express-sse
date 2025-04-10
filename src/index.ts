import { MCPServer } from "mcp-framework";

const server = new MCPServer({
  transport: {
    type: "http-stream",
    options: {
        port: 8080,
        endpoint: "/mcp",  
      cors: {
        allowOrigin: "*",
        allowMethods: "GET, POST, OPTIONS",
        maxAge: "86400"
      },
      session: {                 // Session configuration
        enabled: true,           // Enable session management (default: true)
        headerName: "Mcp-Session-Id", // Session header name (default: "Mcp-Session-Id")
        allowClientTermination: true  // Allow clients to terminate sessions (default: true)
      },
      resumability: {            // Stream resumability configuration
        enabled: false,          // Enable stream resumability (default: false)
        historyDuration: 300000  // How long to keep message history in ms (default: 300000 - 5 minutes)
      }
    }
  }});

server.start();