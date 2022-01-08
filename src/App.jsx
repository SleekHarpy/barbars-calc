import React  from 'react';
import './App.scss';
import appStore from './store/appStore';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainScreen from './pages/mainScreen/MainScreen';
import HelpScreen from './pages/helpScreen/HelpScreen';
import { AppRoute } from './const/const';


function App() {
    const store = appStore;

    return (
        <BrowserRouter>
            <Routes>
                <Route path={AppRoute.ROOT} element={<MainScreen store={store} />} />
                <Route path={AppRoute.HELP} element={<HelpScreen />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
