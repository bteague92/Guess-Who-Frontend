import React from 'react';
import { connect } from "react-redux";

const MainScreen = (props) => {
    return (
        <div>
            <div>Name</div>
            <div>Level</div>
            <div>Avatar</div>
            <div>High Score</div>
            <button>Play</button>
        </div>
    );
}

export default connect(state => state, null)(MainScreen);