import meImage from "../images/me/me.png";
import vector1 from "../images/elements/vector1.png";
import languages from "../images/elements/languages.png";

function App() {
  return (
    <div id="AppPage">

      {/* First DIV */}

      <div className="columns FirstDivBackground is-vcentered p-6 m-auto">
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


      <div className="SecondDivBackground is-vcentred m-auto p-6">
        <h1 className="is-size-1 has-text-centered title is-1 text-primary">SKILLS</h1>

        


      </div>


      {/* SECOND DIV */}

    </div>
  );
}

export default App;
