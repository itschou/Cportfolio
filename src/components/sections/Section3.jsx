import $ from "jquery";
import { useEffect, useState } from "react";
import axios from 'axios';


function Section3() {
    const [resultat, setResultat] = useState([])

    useEffect(() => {
        axios.get(`https://itschou.github.io/projects.json`)
            .then(res => {
                res.data.map(item => { setResultat(...resultat, item) })
                setResultat(res.data);
                $("#modalresponse").hide();
                $("#modalresponse2").hide();
            })
    }, [])

    return (
        <div className="columns is-mobile ThreeDivBackground p-6 m-auto is-vcentered" id="div3" onMouseEnter={() => $("#particules").show("slow")}>
            <div className="column">
                <br /><br /><br />
                <h1 className="title is-1 text-secondary has-text-centered ">THEY TRUSTED ME</h1>
                <div className="columns is-mobile has-text-centered">


                    {resultat && resultat.map((item, index) => {
                        if (item.company === "true") {


                            return (
                                <div className="column" key={index}>
                                    <figure className="image is-64x64 has-text-centered is-inline-block">
                                        <img className="is-rounded" src={require('../../images/companies/' + item.idLogo + '.png')} />
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
    )
}


export default Section3