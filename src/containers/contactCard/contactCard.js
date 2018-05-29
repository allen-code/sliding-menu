import {contactsArray} from '../../assets/contacts';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './contactCard.css'

class ContactCard extends Component {
    constructor()
    {
        super();
    }

    menuClicked()
    {
        this.props.menuClicked();
    }

    render() {
        const AppCardClass = classNames({"App-contact-card": true, "App-contact-card-slide": this.props.isOpen})
        const deviceHeight = window.screen.height;
        return (
            <div className={AppCardClass} style={{height:deviceHeight}}>
                <div className="App-contact-headline">
                    <div className="App-contact-hamburger" onClick={this.menuClicked.bind(this)}>{this.props.isOpen}
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="App-contact-headline-title">Inbox</div>
                </div>
                <div className="App-contact-list">
                    {contactsArray.map(contact =>
                    {
                        return <div key={contact.id} className="App-contact-list-item">
                            <div className="App-contact-list-item-image"><img src={contact.image} alt={contact.name}/></div>
                            <div className="App-contact-list-item-chat">
                                <p><b>{contact.name}</b></p>
                                <p className="App-contact-list-item-chat-message">{contact.message}</p>
                                <div className="App-contact-list-item-chat-time">
                                    <div className="App-contact-list-item-chat-time-clock"></div>
                                    <p>{contact.time}</p>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        );
    }
}

export default ContactCard;