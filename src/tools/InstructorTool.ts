import { MCPTool } from "mcp-framework";
import 'dotenv/config';

class InstructorTool extends MCPTool {
  name = "instructor";
  description = "Get the list of all Instructors tool description.";

  schema = {};

  private getAuthHeader() {
    return `Bearer ${process.env.API_TOKEN}`;
  }

  async execute() {
    const response = await this.fetch(`${process.env.API_HOST}/instructor`, {
      headers: {
        //Authorization: this.getAuthHeader(),
        "Content-Type": "application/json",
      },
    });
    return response;
  }
}

export default InstructorTool;