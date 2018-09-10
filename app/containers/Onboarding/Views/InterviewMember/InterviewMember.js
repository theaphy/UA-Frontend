import React, { Component } from 'react';

import { Button, Col, Row } from 'react-bootstrap';
import { styles, headings, logo, cards, buttons } from 'assets/styles/variables';
import '../OnboardingStyles.css';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import ProgressBar from '../ProgressBar';

import colorlogo from 'assets/img/colorlogo.png';

export default class InterviewMember extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentStep: 3
    }
  }

  meetMember = (e) => {
    e.preventDefault();
    alert("Coming Soon! \nFor now, please check out our dashboard to see what we've been working on lately.")
    // interview member
  }

  render() {
    return (
      <div>

        <img src={colorlogo} style={logo.onboardingLogoSmall} />
        <ProgressBar currentStep={this.state.currentStep} />

        <div>
          <div className="center">
            <h1 className="card-headline">Meet with a Member</h1>
            <h4 className="card-text">Thanks for taking the time to fill out your information! You're almost there.</h4>
          </div>

          <br/>

          <div className="center">
            <h3 className="card-headline">Ready to Take the Next Step?</h3>
            <Button className="card-text" style={buttons.lightButton} onClick={this.meetMember}>Meet with a Member</Button>
          </div>
        </div>

        <br/>

        <h4 className="center">Not quite ready yet?</h4>
        <div className="three-step-nav-container">
          <br/>
          <Link
            to="/select-skills"
            type="button"
            className="three-step-nav"
            style={buttons.onboardingButton}>Back
          </Link>
          <Link
            to="/dashboard"
            type="button"
            className="three-step-nav"
            style={buttons.greenButton}>Continue to Dashboard
          </Link>
        </div>

        <br/>

        <div className="social-icon-container">
          Follow us and check out what's happening in your community: &nbsp;
          <SocialIcon className="social-icons" url="https://www.facebook.com/urbanarray/" target="_blank" />
          <SocialIcon className="social-icons" url="https://twitter.com/urbanarray" target="_blank" />
          <SocialIcon className="social-icons" url="https://www.instagram.com/urbanarray/" target="_blank" />
          <SocialIcon className="social-icons" url="https://www.linkedin.com/company/urban-array/" target="_blank" />
          <SocialIcon className="social-icons" url="https://www.youtube.com/channel/UCicgBg_6lVqWBgqkur2S9vg" target="_blank" />
        </div>

      </div>
    )
  }
}
