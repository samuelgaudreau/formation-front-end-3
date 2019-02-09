import React, { Component } from "react";
import { WasteRenderEasy } from "./waste-render-easy";
import { WasteRenderIntermediate } from "./waste-render-intermediate";
import { WasteRenderList } from "./waste-render-list";

// const { whyDidYouUpdate } = require("why-did-you-update");
// whyDidYouUpdate(React);

export class WasteRenderPage extends Component {
    render() {
        return (
            <div>
                <h1>Waste render game</h1>
                <WasteRenderEasy />
                <WasteRenderIntermediate />
                <WasteRenderList />
            </div>
        );
    }
}
