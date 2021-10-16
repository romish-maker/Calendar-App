import React, {FC} from 'react';
import {Layout, Row, Menu} from 'antd';
import {useHistory} from 'react-router-dom';
import { RouteNames } from '../router/routers';

export const Navbar: FC = () => {
    const history = useHistory();
    const isAuth = false;
    return (
        <Layout.Header>
            <Row justify="end">
                {isAuth 
                ?
                <>
                <div style={{color: 'white', marginRight: "20px"}}>Romish</div>
                <Menu theme="dark" mode="horizontal">
                <Menu.Item 
                onClick={() => console.log("Выйти")} 
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