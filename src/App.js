import './App.scss';
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/main/main-page/MainPage";
import PageBooks from "./pages/PageBooks";
import OurCourses from "./pages/OurCourses";
import FollowPage from "./pages/FollowPage/FollowPage";
import Wait from "./pages/Wait";
import More from "./pages/More";
import Success from "./pages/Success";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
// import { Transition } from 'react-transition-group';


function App() {
    return (
        <div className="App">

            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/new-books'} element={<PageBooks/>}/>
            </Routes>

            <Header/>
            <Routes>

                <Route path={'/'} element={<MainPage/>}/>
                <Route path={"/our-courses"} element={<OurCourses/>}/>
                <Route path={'/followPage'} element={<FollowPage/>}/>
                <Route path={'/more'} element={<More/>}/>
                <Route path={'/wait'} element={<Wait/>}/>
                <Route path={'/success'} element={<Success/>}/>
            </Routes>
            <Footer/>
            {/*{Routes.map(({path, element} => {*/}
            {/*    <Route key={patch} exact patch={patch}>*/}
            {/*{({match}) =>*/}
            {/*    <CSSTransition*/}
            {/*    */}
            {/*    >*/}
            {/*    <element/>*/}
            {/*    </CSSTransition>*/}
            {/*}*/}
            {/*    </Route>*/}
            {/*}))}*/}
        </div>
    );
}

export default App;
