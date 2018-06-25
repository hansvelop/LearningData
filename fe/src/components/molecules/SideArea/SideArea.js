import React, {Component} from 'react';
import { Feed,Icon } from 'semantic-ui-react';
import iconImg from 'assets/icon.jpg';

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
                    <Icon name={'plus'} size={'big'} />
                </div>
                <div className={cx('sub')}>
                    <p className={cx('title')}>Healthy</p>
                </div>
            </div>
        );
    }
}

export default SideArea;
