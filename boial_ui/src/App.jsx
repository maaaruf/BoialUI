import logo from './logo.svg';
import './App.css';
import Router from './router';
import Layout from './shared/components/layout/layout';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

function App() {
  return (
    <>
      <Layout>
        <Router />
      </Layout>
    </>
  );
}

export default App;
