import React from 'react';
import { Menu } from 'semantic-ui-react'
import styles from './Usermenu.scss';
import classNames from 'classnames/bind';
import { OutsideClickEvent } from 'components/index';

const cx = classNames.bind(styles);

const UserMenu = (props) => {
    let viewCss =""
    switch(props.visible){
        case true:
            viewCss="flipInY";
            break;
        case false:
            viewCss="flipOutY";
            break;
        default:
    }
    // if(!props.visible) return null;

    return (
        <OutsideClickEvent active={props.visible} eventHandel={props.onUserMenuClick}>
            <div className={cx('user-menu-area', viewCss)}>
                <Menu className={cx('user-menu')} size='small' vertical>
                    <Menu.Item className={cx('menu-list')}>
                        User Infomation
                    </Menu.Item>
                    <Menu.Item className={cx('menu-list')}>
                        User Infomation
                    </Menu.Item>
                    <Menu.Item className={cx('menu-list')}>
                        User Infomation
                    </Menu.Item>
                    <Menu.Item className={cx('menu-list')}>
                        User Infomation
                    </Menu.Item>
                    <Menu.Item className={cx('menu-list')}>
                        로그아웃
                    </Menu.Item>
                </Menu>
            </div>
        </OutsideClickEvent>
    );
};

export default UserMenu;
