import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './pages/authentication/Register';
import Welcome from './pages/authentication/Welcome';
import { ToastContainer } from 'react-toastify';
import Toast from './pages/toasts/Toast';
import HomePage from './pages/homepage/HomePage';
import AdminRegister from './pages/authentication/AdminRegister';
import { useSelector } from 'react-redux';
function App() {
  return (
    <div className="">
      <ToastContainer/>
      <Routes>
        <Route path="/*" element={<HomePage/>}/>
        <Route path="/auth/*" element={<Register/>}/>
        <Route path="/welcome" element={<Welcome/>}/>
      </Routes>
      <Toast/>
    </div>
  );
}

export default App;
