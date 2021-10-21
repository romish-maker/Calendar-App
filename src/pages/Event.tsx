import React, {FC, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Layout, Row, Button, Modal} from 'antd';
import {EventCalendar} from '../components/EventCalendar';
import {EventForm} from '../components/EventForm';
import {EventActionCreators} from '../store/reducers/event/action-creators';
import { AppRootStateType } from '../store/store';
import { IUser } from '../models/IUser';

export const Event: FC = () => {
    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);

    const guests = useSelector<AppRootStateType, IUser[]>(state => state.event.guests);

    useEffect(() => {
      dispatch(EventActionCreators.fetchGuests());
    }, [])

    const handleClick = () => {
      setModalVisible(!modalVisible);
    }

    return (
      <Layout>
        <EventCalendar events={[]}/>
        <Row justify="center">
          <Button onClick={handleClick}>Добавить событие</Button>
        </Row>
        <Modal 
        title="Добавить событие" 
        visible={modalVisible}
        footer={null}
        onCancel={handleClick}
        >
          <EventForm guests={guests}/>
        </Modal>
      </Layout>
    );
  }
  
  