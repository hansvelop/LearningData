import React, {Component} from 'react';
import Cropper from 'static/out/cropper/react-cropper';
import styles from 'styles/libs/cropper.scss';
import classNames from 'classnames/bind';
import {cropId} from "store/modules/worker";

const cx = classNames.bind(styles);

class Worker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trakingData : []
        }
    }

    cropperInit(){
        let el = document.getElementsByClassName('cropper-insert-btn');
        // el[0].addEventListener("click", () => {
        //     this.trakingInsert();
        // });
        // el[0].style.backgroundColor = "red";
        el[0].innerHTML= '<button class="ui icon button brown"><i class="male icon"></i></button>';
    }

    cropperStart(){
        const {cropType} = this.props;

        let borderColor = "brown";
        if(cropType == "bus"){
            borderColor = "violet";
        }else if(cropType == "car"){
            borderColor = "teal";
        }else if(cropType == "motorcycle"){
            borderColor = "green";
        }else{
            borderColor = "brown";
        }
        let el = document.getElementsByClassName('cropper-insert-btn');
        el[0].innerHTML= '<button class="ui icon button '+borderColor+'"><i class="'+cropType+' icon"></i></button>';
    }

    cropperEnd(){
        const {cropDataSet,cropId} = this.props;
        cropDataSet(this.cropper.getData());
        // if(cropId != null){
            this.trakingInsert(cropId);
        // }
    }

    cropperMove(){
        let cropModalEl = document.getElementsByClassName('cropper-modal');
        if(cropModalEl.length > 0 ){
            const {setCropId,cropId} = this.props;
            if(cropId != null){
                setCropId(null);
            }
        }
    }

    trakingInfo (data, index){
        const {cropDataSet, setCropId,cropTypeChange} = this.props;
        this.cropper.setData(data.cropInfo);
        cropDataSet(data.cropInfo);
        setCropId(index);
        cropTypeChange(data.cropType);

        let borderColor = "brown";
        if(data.cropType == "bus"){
            borderColor = "violet";
        }else if(data.cropType == "car"){
            borderColor = "teal";
        }else if(data.cropType == "motorcycle"){
            borderColor = "green";
        }else{
            borderColor = "brown";
        }
        let el = document.getElementsByClassName('cropper-insert-btn');
        el[0].innerHTML= '<button class="ui icon button '+borderColor+'"><i class="'+data.cropType+' icon"></i></button>';
    }

    trakingInsert (cropId, type){
        const {cropType} = this.props;
        let trakingData  = this.state.trakingData;
        let takingInfo = {
            'cropInfo' : this.cropper.getData(),
            'boxInfo' : this.cropper.getCropBoxData(),
            'cropType' : type ? type : cropType
        }
        if(cropId != null){
            trakingData[cropId] = takingInfo;
        }else{
            trakingData.push(takingInfo);
        }
        this.setState({
            trakingData : trakingData
        });
    }

    trakingDelete = () => {

    }

    render() {
        const {trakingData} = this.state;
        let trakingDataItem = [];
        if(trakingData){
            trakingDataItem = trakingData.map((ap, i) =>{
                let borderColor = "#a5673f";
                if(ap.cropType == "bus"){
                    borderColor = "#6435c9";
                }else if(ap.cropType == "car"){
                    borderColor = "#00b5ad";
                }else if(ap.cropType == "motorcycle"){
                    borderColor = "#22ba45";
                }else{
                    borderColor = "#a5673f";
                }
                return (
                    <div key={i} className={'cropper-data'}
                         onClick={()=>this.trakingInfo(ap, i)}
                         style={{
                             border: borderColor+' 2px solid',
                             top: ap.boxInfo.top,
                             left: ap.boxInfo.left,
                             width: ap.boxInfo.width,
                             height: ap.boxInfo.height
                         }}
                    >
                        <span style={{backgroundColor : '#2f3a77', color: '#fff'}}>{i+1}</span>
                        <span style={{backgroundColor : '#2f3a77', color: '#fff'}}><i className="minus icon"></i></span>
                    </div>
                )
            });
        }
        return (
            <div className={'worker-board'} >
                <Cropper
                    style={{ height: '100vh', marginLeft: '21rem', position: 'relative' }}
                    preview=".img-preview"
                    autoCrop={false}
                    toggleDragModeOnDblclick={false}
                    dragMode={'crop'}
                    zoomable={false}
                    background={false}
                    src={require('static/car/8lHThPWkdnpHjtraGpXU.jpg')}
                    highlight={false}
                    guides={false}
                    modal={false}
                    ready={this.cropperInit.bind(this)}
                    cropstart={this.cropperStart.bind(this)}
                    cropend={this.cropperEnd.bind(this)}
                    cropmove={this.cropperMove.bind(this)}
                    ref={cropper => { this.cropper = cropper; }}
                >{trakingDataItem}</Cropper>
            </div>
        );
    }
}


export default Worker;
