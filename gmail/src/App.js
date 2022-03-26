import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import './style.css';
import SideBarPanel from './SideBarPanel';
import EmailFrontEnd from './Email_FrontEnd';
import Footer from './Footer';
import Email from './Email';
export default class App extends React.Component{
  render(){
    return(
      <div>
        <Headers />
        <div class="main_body">
          <SideBarPanel />
          <EmailFrontEnd />
          
        </div>
      </div>
    );
  }
}


export class Headers extends React.Component{
  render(){
    return(
      <div class="Main_Header">
    <div class="Image_Header">
       <MenuIcon className="Home_icons" />
            <img class="Gmail" src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Gmail.max-1100x1100.png" alt="Gmail"/>
    </div>
    <div class="Middle_Content">
        <SearchIcon className="Home_icons All" />
        <input type="text" placeholder="Search Mail" />
        <ArrowDropDownIcon className= " Home_icons All" />
    </div>
    <div class="Last_Header">
    <AppsIcon className="Home_icons All" />
    <NotificationsIcon className="Home_icons All" />
      <AccountCircleIcon className="Home_icons All"/>
    </div>

</div>
    )
  }
}





