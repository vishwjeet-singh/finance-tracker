import "./App.scss";
import Homepage from "./pages/homepage/Homepage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <Homepage />
      <ToastContainer />
    </div>
  );
}

export default App;
