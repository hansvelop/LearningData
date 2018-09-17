import React, {Component} from 'react';
import { Worker } from 'components';

//redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as workerActions from 'store/modules/worker';

class WorkerContainer extends Component {
    setCropData = (data) => {
        const { WorkerActions } = this.props;
        WorkerActions.cropInfo(data);
    }
    setCropId = (id) => {
        const { WorkerActions } = this.props;
        WorkerActions.cropId(id);
    }
    getCropId = () => {
        const { cropId } = this.props;
        return cropId;
    }
    cropTypeChange = (type) => {
        const { WorkerActions } = this.props;
        WorkerActions.cropType(type);
        let borderColor = "brown";
        if(type == "bus"){
            borderColor = "violet";
        }else if(type == "car"){
            borderColor = "teal";
        }else if(type == "motorcycle"){
            borderColor = "green";
        }else{
            borderColor = "brown";
        }
        let el = document.getElementsByClassName('cropper-insert-btn');
        el[0].innerHTML= '<button class="ui icon button '+borderColor+'"><i class="'+type+' icon"></i></button>';
    }

    render() {
        const {visible, cropType, cropId, } = this.props;
        const { setCropData, setCropId, cropTypeChange } = this;
        return (
            <Worker
                userMenuVisible={visible}
                cropDataSet={setCropData}
                setCropId={setCropId}
                cropTypeChange={cropTypeChange}
                cropId={cropId}
                cropType={cropType}
            />
        );
    }
}

export default connect(
    (state) => ({
        cropInfo: state.worker.getIn(['crop', 'info']),
        cropType: state.worker.getIn(['crop', 'type']),
        cropId: state.worker.getIn(['crop', 'id'])
    }),
    (dispatch) => ({
        WorkerActions: bindActionCreators(workerActions, dispatch)
    })
)(WorkerContainer);

