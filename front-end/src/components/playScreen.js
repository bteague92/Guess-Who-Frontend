import React from 'react';
import { connect } from "react-redux";

const PlayScreen = (props) => {
    return (
        <div>
            <div className="answers"></div>
            <div className="tweets"></div>
        </div>
    );
}

export default connect(state => state, null)(PlayScreen);