import { ServiceBroker } from "moleculer";

const authServiceBroker = new ServiceBroker();

authServiceBroker.createService({
  name: "auth",
  actions: {
    async loginUser(context) {
      const { email, password } = context.params;

      // Simulate a delay of 3 seconds
      await new Promise((resolve) => setTimeout(resolve, 3000));

      if (email === "admin@example.com" && password === "admin") {
        return {
          success: "true",
          message: "Login success",
        };
      } else {
        return {
          success: "false",
          message: "Login failure",
        };
      }
    },
  },
});

export default authServiceBroker;
