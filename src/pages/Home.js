import '../Styles.css'
import Services from './Services'
import {useRef,useState} from 'react'
import About from  './About'
import Contact from './Contact'
import logo from '../cpw-logo.svg'
import miniLogo from "../cpw-mini.jpeg"
import phone from "../img/phone.png"




let Home = () => {

    {/*Scroll to element*/}
    let homeRef = useRef();
    let servicesRef = useRef();
    let aboutRef = useRef();
    let contactRef = useRef();

    {/*JS for toggling hamburger menu*/}
    const [isActive, setActive] = useState("false");
    const ToggleClass = () => {
    setActive(!isActive);
    }




    return (
        <>
        <div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" onClick={ToggleClass} className = "ham-btn" viewBox={isActive ? "0 0 448 512" : "0 0 384 512"}> 
          <path d={isActive ? "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" : "M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"}/></svg>
        </div>
         <div className="nav-holder">
         <img src={logo} onClick={() => 
            homeRef.scrollIntoView({behavior: "smooth"})} className='header-logo'/>
            <nav className={isActive ? "nav" : "nav2"}>
                <ul>
                
                <a onClick={() => {if (!homeRef.current) return;
                ToggleClass();
                homeRef.current.scrollIntoView({behavior: "smooth"});}}>Home</a>
                
                <a onClick={() => {if (!servicesRef.current) return;
                ToggleClass();
                servicesRef.current.scrollIntoView({behavior: "smooth", block:"end"})}}>Services</a>
                
                <a onClick={() => {if (!aboutRef.current) return;
                ToggleClass();
                aboutRef.current.scrollIntoView({behavior: "smooth",  block: "end"})}}>About</a>
                
                <a onClick={() => {if (!contactRef.current) return;
                ToggleClass();
                contactRef.current.scrollIntoView({behavior: "smooth"})}}>Contact</a>
                </ul>
            </nav>
          </div>
      </div>

       <div className='container'>
            
            <div ref={homeRef} className='home background-tint'>
                    <div className="hero-wrap">
                    <div className='hero-text'>
                        <a>Protect & Preserve Your Home</a>
                    </div>
                    <div className="hero-sub">
                        <a>Pressure Washing | Soft Washing | Exterior Cleaning</a>
                    </div>
                
                    <div className="call-btn-div">
                            <div>
                                <a className={"call-btn"} href="tel:203-543-4756"><img src={phone} className="phone-pic"/> Click to call</a>
                            </div>
                            <div className="quote-wrap">
                                <a className="quote-btn" onClick={() => {
                contactRef.scrollIntoView({behavior: "smooth"})}}>$ Get a quote</a>
                            </div>
                    </div>
                </div>

            </div>
            
            <div ref={aboutRef}>
                <About />
            </div>

            <div ref={servicesRef}>
                <Services ref={servicesRef}/>
            </div>
            
            <div ref={contactRef}>
                <Contact />
            </div>

            
            <div className="footer">
                <div className="footer-text">
                    <div>
                        <img src={miniLogo} className="footer-logo" />
                    </div>
                    <div>
                        <a>Copyright 2023 Coastal Pressure Washing LLC.</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );

    };


export default Home