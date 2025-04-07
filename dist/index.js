"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mcp_js_1 = require("@modelcontextprotocol/sdk/server/mcp.js");
const sse_js_1 = require("@modelcontextprotocol/sdk/server/sse.js");
const zod_1 = require("zod");
const server = new mcp_js_1.McpServer({
    name: "example-server",
    version: "1.0.0",
    capabilities: {
        //resources: {},
        tools: {},
    },
});
// ... set up server resources, tools, and prompts ...
const app = (0, express_1.default)();
// to support multiple simultaneous connections we have a lookup object from
// sessionId to transport
const transports = {};
app.get("/sse", (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const transport = new sse_js_1.SSEServerTransport('/messages', res);
    transports[transport.sessionId] = transport;
    res.on("close", () => {
        delete transports[transport.sessionId];
    });
    yield server.connect(transport);
}));
app.post("/messages", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const sessionId = req.query.sessionId;
    const transport = transports[sessionId];
    if (transport) {
        yield transport.handlePostMessage(req, res);
    }
    else {
        res.status(400).send('No transport found for sessionId');
    }
}));
server.tool("echo", { message: zod_1.z.string() }, (_a) => __awaiter(void 0, [_a], void 0, function* ({ message }) {
    return ({
        content: [{ type: "text", text: `Tool echo: ${message}` }]
    });
}));
app.listen(3001);
//# sourceMappingURL=index.js.map