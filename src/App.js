import './App.scss';
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/main/main-page/MainPage";


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path={'/'} element={<MainPage/>}/>
      </Routes>

    </div>
  );
}

export default App;
