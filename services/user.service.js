import { ServiceBroker } from "moleculer";

const userServiceBroker = new ServiceBroker();

const mockUsers = [];

userServiceBroker.createService({
  name: "user",
  actions: {
    async createNewUser(context) {
      const { user_name, user_email } = context.params;

      const newUser = {
        user_name,
        user_email,
        user_id: generateId(),
      };

      mockUsers.push(newUser);
      return newUser;
    },
    async getUsers(context) {
      return mockUsers;
    },
  },
});

function generateId() {
  return Math.floor(Math.random() * 1000) + 1;
}

export default userServiceBroker;
