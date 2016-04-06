/**
 * Created by alex.
 */

import React from 'react';

export class Nav extends React.Component {
    render() {
        const {onclick, data, type, className, children, ...others} = this.props;
        let span = data.map(function(d, i){
            let badge, active = '';
            if(d.active){
                active = ' active';
            }
            if(d.badge){
                badge = <span className="badge">{d.badge}</span>;
            }
            return <a key={i} className={"tab-item" + active} href={d.href} onClick={d.click}>
                <span className={"icon " + d.icon}></span>
                <span className="tab-label">{d.text}</span>
                {badge}
                </a>
        })
        return (
            <nav className={"bar bar-tab " + className}>
                {span}
            </nav>
        )
    }
};
Nav.propTypes = {};
Nav.defaultProps = {};