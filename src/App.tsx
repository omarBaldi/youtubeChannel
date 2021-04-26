import React, { useState } from 'react';
import './App.css';
import { SearchBar } from './components/atoms/searchBar/searchBar';

function App() {

    const [youtubeChannel, setYoutubeChannel] = useState<string>('');

    return (
        <div className="App">
            <SearchBar 
                currentValue={youtubeChannel} 
                onStartType={(letter: string) => setYoutubeChannel(letter)} 
            />
            <div>
                <h1>
                    {youtubeChannel}
                </h1>
            </div>
        </div>
    );
}

export default App;
