let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    greet: function() {
      console.log("Hello," + this.firstName);
    }
  };
  person.greet();
  console.log(person);


