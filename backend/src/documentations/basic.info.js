import { config } from 'dotenv';

config();
const basicInfo = {
    openapi: "3.0.0",
    info: {
      title: "earnance API",
      version: "1.0.0",
      description: "This is the APIs documentation for earnance Platform"
    },
    tags: [
      {
        name: "Welcome",
        description: "Welcome endpoints for earnance Backend"
      },
      {
        name: "Authentication",
        description: "APIs for managing Authentication"
      },
    //   {
    //     name: "Interests",
    //     description: "APIs for managing user interests"
    //   },
    //   {
    //     name: "Profile",
    //     description: "APIs for managing Profile"
    //   },
    //   {
    //     name: "Users",
    //     description: "APIs for managing Users"
    //   },
    //   {
    //     name: "Project Categories",
    //     description: "APIs for managing Project Categories"
    //   },{
    //     name: "Project",
    //     description: "APIs for managing Projects"
    //   },
    //   {
    //     name: "Enrollments",
    //     description: "APIs for managing Enrollments"
    //   },
    //   {
    //     name: "Enrollment Tasks",
    //     description: "APIs for managing Enrollment Tasks"
    //   },
    //   {
    //     name: "Tasks",
    //     description: 'APIs for managging Tasks'
    //   }   
    ],
    components: {
        securitySchemes: {
            Bearer: {
              type: 'apiKey',
              name: 'Authorization',
              in: 'header'
            }
          }
    },
    security: [
      {
        Bearer: []
      }
    ]
  };
  
  export default basicInfo;