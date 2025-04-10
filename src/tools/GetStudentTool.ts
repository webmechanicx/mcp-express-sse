import { MCPTool } from "mcp-framework";
import { z } from "zod";
import 'dotenv/config';

interface GetStudentInput {
  id: number;
}

class GetStudentTool extends MCPTool<GetStudentInput> {
  name = "get_student";
  description = "Get a single student information tool description";

  schema = {
    id: {
      type: z.number(),
      description: "id to process",
    },
  };

  async execute(input: GetStudentInput) {

  const response = await this.fetch(`${process.env.API_HOST}/student/?id=${input.id}`, {
      headers: {
        //Authorization: this.getAuthHeader(),
        "Content-Type": "application/json",
      },
    });
    return response;
  }
}

export default GetStudentTool;