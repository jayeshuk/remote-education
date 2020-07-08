import React from "react";
import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import Carousel from "./Components/HomePage/Carous";
import Footer from "./Components/HomePage/Footer";
import Jumbo from "./Components/HomePage/Jumbo";

// app.listen(process.env.PORT || 3000, function () {
//   console.log(
//     "Express server listening on port %d in %s mode",
//     this.address().port,
//     app.settings.env
//   );
// });

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Carousel />
      <Jumbo />
      <Footer />
    </div>
  );
}

export default App;
