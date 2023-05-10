import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Gallery, ImagesType} from "./components/Gallery/Gallery";
import {Search} from "./components/Search/Search";
import {PhotoPage} from "./components/PhotoPage/PhotoPage";
import {Invented} from "./components/Invented/Invented";

function App() {
    return (
        <div className="App">
            <Header/>
            <Search/>
            <Gallery/>
            <PhotoPage/>
            {/*<Invented/>*/}
        </div>
    );
}

export default App;
