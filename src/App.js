import './App.scss';
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/main/main-page/MainPage";
import OurCourses from "./pages/OurCourses";


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path={'/'} element={<MainPage/>}/>
          <Route path={"/our-courses"} element={<OurCourses/>}/>
      </Routes>

    </div>
  );
}

export default App;
