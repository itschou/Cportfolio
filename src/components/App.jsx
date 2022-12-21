import '../css/animationFall.scss';



import React from 'react';


import { modal } from '../js/modal.js';


import { section1 } from "./sections/section1";
import { section2 } from "./sections/section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";





class App extends React.Component {


  


  render() {

    return (
      <div id="AppPage" >


        {/* MODAL */}

        {modal}

        {/* MODAL */}

        {/* First DIV */}

        {section1}

        {/* First DIV */}

        {/* SECOND DIV */}


        {section2}


        {/* SECOND DIV */}

        {/* THIRD DIV */}

        <Section3 />


        {/* THIRD DIV */}


        {/* Fourth DIV */}

        <Section4 />


        {/* Fourth DIV */}




      </div >
    );
  }
}


export default App;
