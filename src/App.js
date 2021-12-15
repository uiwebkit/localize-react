import logo from './logo.svg';
import './App.css';

import UniLangMenuCustom from './components/UniLangMenuCustom';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/*Remove uni-router if language routing is not required*/}
                <uni-router shadow={true}/>

                <uni-translate>Choose the option that suits you best:</uni-translate>

                <div className="App-localize">
                    <uni-lang-menu-shadow
                        mini={true}
                        round={true}
                        routing={true}
                        url={'lang-menu.json'}
                    />
                    (Web Component)
                    | <span><UniLangMenuCustom/>(Next Gen custom)</span>
                </div>

                <img src={logo} className="App-logo" alt="logo"/>

                <uni-translate>
                    <span>Edit</span>
                    <code> src/App.js </code>
                    <span>and save to reload</span>.
                </uni-translate>

                <uni-translate>
                    <a
                        className="App-link"
                        href="https://(( langDocs ))reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>Learn</span> React
                    </a>
                </uni-translate>
            </header>
        </div>
    );
}

export default App;
