import React, {FC} from 'react';
import {Row, Form, Input, DatePicker, Button, Select} from 'antd';
import {IUser} from '../models/IUser';

interface EventFormProps {
    guests: IUser[]
}

export const EventForm: FC<EventFormProps> = ({guests}) => {
    return (
        <Form>
            <Form.Item
            label="Описание события"
            name="description"
            rules={[{required: true, message: "Обязательное поле"}]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
            label="Дата события"
            name="description"
            rules={[{required: true, message: "Обязательное поле"}]}
            >
                <DatePicker />
            </Form.Item>
            <Form.Item 
            label="Дата события" 
            name="date"
            rules={[{required: true, message: "Обязательное поле"}]}
            >
                <Select>
                    {guests.map(guest => 
                        <Select.Option value={guest.username} key={guest.username}>
                            {guest.username}
                        </Select.Option>
                    )}
                </Select>
            </Form.Item>
            <Row justify="end"> 
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Создать
                </Button>
            </Form.Item>
            </Row>
            
        </Form>
    )
}