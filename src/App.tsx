import Routers from "./routers"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <div className="font-poppins overflow-x-hidden">
       <ToastContainer autoClose={3500}/>
      <Routers />
    </div>
  )
}

export default App
