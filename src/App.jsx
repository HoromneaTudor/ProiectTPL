import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import {Register} from "./components/register";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";

import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />

      <Services data={landingPageData.Services} />

      <Contact data={landingPageData.Contact} />
      {/*
        <Register data={landingPageData.Register}/>
      */}
    </div>
  );
};

export default App;

//<About data={landingPageData.About} />
//<Gallery data={landingPageData.Gallery} />
// <Team data={landingPageData.Team} />
