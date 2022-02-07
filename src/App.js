import "./App.css";
import Navbar from "./layout/Navbar"
import BottomMenu from "./layout/BottomMenu"
import Banner from './components/Banner'
import SectionTitle from "./components/SectionTitle";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BottomMenu />
      <main>
        <div className="mainContainer">
          <Banner link={"#"} discount={20}/>
          <div className="mainContainer__dishContainer">
            <SectionTitle title={"Menu Category"} />
          </div>
        </div>
        <div className="rightMenu"></div>
      </main>
    </div>
  );
}

export default App;
