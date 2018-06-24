import React, {Component} from 'react';
import {InputGroup, Card, Elevation, Button} from '@blueprintjs/core';
import { Link } from 'react-router-dom';

class InputArea extends Component {
    render() {
        return (
            <Card className={'login-area'} interactive={false} elevation={Elevation.THREE}>
                <div className='logo' >Healthy</div>
                <div className='left-btn'>
                    <InputGroup className={'input-user'} leftIcon={'user'} type={'text'} large={true} placeholder={'아이디'} />
                    <InputGroup leftIcon={'lock'} type={'password'} large={true} placeholder={'비밀번호'}/>
                </div>
                <div className='right-btn'>
                    <Link to={`/admin/dashboard`} >
                    <Button rightIcon='log-in' className="pt-button join" text="Login"/>
                    </Link>
                </div>
            </Card>
        );
    }
}

export default InputArea;
