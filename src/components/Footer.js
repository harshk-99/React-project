import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="social">
        <button>
          <FacebookIcon />
        </button>
        <button>
          <InstagramIcon />
        </button>
        <button>
          <LinkedInIcon />
        </button>
        <button>
          <TwitterIcon />
        </button>
      </div>
      <div className="copyright">
        <p>AbsoluteX © {year}</p>
      </div>
      <div className="footer-links">
        <a href="#">Email Us</a>
        <a href="#" className="underlined">
          Privacy Policy
        </a>
        <a href="#">FAQ</a>
      </div>
    </footer>
  );
}

export default Footer;
