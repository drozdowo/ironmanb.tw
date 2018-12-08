import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends Component{
    render(){
        return (
            <h1 class="header">hello</h1>
        );
    }
}

const theApp = (
    <div>
        <App />
    </div>
);

ReactDOM.render(theApp, document.getElementById('root'));