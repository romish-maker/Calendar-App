import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import './App.css';
import {AppRouter} from './components/AppRouter';
import {Layout} from 'antd';
import {Navbar} from './components/Navbar';
import {AuthActionCreators} from './store/reducers/auth/action-creators';
import { IUser } from './models/IUser';

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      dispatch(AuthActionCreators.setUser({username: localStorage.getItem('username' || '')} as IUser));
      dispatch(AuthActionCreators.setIsAuth(true));
    }
  }, [])
  return (
      <Layout>
        <Navbar/>
          <Layout.Content> 
            <AppRouter />
          </Layout.Content>
        </Layout>
  );
}

