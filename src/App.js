import './App.scss';
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/main/main-page/MainPage";
import OurCourses from "./pages/OurCourses";
import FollowPage from "./pages/FollowPage/FollowPage";
import Wait from "./pages/Wait";
import More from "./pages/More";
import Success from "./pages/Success";


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path={'/'} element={<MainPage/>}/>
          <Route path={"/our-courses"} element={<OurCourses/>}/>
        <Route path={'/followPage'} element={<FollowPage/>}/>
        <Route path={'/more'} element={<More/>}/>
        <Route path={'/wait'} element={<Wait/>}/>
        <Route path={'/success'} element={<Success/>}/>
      </Routes>

    </div>
  );
}

export default App;
