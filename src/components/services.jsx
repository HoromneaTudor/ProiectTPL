export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Noutăți</h2>
          <p>
            Descoperă ultimele noutăți ale transportului public local din
            Suceava
          </p>
          <br></br>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-12">
                  {" "}
                  <div className="service-desc">
                    <h2 style={{ fontSize: "26px" }}>{d.name}</h2>
                    <p>{d.text}</p>
                    <br></br> <br></br>{" "}
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
