import "./App.css";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages";
import SearchMap from "./components/Map/Map";
import SRMap from './components/Map/App'
function App() {
  return (
    
      <BrowserRouter>
     <Route path='/' component={Home} exact />
     <Route path="/map" component={SRMap} />

    </BrowserRouter>
   
  );
}

export default App;
