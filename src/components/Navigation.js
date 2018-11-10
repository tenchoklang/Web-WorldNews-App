import React from 'react';
import {connect} from 'react-redux';
import Search from './Search';
import {startGetNews} from '../actions/news';


class Navigation extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            toggleSideNav: "navbar-side",
            activeItem: 0 //headlines is the initial activeItem 
        }
        this.sources = {
            headlines: undefined,
            business: 'bloomberg,business-insider,fortune,the-economist',
            science: 'national-geographic,engadget,the-verge,TechCrunch,wired',
            entertainment: 'the-lad-bible,mashable,entertainment-weekly,buzzfeed,mtv-news',
            sports: 'bbc-sport,espn,four-four-two,nfl-news',
            gaming: 'polygon,ign'
        }
        this.navbarSelections = ['headlines','business','science','entertainment','sports', 'gaming']
    }

    toggleSideNav = () =>{
        let css = (this.state.toggleSideNav === "navbar-side" ? "navbar-side visible" : "navbar-side")
        this.setState({
            toggleSideNav: css
        });
        console.log(this.state);
    }

    onNavbarSelectionClicked=(index, value)=>{
        this.setState({
            activeItem: index
        })
        const sources = this.sources[value];
        this.props.dispatch(startGetNews(sources));
        console.log(sources);
    }

    render(){
        return (
            <div >
                <nav className={this.state.toggleSideNav}>
                    <i className="fa fa-times" aria-hidden="true" onClick={this.toggleSideNav}></i>

                    <Search />
                    <ul className="navbar-nav">
                        {this.navbarSelections.map((value, index)=>{
                            return (
                                /*
                                --> onClick fires a method that sets the index of the li clicked as the activeItem
                                    so that when we apply the className we can determine which li to apply the styles to
                                --> index is accessible via CLOSURE
                                */
                                <li 
                                    className={this.state.activeItem === index ? 'navbar-nav__activeItem' : ''} 
                                    onClick={ this.onNavbarSelectionClicked.bind(this, index, value) }
                                    key={index}>
                                        {value}
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                <nav className="navbar-bar">
                    <svg width={30} height={30} className="navbar-sandwich" onClick={this.toggleSideNav}>
                        <path d='M0, 5 30, 5' stroke='#fff' strokeWidth='5'></path>
                        <path d='M0, 14 30, 14' stroke='#fff' strokeWidth='5'></path>
                        <path d='M0, 23 30, 23' stroke='#fff' strokeWidth='5'></path>
                    </svg>
                    <Search />
                </nav>
            </div>
        )
    }
}


export default connect()(Navigation);


/*
<li onClick={this.getHeadlineArticles}>Headlines</li>
                        <li onClick={this.getBusinessArticles}>Business</li>
                        <li onClick={this.getScienceArticles}>Science</li>
                        <li onClick={this.getEntertainmentArticles}>Entertainment</li>
                        <li onClick={this.getSportsArticles}>Sports</li>
                        <li onClick={this.getGamingArticles}>Gaming</li>
*/


// const Navigation = ()=>(

//     <div>
//         <nav className="navbar-side">
//             <Search />
//             <ul className="navbar-nav">
//                 <li><a href="#">Home</a></li>
//                 <li><a href="#">About</a></li>
//                 <li><a href="#">Contact</a></li>
//             </ul>

//         </nav>

//         <nav className="navbar-bar">
//             <svg width={30} height={30} className="navbar-sandwich" onClick={navbarSandwichOnClick}>
//                 <path d='M0, 5 30, 5' stroke='#fff' strokeWidth='5'></path>
//                 <path d='M0, 14 30, 14' stroke='#fff' strokeWidth='5'></path>
//                 <path d='M0, 23 30, 23' stroke='#fff' strokeWidth='5'></path>
//             </svg>
//             <Search />
//         </nav>
//     </div>
// )

// const navbarSandwichOnClick = () =>{
//     let navbarSide = document.getElementsByClassName('navbar-side');

//     console.log(navbarSide);
// }

// export default Navigation;


// <nav className="navbar">

// <svg width={30} height={30} className="navbar-sandwich">
//     <path d='M0, 5 30, 5' stroke='#fff' strokeWidth='5'></path>
//     <path d='M0, 14 30, 14' stroke='#fff' strokeWidth='5'></path>
//     <path d='M0, 23 30, 23' stroke='#fff' strokeWidth='5'></path>
// </svg>

// <ul className="navbar-nav">
//     <li><a href="#">Home</a></li>
//     <li><a href="#">About</a></li>
//     <li><a href="#">Contact</a></li>
// </ul>

// <input placeholder="SEARCH"></input>
// </nav>