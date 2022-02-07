import "./App.css";
import Navbar from "./layout/Navbar"
import BottomMenu from "./layout/BottomMenu"
import Banner from './components/Banner'


function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <div className="mainContainer">
          <Banner link={"#"} discount={20}/>
          <BottomMenu />
        </div>
        <div className="rightMenu"></div>
      </main>
    </div>
  );
}

export default App;
