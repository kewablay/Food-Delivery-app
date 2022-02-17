import "./App.css";
import {useEffect} from 'react'
import Navbar from "./layout/Navbar"
import BottomMenu from "./layout/BottomMenu"
import Banner from './components/Banner'
import SectionTitle from "./components/SectionTitle";
import ItemCard from "./components/ItemCard";
import CategoryCard from "./components/CategoryCard";
import Burger from "./assets/images/burger.png"

function App() {
  // Category active toggle
  useEffect(()=> {
    const categories = document.querySelector(".dishContainer__categoryList").querySelectorAll(".categoriesList__card")

    const setCategoryActive = () => {
      categories.forEach(n => n.classList.remove("active"))
    this.classList.add("active")
    }

    categories.forEach((n)=> n.addEventListener("click", setCategoryActive))
  },[])
  return (
    <div className="App">
      <Navbar />
      <BottomMenu />
      <main>
        <div className="mainContainer">
          <Banner link={"#"} discount={20} />
          <div className="mainContainer__dishContainer">
            <SectionTitle title={"Menu Category"} />
            <div className="dishContainer__categoryList">
              <CategoryCard image={Burger} title="Burger" isActive={true} />
              <CategoryCard image={Burger} title="Pizza" />
              <CategoryCard image={Burger} title="Taco" />
              <CategoryCard image={Burger} title="Hotdog" />
            </div>
            <div className="dishContainer__itemContainer">
              <ItemCard image={Burger} title="Burger Bistro" price="15" />
              <ItemCard image={Burger} title="Sassy Burger" price="20" />
            </div>
          </div>
        </div>
        <div className="rightMenu"></div>
      </main>
    </div>
  );
}

export default App;
