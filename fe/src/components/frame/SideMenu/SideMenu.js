import React, {Component} from 'react';
import styles from './SideMenu.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class SideMenu extends Component {
    render() {
        return (
            <div className={cx('side-wrap')}>
                test
            </div>
        );
    }
}

export default SideMenu;
