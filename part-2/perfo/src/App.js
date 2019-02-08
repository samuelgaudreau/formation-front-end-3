import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { StateInstanceMoisteringParadox } from "./Exos/StateInstanceMoisteringParadox/stateInstanceMoisteringParadox-page";
import UpdateAndReconciliationPage from "./Exos/UpdateAndReconciliation/update-and-reconciliation-page";
import { WasteRenderPage } from "./Exos/WasteRenderGame/waste-render-page";

const Index = () => <h2>Formation Performance React</h2>;

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="flex flex-row">
                        <Link to="/" className="mh2">
                            Home
                        </Link>
                        <Link to="/update-reconciliation/" className="mh2">
                            Reconciliation Game
                        </Link>
                        <Link to="/waste-render-game/" className="mh2">
                            Waste Render Game
                        </Link>
                        <Link to="/exos2/" className="mh2">
                            Exos #2
                        </Link>
                    </nav>

                    <div className="flex items-center justify-center">
                        <Route path="/" exact component={Index} />
                        <Route
                            path="/exos2/"
                            exact
                            component={StateInstanceMoisteringParadox}
                        />
                        <Route
                            path="/update-reconciliation/"
                            exact
                            component={UpdateAndReconciliationPage}
                        />
                        <Route
                            path="/waste-render-game/"
                            exact
                            component={WasteRenderPage}
                        />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
