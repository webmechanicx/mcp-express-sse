#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mcp_framework_1 = require("mcp-framework");
const server = new mcp_framework_1.MCPServer({
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
            session: {
                enabled: true, // Enable session management (default: true)
                headerName: "Mcp-Session-Id", // Session header name (default: "Mcp-Session-Id")
                allowClientTermination: true // Allow clients to terminate sessions (default: true)
            },
            resumability: {
                enabled: false, // Enable stream resumability (default: false)
                historyDuration: 300000 // How long to keep message history in ms (default: 300000 - 5 minutes)
            }
        }
    }
});
server.start();
//# sourceMappingURL=index.js.map