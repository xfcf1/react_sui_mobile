/**
 * Created by alex.
 */

import React from 'react';

export class Header extends React.Component {
    render() {
        const {type, className, children, ...others} = this.props;
        let nav;
        switch (type){
            case 'button':
                nav = <div>
                        <button className="button pull-left">
                            按钮
                        </button>
                        <button className="button pull-right">
                            按钮
                        </button>
                    </div>
                break;
            case 'icon':
                nav = <div>
                    <a className="icon icon-left pull-left"></a>
                    <a className="icon icon-refresh pull-right"></a>
                </div>
                break;
            case 'link':
                nav = <div>
                    <button className="button button-link button-nav pull-left">
                        <span className="icon icon-left"></span>
                        返回
                    </button>
                    <button className="button button-link button-nav pull-right">
                        下一步
                        <span className="icon icon-right"></span>
                    </button>
                </div>
                break;
        }

        return (
            <header {...others} className={'bar bar-nav ' + className}>
                {nav}
                <h1 className="title">{children}</h1>
            </header>
        )
    }
};
Header.propTypes = {};
Header.defaultProps = {};