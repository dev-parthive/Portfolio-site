import logo from './logo.svg';
import './App.css';
import Home from './Home/Home/Home';
import { ToastContainer , toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom';
import route from './Route/route'

function App() {
  return (
    <div className="App">
     {/* <Home></Home> */}
     <RouterProvider router={route}></RouterProvider>
     <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
