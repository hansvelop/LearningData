import React, {Component} from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import Styles from './AgencyList.scss';

const cx = classNames.bind(Styles);

class AgencyList extends Component {
    constructor(props) {
        super(props);
    }

    getDaummap = async () => {
        //daum response
        // const dr = await axios.get("http://dapi.kakao.com/v2/maps/sdk.js?appkey=aa3e232c871be11dfd36ecf912eedeb6");

        // var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        // var options = { //지도를 생성할 때 필요한 기본 옵션
        //     center: new dr.daum.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
        //     level: 3 //지도의 레벨(확대, 축소 정도)
        // };
        //
        // var map = new dr.daum.maps.Map(container, options);
    }

    componentDidMount() {
        this.getDaummap();
    }


    render() {
        return (
            <div id="map" className={cx('content-wrap')} ></div>
        );
    }
}


export default AgencyList;
