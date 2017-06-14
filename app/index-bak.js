import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Input from './components/Input.js'


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'Antsa'
        }
        console.log('Constructor', this)
       this.textHelper = this.textHelper.bind(this);
    }
    textHelper(e){
        e.preventDefault();
        console.log('texthelper', this)
        this.setState({name: e.target.value})
    }
    
    render(){
        return(
            <div>
                <Input textHelper={this.textHelper}/>
                {console.log('component', this)}
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))