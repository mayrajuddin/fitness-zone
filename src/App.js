// import logo from './logo.svg';
import { Toaster } from 'react-hot-toast';
import './App.css';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div className=''>
      <div><Toaster position="top-center"
        reverseOrder={false}></Toaster></div>
      <Layout></Layout>
    </div>
  );
}

export default App;
