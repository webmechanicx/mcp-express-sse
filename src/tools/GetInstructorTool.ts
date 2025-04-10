import { MCPTool } from "mcp-framework";
import { z } from "zod";
import 'dotenv/config';

interface GetInstructorInput {
  id: number;
}

class GetInstructorTool extends MCPTool<GetInstructorInput> {
  name = "get_instructor";
  description = "Get the details of an instructor tool description";

  schema = {
    id: {
      type: z.number(),
      description: "Instructor ID to process",
    },
  };

  private getAuthHeader() {
    return `Bearer ${process.env.API_TOKEN}`;
  }

  async execute(input: GetInstructorInput) {
    const response = await this.fetch(`${process.env.API_HOST}/instructor/?id=${input.id}`, {
      headers: {
        //Authorization: this.getAuthHeader(),
        "Content-Type": "application/json",
      },
    });
    return response;
  }
}

export default GetInstructorTool;