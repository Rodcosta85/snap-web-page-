import { useState } from 'react';
import './App.css';
import Overlay from './Overlay.jsx';
import NavElements from './NavElements.jsx';

const App = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayVisible(prevState => !prevState);
  };

  return (
    <>
      <div id="nav">
        <h1 id="snap">snap</h1>
        {<NavElements />}
        <button type="button" onClick={toggleOverlay} id="menu"><img src="images/icon-menu.svg" id="hamb-menu" /></button>
      </div>
      <figure id="hero"></figure>
      <div id="some-info">
        <h1>Make remote work</h1>
        <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
        <button>Learn more</button>
      </div>
      <div id="clients">
        <img src="images/client-databiz.svg" alt="" id="databiz" />
        <img src="images/client-audiophile.svg" alt="" id="audiophile" />
        <img src="images/client-meet.svg" alt="" id="meet" />
        <img src="images/client-maker.svg" alt="" id="maker" />
      </div>
      {isOverlayVisible && <Overlay toggleOverlay={toggleOverlay}/>}
    </>
  )
}

export default App
