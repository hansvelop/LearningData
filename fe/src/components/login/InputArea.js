import React, {Component} from 'react';
import {InputGroup, Card, Elevation, Button} from '@blueprintjs/core';

class InputArea extends Component {
    render() {
        return (
            <Card className={'login-area'} interactive={false} elevation={Elevation.THREE}>
                <div>LOGO</div>
                <div>
                    <InputGroup className={'input-user'} leftIcon={'user'} type={'text'} large={true} placeholder={'아이디'} />
                    <InputGroup leftIcon={'lock'} type={'password'} large={true} placeholder={'비밀번호'}/>
                </div>
                <div>
                    <Button icon='circle-arrow-right' className="pt-button" text="Login"/>
                </div>
            </Card>
        );
    }
}

export default InputArea;
