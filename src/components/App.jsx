import meImage from "../images/me/me.png";

import '../css/animationFall.scss';

import config from "../config.json";
import { useEffect, useState } from "react";
import axios from 'axios';



function App() {

  const [resultat, setResultat] = useState([])

  useEffect(() => {
    axios.get(`https://itschou.github.io/projects.json`)
      .then(res => {
        res.data.map(item => { setResultat(...resultat, item) })
        setResultat(res.data);
      })
  }, [])

  let programmingLength = config.programing.length
  let otherLength = config.other.length

  return (
    <div id="AppPage">

      <div id="">

        {/* First DIV */}

        <div className="columns FirstDivBackground p-6 m-auto is-vcentered" id="div1">
          <div id="testee">
            <span className="particle particle-2"></span>
            <span className="particle particle-4"></span>
          </div>
          <div className="column is-8 ">
            <h1 className="is-size-1 has-text-centered title is-1 text-secondary">ABOUT ME</h1>
            <p className="has-text-centered subtitle is-3 text-secondary">Hello ! my name is <p className="text1">afiri mohammed chouaib</p> and i am <p className="text2"> web developper </p>,<br /> you can trust me to solve and simplify your problems with a website.</p>
            <p className="text-secondary has-text-centered subtitle is-4"><q> with me everything is simplified </q></p>
            <p className="has-text-centered"><a href="https://ma.linkedin.com/in/mohammed-chouaib-afiri-5016b4213" className="is-size-1 text-secondary p-2"><i className="fa-brands fa-linkedin"></i></a> <a href="" className="is-size-1 text-secondary p-2"><i className="fa-brands fa-github"></i></a></p>
          </div>
          <div className="column is-centered">
            <figure className="image is-1by1 is-flex is-justify-content-center">
              <img src={meImage} />
            </figure>
          </div>
        </div>

        {/* First DIV */}

        {/* SECOND DIV */}


        <div className="columns SecondDivBackground p-6 m-auto is-vcentered" id="div2">

          <div className="column">


            <h1 className="is-size-1 has-text-centered title is-1 text-primary">SKILLS</h1><br />
            <h1 className="is-size-4 has-text-centered subtitle is-4 text-primary">Programming skills ( <b className="text-orange">{programmingLength}</b> )</h1><br />
            <div className="has-text-centered columns is-desktop is-vcentered">
              {config && config.programing.map((item, index) => {
                return (
                  <div className="column" itemID={item} key={index}>
                    <span className={"title bounce is-1 p-3  fa-brands fa-" + item.logo}></span>
                    <div className="subtitle is-4">{item.name}</div>
                  </div>

                )
              })}

            </div>
            <br />

            <h1 className="is-size-4 has-text-centered subtitle is-4 text-primary">Other skills ( <b className="text-orange">{otherLength}</b> )</h1><br />
            <div className="has-text-centered columns is-desktop is-vcentered">
              {config && config.other.map((item, index) => {
                return (
                  <div className="column" itemID={item} key={index}>
                    <span className={`title is-1 p-3 fa-${item.type} fa-` + item.logo}></span>
                    <div className="subtitle is-4">{item.name}</div>
                  </div>

                )
              })}
            </div>


          </div>

        </div>


        {/* SECOND DIV */}

        {/* THIRD DIV */}

        <div className="columns ThreeDivBackground p-6 m-auto is-vcentered" id="div3">
          <div className="column">
            <h1 className="title is-1 text-secondary has-text-centered">THEY TRUSTED ME</h1>
            <div className="columns has-text-centered">


              {resultat && resultat.map((item, index) => {
                if (item.company == "true") {


                  return (
                    <div className="column" key={item.id}>
                      <figure className="image is-128x128 has-text-centered is-inline-block">
                        <img className="is-rounded" src={require('../images/companies/' + item.idLogo + '.png')} />
                      </figure>
                      <h1 className="title is-4 text-secondary">{item.Nom}</h1>
                      <h1 className="subtitle is-5 text-secondary ">{item.Role}</h1>

                      <h1 className="text-secondary is-uppercase">technologies:</h1>
                      {item.technologies.map(tech => {
                        return (
                          <i key={item.id} className={`p-1 text-secondary has-text-centered fa-${tech.type} fa-` + tech.icon}></i>
                        )

                      })}
                      <br /><br />

                      <h1 className="text-secondary is-uppercase">customer rating:</h1>
                      {[...Array(item.rating)].map((e, i) => { return (<span class="fa fa-star checkedStar"></span>) })} {[...Array(5 - item.rating)].map((e, i) => { return (<span class="fa-regular fa-star text-orange"></span>) })}
                      <br /><br />
                      <h1 className="text-secondary is-uppercase">website:</h1>
                      <a className="text-secondary title is-4" href={item.link}><i class="fa-solid fa-eye p-2"></i></a>

                    </div>

                  )
                }
              })}


            </div>
            <br />

            <nav class="level">
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading text-secondary">worked projects</p>
                  <p class="title text-orange">+{Object.keys(resultat).length}</p>
                </div>
              </div>
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading text-secondary">satisfied customers</p>
                  <p class="title text-orange">+50</p>
                </div>
              </div>
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading text-secondary">open source projects</p>
                  <p class="title text-orange">+5</p>
                </div>
              </div>
            </nav>
          </div>


        </div>

        {/* THIRD DIV */}

        {/* Fourth div */}

        <div id="div4" className="Fourthdiv">
          

        {/* Fourth div */}
        </div>


      </div>
    </div>
  );
}

export default App;
