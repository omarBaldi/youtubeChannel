/* eslint-disable */
import { useState } from 'react';
import './App.css';
import { NotFound } from './pages/notFound/notFound';
import { SearchBar } from './components/atoms/searchBar/searchBar';

function App() {

    const [youtubeChannel, setYoutubeChannel] = useState<string>('');
    const [currentStateAPI, setcurrentStateAPI] = useState<any>({
        loading: false,
        notFound: {},
        currentData: { name: 'PewDiePie' }
    });
    const [videoGridMode, setVideoGridMode] = useState<string>('');

    const retrieveChannel = () => {
        console.log("Call API");
    };

    const isDataEmpty = (currentObj: Object ) => {
        return Object.keys(currentObj).length === 0;
    };

    return (
        <div className="App">
            <SearchBar 
                currentValue={youtubeChannel} 
                onStartType={(letter: string) => setYoutubeChannel(letter)}
                startSearch={() => retrieveChannel()}
            />
            {currentStateAPI.loading && (
                <div>
                    <h1>Loading...</h1>
                </div>
            )}
            {!isDataEmpty(currentStateAPI.notFound) && (
                <NotFound errorMessage="Not Found" errorCode="404" />
            )}
            {!isDataEmpty(currentStateAPI.currentData) && (

                <div>

                    {/* Youtube channel logo + name */}
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '2rem', marginBottom: '5rem'  }}>
                        <div style={{ height: '100px', width: '100px', borderRadius: '50%', overflow: 'hidden' }}>
                            <img 
                                src="https://yt3.ggpht.com/ytc/AAUvwnga3eXKkQgGU-3j1_jccZ0K9m6MbjepV0ksd7eBEw=s800-c-k-c0x00ffffff-no-rj" 
                                alt=""
                                style={{ height: '100%', width: '100%' }}
                            />
                        </div>
                        <h1>PewDiePie</h1>
                    </div>

                    {/* Youtube channel stats */}
                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                        <div style={{ textAlign: 'center' }}>
                            <h4>27191715613</h4>
                            <p>viewCount</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <h4>109000000</h4>
                            <p>subscriberCount</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <h4>4314</h4>
                            <p>videoCount</p>
                        </div>
                    </div>

                    {/* Youtube videos */}
                    {/* Insert button to choose videos sorting and also video display (full or reduced version) to see stats */}
                    <div style={{ marginTop: '5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <select onChange={(e) => setVideoGridMode(e.target.value)} style={{ marginBottom: '3rem', padding: '.5rem 2rem' }}>
                                <option value="grid">Grid View</option>
                                <option value="list">List view</option>
                            </select>
                        </div>

                        
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                            {
                                [
                                    {
                                        videoBanner: 'https://i.ytimg.com/vi/L0zVJmsz5ww/hqdefault.jpg',
                                        videoTitle: 'Cursed Comments Needs To Be BANNED #68C[REDDIT REVIEW]',
                                        videoDescription: 'Floor Gang Merch! https://represent.com/store/pewdiepie (Thank you) Subscribe to become a FLOOR GANG Member here: ...'
                                    },
                                    {
                                        videoBanner: 'https://i.ytimg.com/vi/L0zVJmsz5ww/hqdefault.jpg',
                                        videoTitle: 'Cursed Comments Needs To Be BANNED #68C[REDDIT REVIEW]',
                                        videoDescription: 'Floor Gang Merch! https://represent.com/store/pewdiepie (Thank you) Subscribe to become a FLOOR GANG Member here: ...'
                                    },
                                    {
                                        videoBanner: 'https://i.ytimg.com/vi/L0zVJmsz5ww/hqdefault.jpg',
                                        videoTitle: 'Cursed Comments Needs To Be BANNED #68C[REDDIT REVIEW]',
                                        videoDescription: 'Floor Gang Merch! https://represent.com/store/pewdiepie (Thank you) Subscribe to become a FLOOR GANG Member here: ...'
                                    },
                                    {
                                        videoBanner: 'https://i.ytimg.com/vi/L0zVJmsz5ww/hqdefault.jpg',
                                        videoTitle: 'Cursed Comments Needs To Be BANNED #68C[REDDIT REVIEW]',
                                        videoDescription: 'Floor Gang Merch! https://represent.com/store/pewdiepie (Thank you) Subscribe to become a FLOOR GANG Member here: ...'
                                    },
                                    {
                                        videoBanner: 'https://i.ytimg.com/vi/L0zVJmsz5ww/hqdefault.jpg',
                                        videoTitle: 'Cursed Comments Needs To Be BANNED #68C[REDDIT REVIEW]',
                                        videoDescription: 'Floor Gang Merch! https://represent.com/store/pewdiepie (Thank you) Subscribe to become a FLOOR GANG Member here: ...'
                                    },
                                    {
                                        videoBanner: 'https://i.ytimg.com/vi/L0zVJmsz5ww/hqdefault.jpg',
                                        videoTitle: 'Cursed Comments Needs To Be BANNED #68C[REDDIT REVIEW]',
                                        videoDescription: 'Floor Gang Merch! https://represent.com/store/pewdiepie (Thank you) Subscribe to become a FLOOR GANG Member here: ...'
                                    },
                                ].map((ytVideo, index) => {
                                    return (
                                        <div>
                                            {videoGridMode === 'grid' || !videoGridMode ? (
                                                <div 
                                                    key={index}
                                                    style={{ height: '400px', width: '300px', margin: '.5rem .5rem', border: '1px solid grey' }}
                                                >
                                                    <div>
                                                        <img 
                                                            style={{ height: '100%', width: '100%' }}
                                                            src={ytVideo.videoBanner} 
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div>
                                                        <h4>{ytVideo.videoTitle}</h4>
                                                        <h6>{ytVideo.videoDescription}</h6>
                                                    </div>
                                                </div>
                                            ): (
                                                <div key={index} style={{ display: 'flex', marginBottom: '1rem' }}>
                                                    <div style={{ height: '100px', width: '130px', marginRight: '1rem', borderRadius: '5px', overflow: 'hidden' }}>
                                                        <img 
                                                            style={{ height: '100%', width: '100%' }}
                                                            src={ytVideo.videoBanner} 
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div>
                                                        <h4>{ytVideo.videoTitle}</h4>
                                                        <h6>{ytVideo.videoDescription}</h6>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })
                            }
                        </div>
                        
                    
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
