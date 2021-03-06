import React, {Component} from 'react';
import { SideArea } from 'components';

//redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as commonActions from 'store/modules/common';
import * as workerActions from 'store/modules/worker';

class SideAreaContainer extends Component {
    handleUserMenu = () => {
        const { CommonActions } = this.props;
        CommonActions.userMenuModal();
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
        const {visible,cropInfo,cropType} = this.props;
        const { handleUserMenu,cropTypeChange } = this;
        return (
            <SideArea
                userMenuVisible={visible}
                onUserMenuClick={handleUserMenu}
                cropTypeChange={cropTypeChange}
                cropInfo={cropInfo}
                cropType={cropType}
            />
        );
    }
}

export default connect(
    (state) => ({
        visible: state.common.getIn(['modal', 'visible']),
        cropInfo: state.worker.getIn(['crop', 'info']),
        cropType: state.worker.getIn(['crop', 'type']),
    }),
    (dispatch) => ({
        CommonActions: bindActionCreators(commonActions, dispatch),
        WorkerActions: bindActionCreators(workerActions, dispatch)
    })
)(SideAreaContainer);

