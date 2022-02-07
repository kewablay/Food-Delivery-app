import React,{useEffect} from "react";
import MenuContainer from "../components/MenuContainer";
import { HomeRounded, Chat, AccountBalanceWalletRounded, Favorite, Settings} from "@mui/icons-material";
import FactCheckIcon from '@mui/icons-material/FactCheck';

const BottomMenu = () => {
//   return <div className="bottomMenu">this is the bottom menu</div>;
useEffect(() => {
  const menuList = document.querySelectorAll(".bottomMenu__menu li")

  function setMenuActive(){
    console.log("active")
    menuList.forEach(n => n.classList.remove("active"))
    this.classList.add("active")
  }

  menuList.forEach(n => n.addEventListener("click", setMenuActive))
}, []);


return (
    <div className="bottomMenu">
      <ul className="bottomMenu__menu">
        <li className="active"><MenuContainer link= {"#"} icon={<HomeRounded />} /></li>
        <li><MenuContainer link= {"#"} icon={<Chat />} /></li>
        <li><MenuContainer link= {"#"} icon={<AccountBalanceWalletRounded />} /></li>
        <li><MenuContainer link= {"#"} icon={<Favorite />} /></li>
        <li><MenuContainer link= {"#"} icon={<FactCheckIcon />} /></li>
        <li><MenuContainer link= {"#"} icon={<Settings />} /></li>
        <div className="bottomMenu__indicator"></div>
      </ul>
    </div>
)
};

export default BottomMenu;
