import React, {useState} from 'react';
import './Auth.css';

const Auth = () => {

    const[firstName, setFirstName] = useState('')      //thinking of ahead for people who need to sign up
    const[lastName, setLastName] = useState('')
    const [email, setEmail] = useState('');           //called array destructuring. means when i start my email value will be nothing
    const [password, setPassword]= useState('');
    const [login, setLogin] = useState(true);    //setting login to be true initially 

    const title = () => {
        return login ? "Login" : 'Signup';
    }


    const buttonTitle = () => {
        return login ? "Login" : "Signup"        //ternary to make our button change from login to signup 
    }

    const loginToggle = (event) => {
        event.preventDefault();           //prevents refreshing
        setLogin(!login);                //will change my value of the state login once button is hit, the re-render does this
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
    }

    const signupFields = () => !login ?   
    (
    <div>
        <label  htmlFor='firstName'>First Name:</label>
        <br/>
        <input className="input" type='text' id='firstName' value={firstName} onChange={(event) => setFirstName(event.target.value)} />
        <br/>
        <label  htmlFor='lastName'>Last Name:</label>
        <br/>
        <input className="input" type='text' id='lastName' value={lastName} onChange={(event)=> setLastName(event.target.value) } />
    </div>  
    ) : null;                    
    //if login is true, just show email, password, so (null) if login false, show add't input fields
    //have to have a default in a ternary, so null is like saying "if our login is true, don't show any additional input fields"

    return(
    <div>
        <form>
            <h1>{title()}</h1>
            <br/>
            {signupFields()}
            <br/>
            <label htmlFor='email'>Email:</label>
            <br />
            <input className="input" type='text' id='email' value={email} onChange={(event) => setEmail(event.target.value) } />
            <br />
            <label htmlFor='password'>Password:</label> 
            <br />
            <input className="input" type='password' id='password' value={password} onChange={ (event) => setPassword (event.target.value)} />   
            <br />
            <button id="button" onClick={loginToggle}>{buttonTitle()}</button>
            <br />
            <button id="button" type='submit'>Submit User Data</button>
        </form>
    </div>
    )
}



export default Auth;

//all logic must happen above return
//inside return, it is JSX (stuff that looks like html)
//can do logic inside of the return if you use interpolation
//e as teh event, setEmail is going to change my state. value refers to value in the console
//login ternary if login is true, have the word login show up, else have sign up show up 
//our state for login in is set to true, so it will show up as Login on homepage initially
//loginToggle does not get () after bc it is waiting for the click, so it does NOT get invoked right away