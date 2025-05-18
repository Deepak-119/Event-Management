import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>Plan'X</h1>
          <p>Events and Weddings</p>
        </div>
        <div className="tag">
          
          <div>
            <input type="text" placeholder="E-mail" />
            <button>Sign Up</button>
          </div>
          <p>Sign up with your email address to receive news and updates!</p>
          <p>© {new Date().getFullYear()} Designed and Developed by Deepak Kumar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;