import React from 'react';
import Search from './Search';

const Navigation = ()=>(

    <div>
        <nav className="navbar-side">
            <Search />
            <ul className="navbar-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

        </nav>

        <nav className="navbar-bar">
            <svg width={30} height={30} className="navbar-sandwich">
                <path d='M0, 5 30, 5' stroke='#fff' strokeWidth='5'></path>
                <path d='M0, 14 30, 14' stroke='#fff' strokeWidth='5'></path>
                <path d='M0, 23 30, 23' stroke='#fff' strokeWidth='5'></path>
            </svg>
            <Search />
        </nav>

    </div>
)

export default Navigation;


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