import React, {Component} from 'react';
import { SideArea } from 'components';

//redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as commonActions from 'store/modules/common';

class SideAreaContainer extends Component {
    handleUserMenu = () => {
        const { CommonActions } = this.props;
        CommonActions.userMenuModal();
    }

    render() {
        const {visible} = this.props;
        const { handleUserMenu } = this;
        return (
            <SideArea
                userMenuVisible={visible}
                onUserMenuClick={handleUserMenu}
            />
        );
    }
}

export default connect(
    (state) => ({
        visible: state.common.getIn(['modal', 'visible'])
    }),
    (dispatch) => ({
        CommonActions: bindActionCreators(commonActions, dispatch)
    })
)(SideAreaContainer);

