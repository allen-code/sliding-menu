import React, { Component } from 'react';
import classNames from 'classnames';
import personIcon from '../../assets/icons/avatar.svg';
import speechIcon from '../../assets/icons/speech-bubble.svg';
import starIcon from '../../assets/icons/star.svg';
import settingIcon from '../../assets/icons/settings.svg';
import './menuSlide.css';

class MenuSlide extends Component {
    render() {
        const appMenuClass = classNames({"App-menu": true, "App-menu-showing": this.props.isOpen})
        const AppProfileClass = classNames({"App-menu-image-profile": true, "App-menu-image-profile-showing": this.props.isOpen})
        const appMenuTabClass = classNames({"App-menu-image-wrapper": true, "App-menu-image-wrapper-showing": this.props.isOpen})
        const appSettingsClass = classNames({"App-menu-image-wrapper": true, "App-menu-image-settings-showing": this.props.isOpen})
        return (
            <div className={appMenuClass}>
                <div className={AppProfileClass}>
                    <img src="https://blackrockdigital.github.io/startbootstrap-freelancer/img/profile.png" alt="me" />
                </div>
                <div className={"App-menu-tab-group"}>
                    <div className={appMenuTabClass}>
                        <img src={personIcon} alt={personIcon} style={{width: '30px', height: '30px'}} />
                    </div>
                    <div className={appMenuTabClass}>
                        <img src={speechIcon} alt={speechIcon} style={{width: '30px', height: '30px'}} />
                    </div>
                    <div className={appMenuTabClass}>
                        <img src={starIcon} alt={starIcon} style={{width: '30px', height: '30px'}} />
                    </div>
                </div>
                <div className="App-menu-image-settings">
                    <div className={appSettingsClass}>
                        <img src={settingIcon} alt={settingIcon} style={{width: '30px', height: '30px'}} />
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuSlide;