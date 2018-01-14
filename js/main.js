(() => {
  myApp.mainGreeting();

  myApp.module1.saySomething('sup, yo!');

  function myFunc() {
    var theHeading = document.querySelector('h1');

    theHeading.textContent = myApp.mainMessage;
  }

  function someOtherFunc() {
    // stub
  }

  myFunc();

})();
