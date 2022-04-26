import './App.css';
import Header from './components/views/Header';
import Navigation from './components/views/Navigation';
import Main from './components/views/Main';
import Subcontent from './components/views/Subcontent';
import Advertisement from './components/views/Advertisement';

function App() {
    return (
        <div className="App p-5 container">
            <div className="row">
                <Header />
            </div>
            <div className="row">
                <div className="col-3">
                    <Navigation />
                </div>
                <div className="col-9">
                    <Main>
                        <div className="row mb-3">
                            <div className="col">
                                <Subcontent />
                            </div>
                            <div className="col">
                                <Subcontent />
                            </div>
                            <div className="col">
                                <Subcontent />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <Advertisement />
                            </div>
                        </div>
                    </Main>
                </div>
            </div>
        </div>
    );
}

export default App;
