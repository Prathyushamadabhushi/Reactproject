// Import the react and react dom libraries
import React from 'react';
import ReactDOM from 'react-dom';
// Create a react component
const App = () =>{
    return (
        <div className="form-wrapper">
            <div>
                <label class="label" for="name">Enter Name: </label>
                <input id="name" type="text"></input>
                <button style={{backgroundColor:'blue',color:'white'}}>Submit</button>
            </div>
        </div>
    )
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);