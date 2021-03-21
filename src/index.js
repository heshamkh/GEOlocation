import React from 'react';
import ReactDOM from 'react-dom'; 
// import faker from 'faker';

const App = () => {
     window.navigator.geolocation.getCurrentPosition(
        position => console.log(position),
        err => console.log(err)
    );
    return (
    <div className="ui container comments"> 
        <h1>Hesham</h1>
    </div>
    );
}

 
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);