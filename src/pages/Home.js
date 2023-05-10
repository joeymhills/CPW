import '../Styles.css'
import Services from './Services'
import Contact from  './Contact'
import aboutimg1 from '../stockPhotos/about-1.jpg'
import aboutimg2 from '../stockPhotos/about-2.jpg'
import aboutimg3 from '../stockPhotos/about-3.jpg'



let Home = () => {
    return (
        <div className='container'>
            
            <div className='home background-tint'>
                <div className="hero-wrap">
                    <div className='hero-text'>
                        <a>Protect & Preserve Your Property</a>
                    </div>
                    <div className="hero-sub">
                        <a>Instantly raise your property's curb appeal</a>
                    </div>
                    {/*
                    <div className="call-btn-div">
                        <a className="call-btn" href="tel:203-543-4756">Call now</a>
                    </div>
    */}
                </div>

            </div>
            
            <Services />
            <Contact />
        </div>
    );
}

export default Home