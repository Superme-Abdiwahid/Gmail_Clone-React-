import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
export default class Footer extends React.Component{
    render(){
        return(
            <div className="Email_Footer">
                <div className="footer_icons">
                    <PersonIcon className="Footer_Icons"></PersonIcon>
                    <DuoIcon className="Footer_Icons"></DuoIcon>
                    <LocalPhoneIcon className="Footer_Icons"></LocalPhoneIcon>
                </div>
            </div>
        )
    }
}