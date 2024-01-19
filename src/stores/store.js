export default {
  state: {
    contacts: {
      1234567890: "John Doe",
    },
    callLog: [],
  },
  getContact(number) {
    return this.state.contacts[number];
  },
  addCallLog(call) {
    this.state.callLog.push(call);
  },
  addContact(number, name) {
    if (!this.state.contacts[number]) {
      this.state.contacts[number] = name;
    }
  },
};
