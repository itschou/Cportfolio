import React from 'react';
import ReactDOM from 'react-dom/client';
import $ from "jquery";

export default function Navbar(props) {


    return (

        <div id='NavBarPage'>
            <nav className="NavBarAll box is-radiusless is-fixed-top has-navbar-fixed-top is-hoverable ">

                <div className="columns">
                    <div className="column is-11 text-secondary is-centered"><a href="/" className='TitleNavbar m-5'>{props.name}</a></div>
                    <div className="column is-1 box cvButton"><a href="" className='cvButton'>MY CV <i className="fa-solid fa-download is-centered"></i></a></div>
                </div>

            </nav>
        </div>

    )

}