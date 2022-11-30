import React from 'react';
import ReactDOM from 'react-dom/client';
import $ from "jquery";

export default function Navbar(props) {

    var text;

    $(".effect-underline").hover(function () {
        text = $(this).text();
        $(this).text("I'm replaced!");
    },
        function () {
            $(this).text(text);
        });



    return (

        <>
            <nav className="NavBarAll box is-radiusless">

                <div className="columns">
                    <div className="column is-11 has-text-white"><a href="/" className='TitleNavbar'>{props.name}</a></div>
                    <div className="column is-1 box cvButton"><a href="" className='cvButton effect-underline' data-hover="click me!">MY CV</a></div>
                </div>

            </nav>
        </>

    )

}