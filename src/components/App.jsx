import meImage from "../images/me/me.png";

import '../css/animationFall.scss';
import contact from '../svgs/contacte.svg';

import config from "../config.json";
import { useEffect, useState } from "react";
import axios from 'axios';
import emailjs from "@emailjs/browser";

import $ from "jquery";
import Footer from './Footer';

import photome from '../images/me/Photo.jpeg';



function App() {


  const [resultat, setResultat] = useState([])

  useEffect(() => {
    axios.get(`https://itschou.github.io/projects.json`)
      .then(res => {
        res.data.map(item => { setResultat(...resultat, item) })
        setResultat(res.data);
      })
  }, [])

  $("#modalresponse").hide();
  $("#modalresponse2").hide();


  const onSubmit = (event, data, r) => {
    const templateId = 'template_0yo5715';
    const serviceId = 'service_odg7apb';
    event.preventDefault();
    sendFeedback(serviceId, templateId, {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value,
    });

    $("#name").val('');
    $("#email").val('');
    $("#message").val('');

    $("#modalresponse").show("fast");
    $("#modalresponse2").show();

    setTimeout(() => {
      $("#modalresponse").hide("fast");
    }, 5000);

    setTimeout(() => {
      $("#modalresponse2").hide();
    }, 5000);

  };

  const sendFeedback = (serviceId, templateId, variables) => {
    emailjs
      .send(serviceId, templateId, variables, 'KZQJ_f8NeBeUmAKQr')
      .then((res) => {
        console.log('succes send email');
      })
      .catch((err) => console.error('Error when send mail'));
  };

  let programmingLength = config.programing.length
  let otherLength = config.other.length

  return (
    <div id="AppPage">

      <div id="">
        <div className="modal is-active" id="modalresponse2">
          <div className="modal-background"></div>
          <div className="modal-content text-secondary" id="modalresponse">
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48 ">
                      <img src={photome} className="is-rounded" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Afiri Mohammed Chouaib</p>
                    <p class="subtitle is-6">FullStack Web Developper</p>
                  </div>
                </div>

                <div class="content text-primary">
                  Your email has been successfully sent! Thank you for taking the time to contact me 🙏.
                  <br />

                </div>
              </div>
            </div>
                <span className="has-text-primary">This window will automatically close in 5 seconds</span>

          </div>

        </div>

        {/* First DIV */}

        <div className="columns is-mobile FirstDivBackground p-6 m-auto is-vcentered has-text-centered" id="div1" onMouseEnter={() => $("#particules").show("slow")}>
          <div id="particules">
            <span className="particle particle-2"></span>
            <span className="particle particle-4"></span>
          </div>
          <div className="column is-8 is-align-content-center	has-text-centered mt-5 p-6">
            <h1 className="is-size-1 has-text-centered title is-1 text-secondary ">ABOUT ME</h1>
            <p className="has-text-centered subtitle is-3 text-secondary">Hello ! my name is <p className="text1">afiri mohammed chouaib</p> and i am <p className="text2"> web developper </p>,<br /> you can trust me to solve and simplify your problems with a website.</p>
            <p className="text-secondary has-text-centered subtitle is-4"><q> with me everything is simplified </q></p>
            <p className="has-text-centered"><a href="https://ma.linkedin.com/in/mohammed-chouaib-afiri-5016b4213" className="is-size-1 text-secondary p-2"><i className="fa-brands fa-linkedin"></i></a> <a href="" className="is-size-1 text-secondary p-2"><i className="fa-brands fa-github"></i></a></p>
          </div>
          <div className="column is-centered">
            <figure className="image is-1by1 is-flex is-justify-content-center">
              <img src={meImage} className="is-hidden-mobile" />
            </figure>
          </div>
        </div>

        {/* First DIV */}

        {/* SECOND DIV */}


        <div className="columns is-mobile SecondDivBackground p-6 m-auto is-vcentered" id="div2" onMouseEnter={() => $("#particules").hide("fast")}>

          <div className="column is-three-quarters-mobile">


            <h1 className="is-size-1 has-text-centered title is-1 text-primary">SKILLS</h1><br />
            <h1 className="is-size-4 has-text-centered subtitle is-4 text-primary">Programming skills ( <b className="text-orange">{programmingLength}</b> )</h1><br />
            <div className="has-text-centered columns is-mobile">
              {config && config.programing.map((item, index) => {
                return (
                  <div className="column" key={index}>
                    <span className={"title bounce is-1 p-3  fa-brands fa-" + item.logo}></span>
                    <div className="subtitle is-4">{item.name}</div>
                  </div>

                )
              })}

            </div>
            <br />

            <h1 className="is-size-4 has-text-centered subtitle is-4 text-primary">Other skills ( <b className="text-orange">{otherLength}</b> )</h1><br />
            <div className="has-text-centered columns is-mobile">
              {config && config.other.map((item, index) => {
                return (
                  <div className="column" key={index}>
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

        <div className="columns is-mobile ThreeDivBackground p-6 m-auto is-vcentered" id="div3" onMouseEnter={() => $("#particules").show("slow")}>
          <div className="column">
            <br /><br /><br />
            <h1 className="title is-1 text-secondary has-text-centered ">THEY TRUSTED ME</h1>
            <div className="columns is-mobile has-text-centered">


              {resultat && resultat.map((item, index) => {
                if (item.company == "true") {


                  return (
                    <div className="column" key={index}>
                      <figure className="image is-64x64 has-text-centered is-inline-block">
                        <img className="is-rounded" src={require('../images/companies/' + item.idLogo + '.png')} />
                      </figure>
                      <h1 className="title is-4 text-secondary">{item.Nom}</h1>
                      <h1 className="subtitle is-5 text-secondary ">{item.Role}</h1>

                      <h1 className="text-secondary is-uppercase">technologies:</h1>
                      {item.technologies.map(tech => {
                        return (
                          <i className={`p-1 text-secondary has-text-centered fa-${tech.type} fa-` + tech.icon}></i>
                        )

                      })}
                      <br /><br />

                      <h1 className="text-secondary is-uppercase">customer rating:</h1>
                      {[...Array(item.rating)].map((e, i) => { return (<span className="fa fa-star checkedStar"></span>) })} {[...Array(5 - item.rating)].map((e, i) => { return (<span className="fa-regular fa-star text-orange"></span>) })}
                      <br /><br />
                      <h1 className="text-secondary is-uppercase">website:</h1>
                      <a className="text-secondary title is-4" href={item.link}><i className="fa-solid fa-eye p-2"></i></a>

                    </div>

                  )
                }
              })}


            </div>
            <br />

            <nav className="level has-text-centered">
              <div className="level-item has-text-centered is-inline-block p-2">
                <div>
                  <i className="fa-solid fa-network-wired text-secondary subtitle is-4 p-2"></i>
                  <p className="heading text-secondary">worked projects</p>
                  <p className="title text-orange">+{Object.keys(resultat).length}</p>
                </div>
              </div>
              <div className="level-item has-text-centered is-inline-block p-2">
                <div>
                  <i className="fa-regular fa-face-smile text-secondary subtitle is-4 p-2"></i>
                  <p className="heading text-secondary">satisfied customers</p>
                  <p className="title text-orange">+50</p>
                </div>
              </div>
              <div className="level-item has-text-centered is-inline-block p-2">
                <div>
                  <i className="fa-brands fa-github subtitle is-4 text-secondary p-2"></i>
                  <p className="heading text-secondary">open source projects</p>
                  <p className="title text-orange">+5</p>
                </div>
              </div>
            </nav>



          </div>




        </div>

        {/* THIRD DIV */}


        {/* Fourth DIV */}

        <div className="FourthDivBackground columns is-mobile is-vcentered mt-auto">



          <div className="column">
            <img src={contact} />
          </div>


          <div className="column is-7" id="div4" onMouseEnter={() => $("#particules").hide()}>

            <div className="columns is-justify-content-center">
              <div className="column is-6-tablet is-8-desktop is-4-widescreen is-3-fullh">
                <form onSubmit={onSubmit} className="box p-5">
                  <label className="is-block mb-4">
                    <span className="is-block mb-2">Your full name</span>
                    <input
                      name="name"
                      id="name"
                      type="text"
                      className="input"
                      placeholder="Mohammed Chouaib Afiri"
                    />
                  </label>

                  <label className="is-block mb-4">
                    <span className="is-block mb-2">Your email address</span>
                    <input
                      required
                      name="email"
                      id="email"
                      type="email"
                      className="input"
                      placeholder="email@example.com"
                    />
                  </label>

                  <label className="is-block mb-4">
                    <span className="is-block mb-2 ">Message</span>
                    <textarea
                      name="message"
                      id="message"
                      className="textarea"
                      rows="3"
                      placeholder="Hello . . ."
                      draggable={false}
                    ></textarea>
                  </label>

                  <div className="mb-4">
                    <button type="submit" className="button is-link px-4">Send</button>
                  </div>

                </form>
              </div>
            </div>
            <Footer />
          </div>


        </div>


        {/* Fourth DIV */}




      </div>
    </div>
  );
}

export default App;
