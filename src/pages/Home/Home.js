import Navbar from "../../components/Header/Navbar";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <Navbar />
            <div class="spacer layer1"></div>
            <section class="segmented">
                <div class="left">
                    <h1 class="homeTitle">We Get Pet Care!</h1>
                    <p class="homeText">For over 17 Years, Fetch! Pet Care has been a trusted partner in keeping pets healthy and happy!</p>
                    <div id="schedule">
                        <button id="schedulebtn">Schedule Service</button>
                        <p id="or">Or call us at (123) 456-7890</p>
                    </div>
                </div>
                <div class="right">
                    <div class="golden">
                        <div class="goldenCircle"></div>
                        <div class="imageGoldenWrapper">
                            <img src="/assets/golden.png" alt="Dog"></img>
                        </div>
                    </div>
                </div>
                
            </section>
            <div class="spacer layer2"></div>
            <section class="segmented">
                <div class="left">
                    <h1>Our Services</h1>
                    <p>National Brand With a Local Feel. Experience the Fetch! Difference</p>
                    <span>Enter Your Location and Fetch Our Services</span>
                    <div>
                        <input type="text" placeholder="Zip Code"/>
                        <button>Search</button>
                    </div>
                </div>
                <div class="right services">
                    <div>
                        <div class="service"><img src="/assets/icons/dogw.png" alt="dog walking"></img>Dog Walking</div>
                        <div class="service"><img src="/assets/icons/pets.png" alt="Sitting"></img>Pet Sitting</div>
                    </div>
                    <div>
                        <div class="service"><img src="/assets/icons/overnight.png" alt="Overnight Care"></img>Overnight Care</div>
                        <div class="service"><img src="/assets/icons/otherServices.png" alt="Other"></img>Other Services</div>
                    </div>
                </div>
            </section>
            <div class="spacer layer3"></div>
            <section class="segmented">
                <h1>Nice Curves</h1>
            </section>
        </div>
    );
}

export default Home;