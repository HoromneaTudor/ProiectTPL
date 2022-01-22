export const ThirdSlideCarousel = (props) => {
  return (
    <header id="header">
      <div className="intro3">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  TPL Suceava
                  <span></span>
                </h1>
                <br />
                <p style={{ fontSize: "23px" }}>
                  Descoperă transportul public local din Suceava. Găsește rutele
                  de interes pe platforma noastră, alege-ți destinația și
                  bucură-te de calătoriile tale.{" "}
                </p>
                {/* <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
