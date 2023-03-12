import Form from "./pages/Form";
import axios from "axios";


axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true

function App() {
  return (
    <div>
     <Form />
    </div>
  );
}

export default App;
