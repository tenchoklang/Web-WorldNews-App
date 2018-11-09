import React from 'react';
import Search from './Search';


class Navigation extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            toggleSideNav: "navbar-side"
        }
    }

    navbarSandwichOnClick = () =>{
        let css = (this.state.toggleSideNav === "navbar-side" ? "navbar-side visible" : "navbar-side")
        this.setState({
            toggleSideNav: css
        });
        console.log(this.state);
    }

    render(){
        return (
            <div >
                <nav className={this.state.toggleSideNav}>
                    <i className="fa fa-times" aria-hidden="true" onClick={this.navbarSandwichOnClick}></i>

                    <Search />
                    <ul className="navbar-nav">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>

                <nav className="navbar-bar">
                    <svg width={30} height={30} className="navbar-sandwich" onClick={this.navbarSandwichOnClick}>
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

export default Navigation;


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