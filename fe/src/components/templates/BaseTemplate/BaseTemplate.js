import React from 'react';
import styles from './BaseTemplate.scss';
import classNames from 'classnames/bind';

import { SideArea } from 'components';

const cx = classNames.bind(styles);

const BaseTemplate =({children}) => {
    return (
        <div className={cx('base-wrap')}>
            <SideArea />
            <div className={cx('content-wrap')}>{children}</div>
        </div>
    )
}

export default BaseTemplate;
