import $ from "jquery";
import config from "../../config.json";

let programmingLength = config.programing.length
let otherLength = config.other.length




export const section2 = (
    <div className="columns SecondDivBackground p-6 m-auto is-vcentered" id="div2" onMouseEnter={() => $("#particules").hide("fast")}>

        <div className="column">


            <h1 className="is-size-1 has-text-centered title is-1 text-primary">SKILLS</h1><br />
            <h1 className="is-size-4 has-text-centered subtitle is-4 text-primary">Programming skills ( <b className="text-orange">{programmingLength}</b> )</h1><br />
            <div className="has-text-centered columns is-mobile">
                {config && config.programing.map((item, index) => {
                    return (
                        <div className="column" key={index}>
                            <span className={"title bounce is-1 p-3  fa-brands fa-" + item.logo}></span>
                            <span className="subtitle is-4 is-hidden-mobile">{item.name}</span>
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
)