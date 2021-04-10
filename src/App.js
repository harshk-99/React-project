import "./styles.css";
import Navigation from "./components/Navigation";
import ComingSoon from "./components/ComingSoon";
import Footer from "./components/Footer";
import bg from "../public/bg.jpg";

export default function App() {
  var sectionStyle = {
    width: "100%",
    height: "938px",
    backgroundImage: `url(${bg})`
  };

  return (
    <div style={sectionStyle}>
      <Navigation />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            {/* <img
              className="thumbnail"
              src="https://image.freepik.com/free-vector/illustration-circuit_53876-5583.jpg"
              alt="micro"
            /> */}
          </div>
          <div className="col-lg-6 col-sm-12">
            <ComingSoon />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
