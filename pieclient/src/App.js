import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth'
import Pies from './components/Pies/Pies'
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  const [sessionToken, setSessionToken]= useState();
  // const sessionToken = 'undefined';
  // const setSessionToken = () => {
  //   console.log('this is a function connected to my variable of sessionToken')
  // }
// console.log(sessionToken)

const viewConductor = () => {
  return sessionToken === undefined ? <Auth /> : <Pies />
}
  
//if my session token is undefined, take me to my login page. If not, show me my pies

  return (
    <div className="App">
     <Navbar/>
     {/* <Auth/>  
     <hr />
     <Pies />                     */}
     {viewConductor()}
    </div>
  );
}

export default App;


//use interpolation to call on a variable inside of the js part (the return)

//example of array destructuring
// let [a, ,c]=["Mercury", "Earth", "Cheese"]
// console.log(a,c)


//spread operator
let planets = ["Cherry", "Lump", "Peach", "Eww","Same", "Sup"]
let [first, , third, ...others]= planets;
console.log(first);
console.log(third);
console.log(others);    //gives us an array from Eww to Sup
console.log(others instanceof Array); //true. a new array called others