import { ServiceBroker } from "moleculer";

const emailServiceBroker = new ServiceBroker();

const mockUsers = [];

emailServiceBroker.createService({
  name: "email",
  actions: {
    async sendEmail(context) {
      const { recipient, subject, content } = context.params;

      //   Simulate email sending
      console.log("Sending email to: ", recipient);
      console.log("Subject: ", subject);
      console.log("Content: ", content);

      return `Email sent successfully to ${recipient}!`;
    },
  },
});

export default emailServiceBroker;
