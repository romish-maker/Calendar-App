import {FC, useState} from 'react';
import {Form, Input, Button} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {AppRootStateType} from '../store/store';
import { AuthActionCreators } from '../store/reducers/auth/action-creators';
export const LoginForm: FC = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const error = useSelector<AppRootStateType, string>(state => state.authMe.error);
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.authMe.isLoading);
    const dispatch = useDispatch();

    const submit = () => {
        dispatch(AuthActionCreators.login(userName, password));
    }

    return (
        <Form
        onFinish={submit}
        > 
        {error && <div style={{color: 'red'}}>
            {error}
        </div>}
        
            <Form.Item
                label="Имя пользователя"
                name = "username"
                rules={[{required: true, message: "Пожалуйста введите имя пользователя"}]}
            >
                <Input 
                    value={userName}
                    onChange={(e) => setUserName(e.currentTarget.value)}
                />
            </Form.Item>
            <Form.Item
                label="Пароль"
                name =  "password"
                rules={[{required: true, message: "Пожалуйста введите пароль"}]}
            >
                <Input 
                     value={password}
                     onChange={(e) => setPassword(e.currentTarget.value)}
                     type="password"
                />
            </Form.Item> 
            <Form.Item>
                <Button
                loading={isLoading}
                type="primary"
                htmlType="submit"
                >
                    Войти
                </Button>
            </Form.Item>
        </Form>
    )
}