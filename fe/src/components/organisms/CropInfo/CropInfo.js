import React, {Component} from 'react';
import Styles from './CropInfo.scss';
import classNames from 'classnames/bind';
import { Label } from 'semantic-ui-react';

const cx = classNames.bind(Styles);


class CropInfo extends Component {
    render() {
        const {cropInfo,cropTypeChange} = this.props;
        return (
            <div className={cx('crop-area')}>
                <div className={cx('crop-type')}>
                    <button className="ui icon button brown" onClick={()=>cropTypeChange('male')}>
                        <i className="male icon"></i>
                    </button>
                    <button className="ui icon button teal" onClick={()=>cropTypeChange('car')}>
                        <i className="car icon"></i>
                    </button>
                    <button className="ui icon button violet" onClick={()=>cropTypeChange('bus')}>
                        <i className="bus icon"></i>
                    </button>
                    <button className="ui icon button green" onClick={()=>cropTypeChange('motorcycle')}>
                        <i className="motorcycle icon"></i>
                    </button>
                </div>
                <div className={cx('crop-info')}>
                    <div className={cx('left')}>
                        <Label color='blue'>
                            X
                        </Label>
                        <Label color='blue'>
                            Y
                        </Label>
                        <Label color='blue'>
                            Width
                        </Label>
                        <Label color='blue'>
                            Height
                        </Label>
                    </div>
                    <div className={cx('right')}>
                        <p>{cropInfo.x}</p>
                        <p>{cropInfo.y}</p>
                        <p>{cropInfo.width}</p>
                        <p>{cropInfo.height}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CropInfo;
