import React from 'react';

export default function Navbar(props) {

    return (

        <div id='NavBarPage' className='navbar is-fixed-top'>
            <nav className="NavBarAll p-5 is-radiusless is-fixed-top is-hoverable ">

                <div className="columns">
                    <div className="column is-10 text-secondary is-centered"><a href="/" className='TitleNavbar m-5'>{props.name}</a></div>
                    <div className="column is-2 box cvButton"><a href="" className='cvButton'>MY CV <i className="fa-solid fa-download is-centered"></i></a></div>
                </div>

            </nav>
        </div>

    )

}