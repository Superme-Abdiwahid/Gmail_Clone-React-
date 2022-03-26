import React from 'react'
import './style.css';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
export default class Email extends React.Component{
    render(){
        return(
            <div class="Email_Portion">
            <div class="Emails Options ">
                <InboxIcon className="Icons"></InboxIcon>
                <h4>Primary</h4>
                </div>
                <div className="Emails ">
                <PeopleIcon className="Icons"></PeopleIcon>
                <h4>People</h4>
            </div>
            <div  className="Emails ">
                <LocalOfferIcon className="Icons"></LocalOfferIcon>
                <h4>Pormotions</h4>
            </div>
            </div>
        )
    }
}