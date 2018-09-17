import React from 'react';
import { Card, Select, Form, Divider, Button } from 'semantic-ui-react';
import styles from './MemberJoin.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const facilityList = [
    {
        key : "a1",
        text : '헬스장',
        value : 'type1'
    },
    {
        key : "a2",
        text : '필라테스',
        value : 'type1'
    },
    {
        key : "a3",
        text : '수영장',
        value : 'type1'
    }
]

const MemberJoin = () => {
    return (
        <Card color='teal' className={cx('form-wrap')}>
            <Card.Content header='Agency Register' />
            <Card.Content >
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
                        <label>Facility Type<span className={cx('req')}>*</span></label>
                        <Select placeholder='Facility Type' options={facilityList} />
                    </Form.Field>
                    <Form.Field>
                        <label>Owner<span className={cx('req')}>*</span></label>
                        <input placeholder='Owner' />
                    </Form.Field>
                </Form>
                <Divider />
                <div className={cx('btn-area')}>
                    <Button positive>Register</Button>
                    <Button>Cancel</Button>
                </div>
            </Card.Content >
        </Card>
    );
};

export default MemberJoin;
