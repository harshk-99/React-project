import React from "react";
import { InputGroup, InputGroupAddon, Input } from "reactstrap";
import RemoveIcon from "@material-ui/icons/Remove";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

function ComingSoon() {
  return (
    <div className="coming-soon-content">
      <p>
        <RemoveIcon />
        Coming Soon
      </p>
      <h1>Get Notified When we Launch</h1>
      <InputGroup className="input-field">
        <Input placeholder="Enter your email address" className="input" />
        <InputGroupAddon addonType="append">
          <button type="button" className="btn btn-dark notify">
            Notify Me
          </button>
        </InputGroupAddon>
      </InputGroup>
      <div className="updates">
        <p>For more updates, check out . .</p>
        <span className="social-icons">
          <FacebookIcon />
        </span>
        <span>
          <InstagramIcon />
        </span>
      </div>
    </div>
  );
}

export default ComingSoon;
