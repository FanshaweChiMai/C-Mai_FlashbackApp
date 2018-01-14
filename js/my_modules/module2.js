myApp.module1 = {
  // this would be a feature-specific module, like all things video
  saySomething(message) {
    console.log(myApp.mainMessage, message, `I'm the second file!`);
  },

  doSomething() {
    console.log('called module1 doSomething', 'hey, this just changed!');
  }
};
