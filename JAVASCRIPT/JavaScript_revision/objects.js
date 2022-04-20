const user ={
    firstName:'Patrick',
    age:30,
    city: "Paris",
}

const updatedUser = {...user,    age:31,    city: "Lyon"};
//spread operator : copy all the properties of the object
console.log(updatedUser);
console.log(user);

///assign method
const userUpdated= Object.assign({},user,{age:34,city: "Marseille"});
console.log (userUpdated);