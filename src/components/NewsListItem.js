import React from 'react';


const NewsListItem = ({author , content, description, publishedAt, source, title, url, urlToImage})=>(
    <div >

        <div className="news">
            <h3>{title}</h3>
            <h4>Author: {author || "unkown"}</h4>
            <h5>{publishedAt}</h5>
            <div className="news-article">
                <div className="news-article__image">
                    <img src={urlToImage || "https://static01.nyt.com/images/2018/11/06/us/politics/06midtermslive-beto/06midtermslive-beto-facebookJumbo.jpg"}/>
                </div>
                <div className="news-article__information">
                    <p className="news-article__description">{description || title}</p>
                    <button>Full Article</button>
                </div>
            </div>
            <h5>{source.name}</h5>
        </div>

 
    </div>
)

export default NewsListItem;


// {[
//     author || "Unkown", content, description, publishedAt, title, url, urlToImage
// ]}