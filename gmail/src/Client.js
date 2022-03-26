import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import Email from './Email';
import RefreshIcon from '@mui/icons-material/Refresh';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddIcon from '@mui/icons-material/Add';
import Footer from './Footer'
export  class EmailFrontEnd extends React.Component{
    render(){
        return(
            <div class="Email_list Email_Front ">
            <div class="Front_End Email_Front">
                <div class="Front_End_Left Email_Front">
               < CheckBoxOutlineBlankIcon />
                    <ArrowDropDownIcon className="Email_Main_Icons Email_Front Icon_Front"></ArrowDropDownIcon>
                    <RefreshIcon className="Email_Main_Icons Email_Front"></RefreshIcon>
                    <MoreVertIcon className="Email_Main_Iconss"></MoreVertIcon>
                </div>
                <div className="Front_End_right Email_Front">
                    <ChevronLeftIcon className="Email_Main_Icons Email_Front Icon_Front"></ChevronLeftIcon>
                    <ChevronRightIcon className="Email_Main_Icons Email_Front Icon_Front"></ChevronRightIcon>
                    <KeyboardHideIcon className="Email_Main_Icons Email_Front Icon_Front"></KeyboardHideIcon>
                    <SettingsIcon className="Email_Main_Icons Email_Front Icon_Front"></SettingsIcon>
                </div>
                
            </div>
            <Email />
        </div>
        )
    }
}

export class Promotions extends React.Component{
    render(){
        return(
            <h1></h1>
        )
    }
}


export class Messages extends React.Component{
    render(){
        return(
            <div>

            </div>
        )
    }
}

export class SentMail extends React.Component{
    render(){
        return(
            <div>
                <h4>
                    
                </h4>
            </div>
        )
    }
}

export class Footers extends React.Component{
    render(){
        return(
            <h1></h1>
        )
    }
}

export  class Received extends React.Component{
    render(){
        return(
            <div>
                
            </div>
        )
    }
}


export default class Emails extends React.Component{
    render(){
        return(
            <section>

            </section>
        )
    }
}