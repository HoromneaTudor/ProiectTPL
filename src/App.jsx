import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Team } from "./components/Team";
import { Footer } from "./components/footer";
import { Register } from "./components/register";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";

import "./App.css";
import { Contact } from "./components/contact";
import { Rute } from "./components/rute";
import { Covid } from "./components/COVID-19";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  console.log(sessionStorage.getItem("conectareStare"));
  if (sessionStorage.getItem("conectareStare") == "false") {
    return (
      <div>
        <Navigation />
        <Header data={landingPageData.Header} />
        <Features data={landingPageData.Features} />

        <Services data={landingPageData.Services} />

        <Footer />
        {/*
        <Register data={landingPageData.Register}/>
      */}
      </div>
    );
  } else if (sessionStorage.getItem("conectareStare") == "Conectare") {
    return (
      <div>
        <Navigation />
        {/* <Header data={landingPageData.Header} />
        <Features data={landingPageData.Features} />

        <Services data={landingPageData.Services} />

        <Contact data={landingPageData.Contact} /> */}

        <Register data={landingPageData.Register} />
      </div>
    );
  } else if (sessionStorage.getItem("conectareStare") == "Galerie") {
    return (
      <div>
        <Navigation />
        {/* <Header data={landingPageData.Header} />
        <Features data={landingPageData.Features} />

        <Services data={landingPageData.Services} />

        <Contact data={landingPageData.Contact} /> */}

        <Gallery data={landingPageData.Gallery} />
        <Footer />
      </div>
    );
  } else if (sessionStorage.getItem("conectareStare") == "Contact") {
    return (
      <div>
        <Navigation />
        {/* <Header data={landingPageData.Header} />
        <Features data={landingPageData.Features} />

        <Services data={landingPageData.Services} />

        <Contact data={landingPageData.Contact} /> */}
        <Contact data={landingPageData.Contact} />
        <Footer />
      </div>
    );
  } else if (sessionStorage.getItem("conectareStare") == "Rute") {
    return (
      <div>
        <Navigation />
        {/* <Header data={landingPageData.Header} />
        <Features data={landingPageData.Features} />

        <Services data={landingPageData.Services} />

        <Contact data={landingPageData.Contact} /> */}
        <Rute data={landingPageData.Contact} />
        <Footer />
      </div>
    );
  }  else if (sessionStorage.getItem("conectareStare") == "COVID") {
    return (
      <div>
        <Navigation />
        {/* <Header data={landingPageData.Header} />
        <Features data={landingPageData.Features} />

        <Services data={landingPageData.Services} />

        <Contact data={landingPageData.Contact} /> */}
        <Covid data={landingPageData.Contact} />
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <Navigation />
        <Header data={landingPageData.Header} />
        <Features data={landingPageData.Features} />

        <Services data={landingPageData.Services} />

        <Footer />
        {/*
        <Register data={landingPageData.Register}/>
      */}
      </div>
    );
  }
};

export default App;

//<About data={landingPageData.About} />
//<Gallery data={landingPageData.Gallery} />
// <Team data={landingPageData.Team} />
