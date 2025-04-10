#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mcp_framework_1 = require("mcp-framework");
const server = new mcp_framework_1.MCPServer({
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
    }
});
server.start();
//# sourceMappingURL=index.js.map