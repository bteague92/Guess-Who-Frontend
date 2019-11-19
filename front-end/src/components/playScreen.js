import React from 'react';
import { connect } from "react-redux";

const PlayScreen = (props) => {
    return (
        <div className="playScreen">
            <div className="answers">
                <h1>answer choices</h1>
            </div>
            <div className="tweets">
                <h1>tweet</h1>
            </div>
        </div>
    );
}

export default connect(state => state, null)(PlayScreen);