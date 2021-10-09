import "./App.css";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { BrowserRouter, Route } from "react-router-dom";
import {Provider} from 'react-redux'
import Home from "./pages";
import SearchMap from "./components/Map/Map";
import SRMap from './components/Map/App'
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
     <Route path='/' component={Home} exact />
     <Route path="/map" component={SRMap} />

    </BrowserRouter>
    </Provider>
  );
}

export default App;
