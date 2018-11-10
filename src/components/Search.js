import React from 'react';
import { connect } from 'react-redux';
import {startGetQuery} from '../actions/news'

class Search extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            search: ''
        }
    }

    onInputChange = (e) =>{
        const currentValue = e.target.value;
        this.setState({
            search: currentValue
        });
    }

    onKeyPress = (e)=>{
        if(e.key === 'Enter' && e.target.value !== ''){
            //dispatch the query if user presses enter
            this.props.dispatch(startGetQuery(e.target.value));
            this.setState({
                search: ''
            });
        }
    }

    render(){
        return(
            <div>
                <input 
                    type="text" 
                    value={this.state.search} 
                    onKeyPress={this.onKeyPress}
                    onChange={this.onInputChange}
                    className="input" 
                    placeholder="SEARCH">
                </input>
            </div>
        )
    }
}

export default connect()(Search);