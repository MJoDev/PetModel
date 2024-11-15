import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

function Blog() {

    const layer1 = {
        backgroundImage: "url('/assets/backgrounds/spacer1.svg')"
    }

    return (
        <div className="home">
            <Navbar />
            <div className="spacer" style={layer1}></div>
            <section className="segmented">
                <div className="left">
                    <h1 className="homeTitle">Blog</h1>
                    <p className="homeText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin diam at tincidunt consectetur. Duis velit dui, finibus a maximus in, malesuada eu massa.</p>
                </div>
                <div className="right">
                    <div className="golden">
                        <div className="goldenCircle blueVariant"></div>
                        <div className="imageGoldenWrapper">
                            <img src="/assets/golden.png" alt="Dog"></img>
                        </div>
                    </div>
                </div>
            </section>
            <section className="segmentedcentered">
                <div className="HowItWorksTitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin diam at tincidunt consectetur. Duis velit dui, finibus a maximus in, malesuada eu massa.</div>
                <div className="HowItWorksText"> Phasellus quis tortor rutrum nibh venenatis porttitor. Vivamus ut ante tortor. Aenean et risus vitae arcu commodo bibendum eu ut tellus. Suspendisse finibus nisi pharetra finibus varius. Integer sodales augue vitae lorem elementum aliquet. Suspendisse bibendum, dolor vel lacinia faucibus, augue neque porttitor ex, non tincidunt enim augue ac sapien. Nullam vel quam nec felis pellentesque vestibulum. Nullam eu ante neque. Donec et placerat sem. Ut non faucibus nisl, at finibus odio.</div>
                <div className="HowItWorksSpan"> Phasellus quis tortor rutrum nibh venenatis porttitor. Vivamus ut ante tortor. Aenean et risus vitae arcu commodo bibendum eu ut tellus. Suspendisse finibus nisi pharetra finibus varius. Integer sodales augue vitae lorem elementum aliquet. Suspendisse bibendum, dolor vel lacinia faucibus, augue neque porttitor ex, non tincidunt enim augue ac sapien. Nullam vel quam nec felis pellentesque vestibulum. Nullam eu ante neque. Donec et placerat sem. Ut non faucibus nisl, at finibus odio.</div>
                <div className="HowItWorksText"> Phasellus quis tortor rutrum nibh venenatis porttitor. Vivamus ut ante tortor. Aenean et risus vitae arcu commodo bibendum eu ut tellus. Suspendisse finibus nisi pharetra finibus varius. Integer sodales augue vitae lorem elementum aliquet. Suspendisse bibendum, dolor vel lacinia faucibus, augue neque porttitor ex, non tincidunt enim augue ac sapien. Nullam vel quam nec felis pellentesque vestibulum. Nullam eu ante neque. Donec et placerat sem. Ut non faucibus nisl, at finibus odio.</div>
                <div className="HowItWorksSpan"> Phasellus quis tortor rutrum nibh venenatis porttitor. Vivamus ut ante tortor. Aenean et risus vitae arcu commodo bibendum eu ut tellus. Suspendisse finibus nisi pharetra finibus varius. Integer sodales augue vitae lorem elementum aliquet. Suspendisse bibendum, dolor vel lacinia faucibus, augue neque porttitor ex, non tincidunt enim augue ac sapien. Nullam vel quam nec felis pellentesque vestibulum. Nullam eu ante neque. Donec et placerat sem. Ut non faucibus nisl, at finibus odio.</div>
                <div className="HowItWorksText"> Phasellus quis tortor rutrum nibh venenatis porttitor. Vivamus ut ante tortor. Aenean et risus vitae arcu commodo bibendum eu ut tellus. Suspendisse finibus nisi pharetra finibus varius. Integer sodales augue vitae lorem elementum aliquet. Suspendisse bibendum, dolor vel lacinia faucibus, augue neque porttitor ex, non tincidunt enim augue ac sapien. Nullam vel quam nec felis pellentesque vestibulum. Nullam eu ante neque. Donec et placerat sem. Ut non faucibus nisl, at finibus odio.</div>
                <div className="HowItWorksSpan"> Phasellus quis tortor rutrum nibh venenatis porttitor. Vivamus ut ante tortor. Aenean et risus vitae arcu commodo bibendum eu ut tellus. Suspendisse finibus nisi pharetra finibus varius. Integer sodales augue vitae lorem elementum aliquet. Suspendisse bibendum, dolor vel lacinia faucibus, augue neque porttitor ex, non tincidunt enim augue ac sapien. Nullam vel quam nec felis pellentesque vestibulum. Nullam eu ante neque. Donec et placerat sem. Ut non faucibus nisl, at finibus odio.</div>
                <div className="HowItWorksText"> Phasellus quis tortor rutrum nibh venenatis porttitor. Vivamus ut ante tortor. Aenean et risus vitae arcu commodo bibendum eu ut tellus. Suspendisse finibus nisi pharetra finibus varius. Integer sodales augue vitae lorem elementum aliquet. Suspendisse bibendum, dolor vel lacinia faucibus, augue neque porttitor ex, non tincidunt enim augue ac sapien. Nullam vel quam nec felis pellentesque vestibulum. Nullam eu ante neque. Donec et placerat sem. Ut non faucibus nisl, at finibus odio.</div>
                <div className="HowItWorksSpan"> Phasellus quis tortor rutrum nibh venenatis porttitor. Vivamus ut ante tortor. Aenean et risus vitae arcu commodo bibendum eu ut tellus. Suspendisse finibus nisi pharetra finibus varius. Integer sodales augue vitae lorem elementum aliquet. Suspendisse bibendum, dolor vel lacinia faucibus, augue neque porttitor ex, non tincidunt enim augue ac sapien. Nullam vel quam nec felis pellentesque vestibulum. Nullam eu ante neque. Donec et placerat sem. Ut non faucibus nisl, at finibus odio.</div>

            </section>
            <svg className="last auxLast" id="visual" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" version="1.1"><rect x="0" y="0"></rect><path d="M0 544L37.5 543.3C75 542.7 150 541.3 225 540.2C300 539 375 538 450 537C525 536 600 535 675 535.7C750 536.3 825 538.7 862.5 539.8L900 541L900 601L862.5 601C825 601 750 601 675 601C600 601 525 601 450 601C375 601 300 601 225 601C150 601 75 601 37.5 601L0 601Z" fill="#ff5b46" stroke-linecap="round" stroke-linejoin="miter"></path></svg>
            <Footer/>
        </div>
    );
}

export default Blog;