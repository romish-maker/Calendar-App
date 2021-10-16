import React, {FC} from 'react';
import {AppRootStateType} from '../store/store';
import {useDispatch, useSelector} from 'react-redux';
import {Layout, Row, Menu} from 'antd';
import {useHistory} from 'react-router-dom';
import { RouteNames } from '../router/routers';
import { AuthActionCreators } from '../store/reducers/auth/action-creators';
import {IUser} from '../models/IUser';

export const Navbar: FC = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.authMe.isAuth);
    const users = useSelector<AppRootStateType, IUser>(state => state.authMe.users);
    return (
        <Layout.Header>
            <Row justify="end">
                {isAuth 
                ?
                <>
                <div style={{color: 'white', marginRight: "20px"}}>{users.username}</div>
                <Menu theme="dark" mode="horizontal">
                <Menu.Item 
                onClick={() => dispatch(AuthActionCreators.logout())} 
                key={1}>
                    Выйти
                </Menu.Item>
            </Menu>
            </>
                :
                <Menu theme="dark" mode="horizontal" selectable={false}>
                <Menu.Item 
                onClick={() => history.push(RouteNames.LOGIN)} 
                key={1}>
                    Логин
                </Menu.Item>
            </Menu>
                }
            </Row>
        </Layout.Header>
    );
}