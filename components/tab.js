/**
 * Created by alex.
 */

import React from 'react';

export class Tab extends React.Component {
    render() {
        const {type, className, children, ...others} = this.props;
        return (
            <div className="buttons-tab">
                <a href="#tab1" className="tab-link active button">全部</a>
                <a href="#tab2" className="tab-link button">待付款</a>
                <a href="#tab3" className="tab-link button">待发货</a>
            </div>
        )
    }
};
Tab.propTypes = {};
Tab.defaultProps = {};