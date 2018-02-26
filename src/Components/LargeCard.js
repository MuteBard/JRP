import React, { Component } from 'react';
import '../app.scss';

class LargeCard extends Component {
    render() {
        let {backgroundsrc} = this.props
        return (
            <div className="largecard">
                {this.props.children}
            </div>
        );
    }
}

export default LargeCard;