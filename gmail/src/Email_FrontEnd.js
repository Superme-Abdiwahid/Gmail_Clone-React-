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
export default class EmailFrontEnd extends React.Component{
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