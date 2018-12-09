import React, {Component} from 'react'
import {connect} from 'react-redux';
import IronManSearchBox from './ironmansearchbox/ironmansearchbox';

class App extends Component {
    constructor(props){
        super(props)
        this.onTyped = this.onTyped.bind(this);
    }
    onTyped(){
        console.log(this.props);
    }
    componentDidMount(){
        this.onTyped.bind(this);
        console.log('component mount: ', this.props);
    }
    render(){
        return (
            <div>
               <IronManSearchBox onTyped={this.onTyped}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

export default connect(mapStateToProps)(App);