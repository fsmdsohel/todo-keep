import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer>
        <a href="https://facebook.com/fsmdshohel">
          <h4>copyright &copy; {year}</h4>
        </a>
      </footer>
    </>
  );
};

export default Footer;
