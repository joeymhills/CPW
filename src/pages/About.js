import driveway from '../stockPhotos/driveway.webp'

let Contact = () => {
    return(
        <div className = "about-wrap">
                <div className="about-section">

                    <div className="about-img-wrap">
                        <img src={driveway} className="about-img" />
                    </div>
                        
                    <div className="about-text">
                        <div className="about-title">
                            <a>Why choose us?</a>
                        </div>
                        <div className="about-p">
                            <a>
                                Coastal Pressure Washing provides high quality services for residential and commercial properties
                                all across Connecticut. With our expertise in the industry we are capable of taking on any job we encounter.
                                Call today for a free quote, we look forward to doing business with you!
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
    )
}
export default Contact