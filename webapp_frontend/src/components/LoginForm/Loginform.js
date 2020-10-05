import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import RedditIcon from "@material-ui/icons/Reddit";
import logo from "../../startupmanch.svg";
import "./styles.css";

const Loginform = ({ signup }) => {
  return (
    <div className="loginform">
      <img src={logo} alt="startupanch-logo" className="loginform_logo" />
      <form>
        <input className="loginform_input" placeholder="Full name" />
        <br />
        <input className="loginform_input" placeholder="Email Id" />
        <br />
        <input className="loginform_input" placeholder="Username" />
        <br />
        <input className="loginform_input" placeholder="Password" />
        <br />
        <button className="loginform_button" type="submit">
          Signup
        </button>
      </form>
      <p className="loginform_text">or sign up using</p>
      <div className="loginform_socialmedia">
        <FacebookIcon className="loginform_socialmedia-icons" />
        <TwitterIcon className="loginform_socialmedia-icons" />
        <LinkedInIcon className="loginform_socialmedia-icons" />
        <RedditIcon className="loginform_socialmedia-icons" />
      </div>
    </div>
  );
};

export default Loginform;
