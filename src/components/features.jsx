import iconPret from "../assets/imgs/pretIcon.png";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h2>Prețuri</h2>
          <br></br>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <img
                    src={iconPret}
                    alt="Girl in a jacket"
                    width="200"
                    height="85"
                  />
                  <h3
                    style={{
                      fontSize: "22px",
                      fontFamily: "Rubik",
                      marginTop: "30px",
                    }}
                  >
                    {d.title}
                  </h3>
                  <p
                    style={{
                      color: "#3E3E3E",
                      fontSize: "18px",
                      fontFamily: "Rubik",
                      marginTop: "10px",
                    }}
                  >
                    {d.text}
                  </p>
                  <br></br>
                  <br></br>
                  <br></br>
                </div>
              ))
            : "Loading..."}
        </div>
        <br></br>

        <p style={{ fontSize: "17px" }}>
          Atenție! Abonamentul de elev este gratuit în baza carnetului de elev.
        </p>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};
