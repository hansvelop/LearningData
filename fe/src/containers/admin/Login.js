import React, { Component } from 'react';
import InputArea from '../../components/login/InputArea';
import { Card,Elevation } from '@blueprintjs/core';
class Login extends Component {
    render() {
        return (
            <div className={'login-warpper'}>
                <InputArea/>
            </div>
        );
    }
}

export default Login;
