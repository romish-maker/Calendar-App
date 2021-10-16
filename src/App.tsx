import './App.css';
import {AppRouter} from './components/AppRouter';
import {Layout} from 'antd';
import {Navbar} from './components/Navbar';

export function App() {
  return (
      <Layout>
        <Navbar/>
          <Layout.Content> 
            <AppRouter />
          </Layout.Content>
        </Layout>
  );
}

