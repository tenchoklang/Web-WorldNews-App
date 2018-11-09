import axios from 'axios';
import apiKey from '../api_key/news_apikey'

export const getNews = (payload)=>({
    type: 'GET_NEWS',
    payload: payload
})

export const startGetNews = () =>{
    const baseUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
    //axios
    return (dispatch)=>{
        axios.get(baseUrl)
        .then(function (response) {
            console.log(response.data.articles);
            dispatch(getNews(response.data.articles));
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}