import React from 'react';
import Navbar from './components/navbar';
import DawnSlider from './components/dawnSlider';
import './css/index.css'

class App extends React.Component {
    render() {
        return(
            <div className="uk-container-expand">
                <Navbar />
                <div className="uk-container">
                    <div className="uk-grid-column-small uk-grid-row-large" uk-grid>
                        <div className="uk-card uk-card-default uk-card-body">Item</div>
                        <div className="uk-card uk-card-default uk-card-body">Item</div>
                        <DawnSlider />
                        <DawnSlider />
                        <DawnSlider />
                        <DawnSlider />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;