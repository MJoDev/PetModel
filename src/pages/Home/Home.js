import TestimonialCarousel from "../../components/Carousel/TestimonialCarousel";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";

function Home() {

    const layer1 = {
        backgroundImage: "url('/assets/backgrounds/spacer1.svg')"
    }
    const layer2 = {
        backgroundImage: "url('/assets/backgrounds/spacer2.svg')"
    }
    const layer3 = {
        backgroundImage: "url('/assets/backgrounds/spacer3.svg')"
    }

    return (
        <div className="home">
            <Navbar />
            <div className="spacer" style={layer1}></div>
            <section className="segmented">
                <div className="left">
                    <h1 className="homeTitle">We Get Pet Care!</h1>
                    <p className="homeText">For over 17 Years, Fetch! Pet Care has been a trusted partner in keeping pets healthy and happy!</p>
                    <div id="schedule">
                        <button id="schedulebtn">Schedule Service</button>
                        <p id="or">Or call us at (123) 456-7890</p>
                    </div>
                </div>
                <div className="right">
                    <div className="golden">
                        <div className="goldenCircle"></div>
                        <div className="imageGoldenWrapper">
                            <img src="/assets/golden.png" alt="Dog"></img>
                        </div>
                    </div>
                </div>
                
            </section>
            <div className="spacer" style={layer2}></div>
            <section className="segmented">
                <div className="left">
                    <h1 className="ServiceTitle">Our Services</h1>
                    <p className="HowItWorksSpan">National Brand With a Local Feel. Experience the Fetch! Difference</p>
                    <span className="HowItWorksSpan">Enter Your Location and Fetch Our Services</span>
                    <div className="zip-code-form">
                        <input className="inputZip" type="text" pattern="[0-9]{5}"placeholder="Zip Code"/>
                        <button className="btnZip"><svg className="zipIco" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs></defs><title/><g data-name="Layer 2" id="Layer_2"><path d="M19,26a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42L26.59,16l-8.3-8.29a1,1,0,0,1,1.42-1.42l9,9a1,1,0,0,1,0,1.42l-9,9A1,1,0,0,1,19,26Z"/><path d="M28,17H4a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Z"/></g><g id="frame"><rect className="cls-1"/></g></svg></button>
                    </div>
                </div>
                <div className="right services">
                    <div>
                        <div className="service"><img src="/assets/icons/dogw.png" alt="dog walking"></img>Dog Walking</div>
                        <div className="service"><img src="/assets/icons/pets.png" alt="Sitting"></img>Pet Sitting</div>
                    </div>
                    <div>
                        <div className="service"><img src="/assets/icons/overnight.png" alt="Overnight Care"></img>Overnight Care</div>
                        <div className="service"><img src="/assets/icons/otherServices.png" alt="Other"></img>Other Services</div>
                    </div>
                </div>
            </section>
            <section className="segmentedcentered">
                <div className="centeredsec">
                    <TestimonialCarousel/>
                </div>
            </section>
            <div className="spacer" style={layer3}></div>
            <section className="segmented">
                <div className="left">
                    <div className="HowItWorksBoxes">
                        <div className="service item1"><img src="/assets/icons/reserve.png" alt="Reserve"></img>Reserve</div>
                        <div className="service item2"><img src="/assets/icons/Match.png" alt="Match"></img>Match</div>
                        <div className="service item3"><img src="/assets/icons/relax.png" alt="Relax"></img>Relax</div>
                        <svg className="curved-line" viewBox="0 0 600 400">
                            <path
                                d="M100 80 
                                C200 100, 220 120, 220 180
                                M200 200
                                C220 100, 300 280, 80 325"
                            />
                        </svg>
                    </div>
                </div>
                <div className="right HowItWorksFixed" >
                    <h1 className="HowItWorksTitle">How it Works</h1>
                    <p className="HowItWorksText">Because finding a good pet sitter shouldn’t be a hassle. With Fetch! It’s as easy as…</p>
                    <span className="EnterSpan">Enter Your Location and Fetch Our Services</span>
                    <div className="zip-code-form">
                    <input className="inputZip" type="text" pattern="[0-9]{5}"placeholder="Zip Code"/>
                    <button className="btnZip"><svg className="zipIco" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs></defs><title/><g data-name="Layer 2" id="Layer_2"><path d="M19,26a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42L26.59,16l-8.3-8.29a1,1,0,0,1,1.42-1.42l9,9a1,1,0,0,1,0,1.42l-9,9A1,1,0,0,1,19,26Z"/><path d="M28,17H4a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Z"/></g><g id="frame"><rect className="cls-1"/></g></svg></button>
                    </div>
                </div>
                
            </section>
            <section className="segmentedcentered">
                <div className="makeFetch">
                    <div className="golden chihuahua">
                        <div className="goldenCircle"></div>
                        <div className="imageGoldenWrapper">
                            <img src="/assets/chihuahua.png" alt="Dog"></img>
                        </div>
                    </div>
                    <div>
                        <h1>Make Fetch! Happen</h1>
                        <p>If you love pets and want exciting work, apply to be a Fetch! Pet Care Provider! We train every team member and provide ongoing support to help you get the most from your experience.</p>
                        <button>Join Now</button>
                    </div>
                    
                </div>
            </section>
            <svg className="last" id="visual" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" version="1.1"><rect x="0" y="0"></rect><path d="M0 544L37.5 543.3C75 542.7 150 541.3 225 540.2C300 539 375 538 450 537C525 536 600 535 675 535.7C750 536.3 825 538.7 862.5 539.8L900 541L900 601L862.5 601C825 601 750 601 675 601C600 601 525 601 450 601C375 601 300 601 225 601C150 601 75 601 37.5 601L0 601Z" fill="#ff5b46" stroke-linecap="round" stroke-linejoin="miter"></path></svg>
            <Footer/>
        </div>
    );
}

export default Home;