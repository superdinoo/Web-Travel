import React from "react";
import "./index.css";
import {
  Navbar,
  Main,
  Offers,
  Plan,
  Rooms,
  ImageSlider,
  Footer,
} from "./component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Offers />
      <Plan />
      <Rooms />
      <ImageSlider />
      <Footer />
    </div>
  );
}

export default App;
