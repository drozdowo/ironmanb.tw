import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class App extends Component{
    render(){
        return (
            <h1>hello</h1>
        );
    }
}

const theApp = (
    <div>
        <App />
    </div>
);

ReactDOM.render(theApp, document.getElementById('root'));