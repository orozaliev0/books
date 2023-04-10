import './App.scss';
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/main/main-page/MainPage";
import PageBooks from "./pages/PageBooks";


function App() {
    return (
        <div className="App">

            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/new-books'} element={<PageBooks/>}/>
            </Routes>

        </div>
    );
}

export default App;
