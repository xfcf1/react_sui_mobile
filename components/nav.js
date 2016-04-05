/**
 * Created by alex.
 */

import React from 'react';

export class Nav extends React.Component {
    render() {
        const {type, className, children, ...others} = this.props;
        return (
            <nav className={"bar bar-tab " + className}>
                <a className="tab-item external active" href="#">
                    <span className="icon icon-home"></span>
                    <span className="tab-label">文案</span>
                </a>
                <a className="tab-item external" href="#">
                    <span className="icon icon-me"></span>
                    <span className="tab-label">文案</span>
                    <span className="badge">2</span>
                </a>
                <a className="tab-item external" href="#">
                    <span className="icon icon-star"></span>
                    <span className="tab-label">文案</span>
                </a>
                <a className="tab-item external" href="#">
                    <span className="icon icon-cart"></span>
                    <span className="tab-label">文案</span>
                </a>
                <a className="tab-item external" href="#">
                    <span className="icon icon-settings"></span>
                    <span className="tab-label">文案</span>
                </a>
            </nav>
        )
    }
};
Nav.propTypes = {};
Nav.defaultProps = {};