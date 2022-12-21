import $ from "jquery";

import Footer from '../Footer';
import contact from '../../svgs/contacte.svg';

import emailjs from "@emailjs/browser";


function Section4() {
    const onSubmit = (event) => {
        const templateId = 'template_0yo5715';
        const serviceId = 'service_odg7apb';
        event.preventDefault();
        sendFeedback(serviceId, templateId, {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value,
        });

        const executeModel = () => {
            $("#modalresponse").show("fast");
            $("#modalresponse2").show();
            setTimeout(() => {
                $("#modalresponse").hide("fast");
                $("#modalresponse2").hide();
            }, 5000);

            $("#name").val('');
            $("#email").val('');
            $("#message").val('');
        }

        executeModel();


    };

    const sendFeedback = (serviceId, templateId, variables) => {
        emailjs
            .send(serviceId, templateId, variables, 'KZQJ_f8NeBeUmAKQr')
            .then((res) => {
                console.log('succes send email');
            })
            .catch((err) => console.error('Error when send mail'));
    };
    return (


        <div className="columns FourthDivBackground is-mobile p-6 is-vcentered m-auto">



            <div className="column is-hidden-mobile">
                <img className="p-5" src={contact} alt="Error with loading ..." />
            </div>


            <div className="column is-7 is-mobile mr-auto ml-auto mt-auto" id="div4" onMouseEnter={() => $("#particules").hide()}>

                <div className="columns is-justify-content-center">
                    <div className="column is-6-tablet is-8-desktop is-6-widescreen is-3-fullh ">
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
    )




}

export default Section4