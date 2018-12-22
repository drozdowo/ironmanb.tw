import React, {Component} from 'react'
import {connect} from 'react-redux';
import IronManSearchBox from './ironmansearchbox/ironmansearchbox';
import './app.css'

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
            <div className="page-container">
                <div className="app-container">
                    <div className="app-header-container">
                        <div className="scroll-container">
                        <div className="scroll-blank">regular</div> 
                        <div className="scroll-ultimate">ultimate</div> 
                        <div className="scroll-hardcore">hardcore</div> 
                        </div>
                        ironmanb.tw
                    </div>
                    <div className="spacer"/>
                <IronManSearchBox />
                </div>
                <div className="page-footer">
                    ironmanb.tw website by <a href="https://github.com/drozdowo/">https://github.com/drozdowo/</a> (give me bonds pls lmao)
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);