import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UpdateAndReconciliationPage from "./Exos/UpdateAndReconciliation/update-and-reconciliation-page";
import { WasteRenderPage } from "./Exos/WasteRenderGame/waste-render-page";
import { ProfilingToolsPage } from "./Exos/ProfilingTools/profiling-tools-page";
import { StateInstanceReconciliationParadox } from "./Exos/StateInstanceReconciliationParadox/stateInstanceReconciliationParadox-page";
import { IHaveAFunLiveISwear } from "./Exos/LifeCycle/lifecycle-page";

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
                        <Link to="/lifecycle/" className="mh2">
                            Inside a React Component Life
                        </Link>
                        <Link to="/update-reconciliation/" className="mh2">
                            Reconciliation Game
                        </Link>
                        <Link to="/waste-render-game/" className="mh2">
                            Waste Render Game
                        </Link>
                        <Link to="/element-instance/" className="mh2">
                            Element vs Instance
                        </Link>
                        <Link to="/profiling-tools/" className="mh2">
                            Profiling tools
                        </Link>
                    </nav>

                    <div className="flex items-center justify-center">
                        <Route path="/" exact component={Index} />
                        <Route
                            path="/element-instance/"
                            exact
                            component={StateInstanceReconciliationParadox}
                        />
                        <Route
                            path="/lifecycle/"
                            exact
                            component={IHaveAFunLiveISwear}
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
                        <Route
                            path="/profiling-tools/"
                            exact
                            component={ProfilingToolsPage}
                        />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
