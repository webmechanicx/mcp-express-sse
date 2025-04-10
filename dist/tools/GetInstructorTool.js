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
Object.defineProperty(exports, "__esModule", { value: true });
const mcp_framework_1 = require("mcp-framework");
const zod_1 = require("zod");
require("dotenv/config");
class GetInstructorTool extends mcp_framework_1.MCPTool {
    constructor() {
        super(...arguments);
        this.name = "get_instructor";
        this.description = "Get the details of an instructor tool description";
        this.schema = {
            id: {
                type: zod_1.z.number(),
                description: "Instructor ID to process",
            },
        };
    }
    getAuthHeader() {
        return `Bearer ${process.env.API_TOKEN}`;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.fetch(`${process.env.API_HOST}/instructor/?id=${input.id}`, {
                headers: {
                    //Authorization: this.getAuthHeader(),
                    "Content-Type": "application/json",
                },
            });
            return response;
        });
    }
}
exports.default = GetInstructorTool;
//# sourceMappingURL=GetInstructorTool.js.map