import React from 'react';
import { connect } from 'react-redux';
import NewsList from './NewsList';
import {startGetNews} from '../actions/news';
import Navigation from './Navigation';

// const HeadlinesPage = (props)=>(
//     <div>  
//         <NewsList />
//     </div>
// )

class NewsPage extends React.Component{
    
    //make the api call here
    componentDidMount(){
        //dispatch the async action
        this.props.dispatch(startGetNews());
    }

    render(){
        return (
            <div className="news-page-container">      
                <Navigation />
                <NewsList />
            </div>
        )
    }
}

export default connect()(NewsPage);

