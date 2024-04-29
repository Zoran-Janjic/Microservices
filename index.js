import UserServices from "./services/user.service.js";
import EmailService from "./services/email.service.js";
import AuthService from "./services/auth.service.js";

// Greater service as simple example
// serviceBroker.createService({
//   name: "greater",
//   actions: {
//     sayHello(context) {
//       return `Hello ${context.params.name}`;
//     },
//   },
// });

// async function sayHello(context) {
//   await serviceBroker.start();

//   const res = await serviceBroker.call("greater.sayHello", { name: "Zoran" });

//   console.log(`Res is ${res}`);

//   serviceBroker.stop();
// }

// sayHello();

//  end of example

// async function startApp() {
//   // Start services
//   await UserServices.start();
//   console.log("User service started");

//   try {
//     // Simulate new user creation
//     const newUser = await UserServices.call("user.createNewUser", {
//       user_name: "Zoran",
//       user_email: "test@example.com",
//     });
//     console.log("New user created: ", newUser);

//     const allUsers = await UserServices.call("user.getUsers");
//     console.log("All users: ", allUsers);
//   } catch (error) {
//     console.log("error with user services: ", error.message);
//   } finally {
//     console.log("User Services stopped");
//     await UserServices.stop();
//   }
// }

// startApp();

async function StartUserService() {
  // Start services
  await UserServices.start();
  console.log("User service started");

  try {
    // Simulate new user creation
    const newUser = await UserServices.call("user.createNewUser", {
      user_name: "Zoran",
      user_email: "test@example.com",
    });
    console.log("New user created: ", newUser);

    const allUsers = await UserServices.call("user.getUsers");
    console.log("All users: ", allUsers);
  } catch (error) {
    console.log("error with user services: ", error.message);
  } finally {
    console.log("User Services stopped");
    await UserServices.stop();
  }
}

// StartUserService();

async function StartEmailService() {
  // Start services
  await EmailService.start();
  console.log("Email service started");

  try {
    // Simulate new user creation
    const newEmail = await EmailService.call("email.sendEmail", {
      recipient: "Zoran",
      subject: "Some subject",
      content: "Contetn of the email",
    });

    console.log(`Email service res: ${newEmail}`);
  } catch (error) {
    console.log("error with email services: ", error.message);
  } finally {
    console.log("Email Services stopped");
    await EmailService.stop();
  }
}

// StartEmailService();

async function StartAuthService() {
  // Start services
  await AuthService.start();

  console.log("Auth service started");

  try {
    // Simulate new user creation
    const res = await AuthService.call("auth.loginUser", {
      email: "admin@example.com",
      password: "admin",
    });

    console.log(`User service res: ${JSON.stringify(res, null, 2)}`);
  } catch (error) {
    console.log("error with auth services: ", error.message);
  } finally {
    console.log("Auth Services stopped");
    await EmailService.stop();
  }
}

StartAuthService();
