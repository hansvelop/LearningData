import React, {Component} from 'react';
import { Feed,Icon } from 'semantic-ui-react';
import iconImg from 'assets/LoraIcon.png';

import Styles from './SideArea.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(Styles);

class SideArea extends Component {
    render() {
        return (
            <div className={cx('side-area')}>
                <div className={cx('main')}>
                    <Feed.Label className={ cx('icon') }>
                        <img src={iconImg}/>
                    </Feed.Label>
                    <div className={cx('btnBg')} ><Icon name={'plus'} size={'large'} className={cx('add-icon')} /></div>
                    <div className={cx('btnBg bottom')} ><Icon name={'user outline'} size={'large'} className={cx('user-icon')} /></div>
                </div>
                <div className={cx('sub')}>
                    <p className={cx('title')}>Lora Admin</p>
                    <div className={cx('menu-area')}>
                        <ul>
                            <li className={cx('select')}><Icon name={'magento'} size={'big'} /> Agency Manage</li>
                            <li><Icon name={'user secret'} size={'big'} /> User Manage</li>
                            <li><Icon name={'setting'} size={'big'} /> Setting</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default SideArea;
