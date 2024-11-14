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
                    <h1>Left</h1>
                </div>
                <div class="right">
                    <h1>Right</h1>
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