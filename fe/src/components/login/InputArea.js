import React, {Component} from 'react';
import {InputGroup, Button} from '@blueprintjs/core';

class InputArea extends Component {
    render() {
        return (
            <div>
                <InputGroup leftIcon={'user'} type={'text'} large={true} placeholder={'아이디'}/>
                <InputGroup leftIcon={'lock'} type={'password'} large={true} placeholder={'비밀번호'}/>
            </div>
        );
    }
}

export default InputArea;
