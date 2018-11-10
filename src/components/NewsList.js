import React from 'react';
import {connect} from 'react-redux';
import NewsListItem from './NewsListItem';

const NewsList = (props)=>(
    <div className="content-container news-list">
        {props.newsArticles.map((newsArticle, index)=>{
            return <NewsListItem key={index} {...newsArticle}/>
        })}
    </div>
)

const mapStateToProps = (state)=>({
    newsArticles: state.news
});

export default connect(mapStateToProps)(NewsList);


