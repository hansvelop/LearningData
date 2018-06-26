import React from 'react';
import { Card, Select, Form, Divider, Button } from 'semantic-ui-react';
import styles from './AgencyRegister.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const countryOptions = [
    {
        text : 'Level',
        value : ''
    },
    {
        text : '지점장',
        value : 't1'
    },
    {
        text : '운영자',
        value : 't2'
    }
]

const registerForm = () =>{
    return(
        <div>
            <div>
                <Form>
                    <Form.Field>
                        <label>Agency ID<span className={cx('req')}>*</span></label>
                        <input placeholder='Agency ID' />
                    </Form.Field>
                    <Form.Field>
                        <label>Agency Name<span className={cx('req')}>*</span></label>
                        <input placeholder='Agency Name' />
                    </Form.Field>
                    <Form.Field>
                        <label>Type<span className={cx('req')}>*</span></label>
                        <Select placeholder='Level' options={countryOptions} />
                    </Form.Field>
                    <Form.Field>
                        <label>Owner<span className={cx('req')}>*</span></label>
                        <input placeholder='Owner' />
                    </Form.Field>
                </Form>
            </div>
            <Divider />
            <div>
                <Button primary>Primary</Button>
                <Button secondary>Secondary</Button>
            </div>
        </div>
    )
}

const AgencyRegister = () => {
    return (
        <Card color='teal' className={cx('form-wrap')}>
            <Card.Content header='Agency Register' />
            <Card.Content description={registerForm} />
        </Card>
    );
};

export default AgencyRegister;
