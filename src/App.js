/* eslint-disable react/jsx-pascal-case */

import { BrowserRouter as Router } from "react-router-dom";
import "./styles/app.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About_Umbrella from "./components/About_Umbrella/About_Umbrella";
import { InfoUmbrella } from "./data/DataUmbrella";
import Leon from "./components/Leon/Leon";
import { InfoLeon } from "./data/DataLeon";
import Claire from "./components/Claire/Claire";
import { InfoClaire } from "./data/DataClaire";
import Sherry from "./components/Sherry/Sherry";
import { InfoSherry } from "./data/DataSherry";
import Ada from "./components/Ada/Ada";
import { InfoAda } from "./data/DataAda";
import Details from "./components/Details/Details";
import { DetailsContent } from "./data/DataDetails";
import Videos from "./components/Videos/Videos";
import Gallery from "./components/Gallery/Gallery";
import MrX from "./components/MrX/MrX";
import { InfoMrX } from "./data/DataMrX";
import Annete from "./components/Annete/Annete";
import { InfoAnnete } from "./data/DataAnnete";
import BioWilliam from './components/BioWilliam/BioWilliam';
import { BioWilliamContent } from './data/DataBioWilliam';

export function App() {
  return (
    <Router>
      <Header />
        <Main />
          <About_Umbrella {...InfoUmbrella} />
           <Leon {...InfoLeon} />
            <Claire {...InfoClaire} />
             <Sherry {...InfoSherry} />
             <Ada {...InfoAda} />
            <MrX {...InfoMrX } />
           <Annete {...InfoAnnete } />
          <BioWilliam {...BioWilliamContent } />
         <Videos />
        <Details {...DetailsContent} />      
      <Gallery />          
    </Router>  
  );
}


