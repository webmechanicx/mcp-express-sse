import { MCPTool } from "mcp-framework";
import { z } from "zod";
import 'dotenv/config';

class StudentTool extends MCPTool {
  name = "student";
  description = "Get the list of all students tool description.";

  schema = {};

  private getAuthHeader() {
    return `Bearer ${process.env.API_TOKEN}`;
  }

  async execute() {
  const response = await this.fetch(`${process.env.API_HOST}/student`, {
      headers: {
        //Authorization: this.getAuthHeader(),
        "Content-Type": "application/json",
      },
    });
    return response;
  }
}

export default StudentTool;