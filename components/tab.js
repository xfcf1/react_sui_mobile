/**
 * Created by alex.
 */

import React from 'react';

export class Tab extends React.Component {
    render() {
        const {data, className, children, ...others} = this.props;
        let span = data.map(function(d, i){
            let active = '';
            if(d.active){
                active = ' active';
            }
            return <a key={i} href={d.href} className={"tab-link button" + active} onClick={d.click}>{d.text}</a>
        })
        return (
            <div className="buttons-tab">
                {span}
            </div>
        )
    }
};
Tab.propTypes = {
    data: React.PropTypes.array,
    className: React.PropTypes.string
};
Tab.defaultProps = {
    data: [],
    className: ''
};