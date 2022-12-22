import coding from '../../svgs/coding.svg';
import $ from "jquery";


export const section1 =  (
    <div className="columns is-mobile FirstDivBackground is-vcentered" id="div1" onMouseEnter={() => $("#particules").show("slow")}>
        <div id="particules">
            <span className="particle particle-2"></span>
            <span className="particle particle-4"></span>
        </div>
        <div className="column has-text-centered p-6">
            <h1 className="is-size-1 has-text-centered title is-1 text-secondary ">ABOUT ME</h1>
            <p className="has-text-centered subtitle is-3 text-secondary">Hello ! my name is <p className="text1">mohammed chouaib</p> and i am <p className="text2"> web developper </p>,<br /> you can trust me to solve and simplify your problems with a website.</p>
            <p className="text-secondary has-text-centered subtitle is-4"><q> with me everything is simplified </q></p>
            <p className="has-text-centered"><a href="https://ma.linkedin.com/in/mohammed-chouaib-afiri-5016b4213" className="is-size-1 text-secondary p-2"><i className="fa-brands fa-linkedin"></i></a> <a href="" className="is-size-1 text-secondary p-2"><i className="fa-brands fa-github"></i></a></p>
        </div>
        <div className="column p-6 is-hidden-mobile" id="codingJSON">
            <img className='image' src={coding} alt="Error with loading ..." />
        </div>

    </div>
)