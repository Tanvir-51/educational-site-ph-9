import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    fetch("./course.JSON")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="App">
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

export default App;
