import React from 'react';
import './App.css';
import StarIcon from '@mui/icons-material/Star';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import Footer from './Footer'
export default class SideBarPanel extends React.Component{
    render(){
        return(
            <div class="Main_Panel Handled Panel_Overall Main_SideBar_Icon">
                <button class="Panel ButtonOverall SideBarChange Main_SideBar_Icon">
                    <AddIcon className="SideBar_Icons AddIcon Move Done"></AddIcon> Compose
    
                </button>
                <div class="Main_SideBar Active Update Main_SideBar_Icon">
                    <InboxIcon className="SideBar_Icons Color Hover_Color"></InboxIcon>
                    <h3>Inbox</h3>
                </div>
                <div className="Main_SideBar Update Main_SideBar_Icon">
                    <StarIcon className="SideBar_Icons"></StarIcon>
                    <h3>Starred</h3>
                </div>
    
                <div className="Main_SideBar Update Main_SideBar_Icon">
                    <AccessTimeIcon className="SideBar_Icons"></AccessTimeIcon>
                    <h3>Snoozed</h3>
                </div>
                <div className="Main_SideBar Update">
                    <LabelImportantIcon className="SideBar_Icons"></LabelImportantIcon>
                    <h3>Important</h3>
                </div>
                <div className="Main_SideBar Update Main_SideBar_Icon">
                    <DraftsIcon className="SideBar_Icons"></DraftsIcon>
                    <h3>Drafts</h3>
                </div>
                    <div className="Main_SideBar Update Main_SideBar_Icon">
                    <ExpandMoreIcon className="SideBar_Icons"></ExpandMoreIcon>
                    <h3>More</h3>
                </div>
                <Footer />
                </div>
        )
    }
}


