const Footer = () => {
  return (
    <>
      <footer
        className="footer bg-light text-black"
        style={{ marginTop: "30%" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-auto">
              <a href="https://www.instagram.com">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </div>
            <div className="col-auto">
              <a href="https://www.facebook.com">
                <i className="fab fa-facebook-f fa-lg"></i>
              </a>
            </div>
            <div className="col-auto">
              <a href="https://www.linkedin.com">
                <i className="fab fa-linkedin-in fa-lg"></i>
              </a>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-auto">
              <p className="mb-0">Aljo's Hospital. All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
