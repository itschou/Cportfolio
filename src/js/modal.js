import photome from '../images/me/Photo.jpeg';
export const modal = (

    <div className="modal is-active" id="modalresponse2" >
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

    </div >
)