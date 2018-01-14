var myApp = {
  mainMessage : "Welcome!",

  mainGreeting(){
    console.log("Welcome tot he app!");
  }
}

myApp.module1 = {
  saySomething(message)
  {
    console.log(myApp.mainMessage, message, "Second file here");
  },

  doSomething(){
    console.log('module1 doSomething function');
  }
}

myApp.module2 = {
  doSomething()
  {
    console.log('module1 doSomething function');
  }
}

(() =>{
  myApp.mainGreeting();

  myApp.module1.saySomething("I'm giving up on you");

  function myFunction()
  {
    var theHeading = doument.querySelector('h1');

    theHeading.textContent = myApp.mainMessage;
  }

  myFunction();
});
