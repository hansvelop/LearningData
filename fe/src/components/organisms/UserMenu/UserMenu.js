import React from 'react';
import { Input, Menu } from 'semantic-ui-react'
import styles from './Usermenu.scss';
import classNames from 'classnames/bind';
import { OutsideClickEvent } from 'components';

const cx = classNames.bind(styles);

const UserMenu = (props) => {
    let viewCss =""
    switch(props.visible){
        case true:
            viewCss="rotateInDownLeft";
            break;
        case false:
            viewCss="rotateOutUpLeft";
            break;
        default:
    }
    if(!props.visible) return null;

    return (
        <OutsideClickEvent>
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
                        User Setting
                    </Menu.Item>
                </Menu>
            </div>
        </OutsideClickEvent>
    );
};

export default UserMenu;
