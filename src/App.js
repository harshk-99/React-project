import "./styles.css";
import Navigation from "./components/Navigation";
import ComingSoon from "./components/ComingSoon";
import Footer from "./components/Footer";
import Featured from "./components/Featured";
import About from "./components/About";
import Services from "./components/Services";
import bg from "../public/bg.jpg";

export default function App() {
  var sectionStyle = {
    width: "100%",
    height: "800px",
    backgroundImage: `url(${bg})`
  };

  return (
    <div style={sectionStyle}>
      <Navigation />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <img
              className="thumbnail"
              src="https://livemap.info/images/livemap-scheme-v2.png"
              alt="helmet"
            />
          </div>
          <div className="col-lg-6 col-sm-12">
            <ComingSoon />
          </div>
        </div>
      </div>
      <Featured />
      <About />
      <Services />
      {/* <Footer /> */}
    </div>
  );
}
