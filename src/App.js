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
import CreatingCommand from "./pages/OurCourses/CreatingCommand";
import Account from "./components/main/Header/page";
import AboutUs from "./pages/AboutUs";
import Common from "./pages/common";
import PasswordChange from "./pages/Avtorizatsiya/PasswordChange";
import Avtorizatsiya from "./pages/Avtorizatsiya";
import NewPassword from "./pages/Avtorizatsiya/NewPassword";
import Restoration from "./pages/restoration";


function App() {

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={"/our-courses"} element={<OurCourses/>}/>
                <Route path={'/followPage'} element={<FollowPage/>}/>
                <Route path={'/more'} element={<More/>}/>
                <Route path={'/wait'} element={<Wait/>}/>
                <Route path={'/success'} element={<Success/>}/>
                <Route path={'/new-books'} element={<PageBooks/>}/>
                <Route path={'/new-books/2'} element={<PageBooks/>}/>
                <Route path={'/creatingCommand'} element={<CreatingCommand/>}/>
                <Route path={"/form"} element={<Account/>}/>
                <Route path={"/aboutUs"} element={<AboutUs/>}/>
                <Route path={"/form"} element={<Account/>}/>
                <Route path={"/regis"} element={<Common/>}/>
                <Route path={"/changePassword"} element={<PasswordChange/>}/>
                <Route path={"/registration"} element={<Account/>}/>
                <Route path={"/newPassword"} element={<NewPassword/>}/>
                <Route path={"/restoration"} element={<Restoration/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
