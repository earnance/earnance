const authenticationPaths = {
  "/api/auth/signup": {
    post: {
      summary: "User Sign Up",
      tags: ["Authentication"],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: { type: "string" },
                phone: { type: "string" },
                email: { type: "string", format: "email" },
                password: { type: "string" },
                role: { type: "string" },
              },
              required: ["name", "phone", "email", "password", "role"],
            },
          },
        },
      },
      responses: {
        201: {
          description: "User created successfully",
        },
        500: {
          description: "Internal server error",
        },
      },
    },
  },
  "/api/auth/login": {
    post: {
      summary: "User Login",
      tags: ["Authentication"],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              oneOf: [
                { required: ["phone", "password"] },
                { required: ["email", "password"] },
              ],
              properties: {
                phone: { type: "string" },
                email: { type: "string", format: "email" },
                password: { type: "string" },
              },
              required: ["phone", "email", "password"],
            },
          },
        },
      },
      responses: {
        201: {
          description: "User logged in successfully",
        },
        400: {
          description: "Invalid input",
        },
        500: {
          description: "Internal server error",
        },
      },
    },
  },
  "/api/auth/logout": {
    get: {
      summary: "User Logout",
      tags: ["Authentication"],
      description:
        "Logs out the authenticated user by clearing the session or token.",
      responses: {
        200: {
          description: "User logged out successfully",
        },
        401: {
          description: "Unauthorized - User is not logged in",
        },
        500: {
          description: "Internal server error",
        },
      },
    },
  },
  "/api/auth/emailCheck": {
    post: {
      summary: "Verify Code",
      tags: ["Authentication"],
      description: "Checks if the provided verification code is correct.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                code: {
                  type: "string",
                  example: "123456",
                  description: "The verification code to be checked",
                },
              },
              required: ["code"],
            },
          },
        },
      },
      responses: {
        200: {
          description: "Verification successful",
          content: {
            "application/json": {
              example: {
                message: "Verification code is correct",
              },
            },
          },
        },
        400: {
          description: "Invalid or missing verification code",
          content: {
            "application/json": {
              example: {
                error: "Invalid request data",
              },
            },
          },
        },
        401: {
          description: "Incorrect verification code",
          content: {
            "application/json": {
              example: {
                error: "Verification code is incorrect",
              },
            },
          },
        },
        500: {
          description: "Internal server error",
        },
      },
    },
  },
};

export default authenticationPaths;
