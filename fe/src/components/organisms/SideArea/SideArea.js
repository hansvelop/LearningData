import React, {Component} from 'react';
import { Feed,Icon } from 'semantic-ui-react';
import {UserMenu, CropInfo} from 'components';

import Styles from './SideArea.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(Styles);


class SideArea extends Component {
    handleUserMenu = () => {
        const {onUserMenuClick} = this.props;
        onUserMenuClick();
    }

    render() {
        const { onUserMenuClick, userMenuVisible, cropInfo, cropTypeChange, cropType } = this.props;
        const { handleUserMenu } = this;
        return (
            <div className={cx('side-area')}>
                <div className={cx('sub')}>
                    <div className={cx('header')} >
                        <Feed.Label className={ cx('logo') }>
                            <img src={require('static/images/LoraIcon.png')} alt={'logo'} />
                        </Feed.Label>
                        <p className={cx('title')}>Learning</p>
                    </div>
                    <CropInfo cropInfo={cropInfo} cropTypeChange={cropTypeChange} cropType={cropType} />
                    <div className={'box'} style={{ width: '100%'}}>
                        <div className={'img-preview'} style={{ width: '100%', height: 200 }} />
                    </div>
                    <div className={cx('btnBg bottom')} onClick={handleUserMenu}><Icon name={'user outline'} size={'large'} className={cx('user-icon')} /></div>
                    <UserMenu visible={userMenuVisible} onUserMenuClick={onUserMenuClick}/>
                </div>
            </div>
        );
    }}

export default SideArea;
