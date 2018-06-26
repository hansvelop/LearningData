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
                    <Icon name={'plus'} size={'large'} className={cx('add-icon')} />
                </div>
                <div className={cx('sub')}>
                    <p className={cx('title')}>Healthy</p>
                    <div className={cx('menu-area')}>
                        <ul>
                            <li><Icon name={'file audio outline'} size={'big'} className={cx('select')}/> Your work</li>
                            <li><Icon name={'file audio outline'} size={'big'} /> Your work</li>
                            <li><Icon name={'file audio outline'} size={'big'} /> Your work</li>
                            <li><Icon name={'file audio outline'} size={'big'} /> Your work</li>
                            <li><Icon name={'file audio outline'} size={'big'} /> Your work</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default SideArea;
