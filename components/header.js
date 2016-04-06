/**
 * Created by alex.
 */

import React from 'react';

export class Header extends React.Component {
    render() {
        const {left, right, type, className, children, ...others} = this.props;
        let nav,licon,ricon;
        licon = left.icon ? left.icon: '';
        ricon = right.icon ? right.icon: '';
        switch (type){
            case 'button':
                nav = <div>
                        <button className="button pull-left" onClick={left.click}>
                            {left.text}
                        </button>
                        <button className="button pull-right" onClick={right.click}>
                            {right.text}
                        </button>
                    </div>
                break;
            case 'icon':
                nav = <div>
                    <a className={"icon pull-left " + licon} onClick={left.click}></a>
                    <a className={"icon pull-right " + ricon} onClick={right.click}></a>
                </div>
                break;
            case 'link':
                nav = <div>
                    <button className="button button-link button-nav pull-left" onClick={left.click}>
                        <span className={"icon " + licon}></span>
                        {left.text}
                    </button>
                    <button className="button button-link button-nav pull-right" onClick={right.click}>
                        {right.text}
                        <span className={"icon " + ricon}></span>
                    </button>
                </div>
                break;
        }

        return (
            <header {...others} className={'bar bar-nav ' + className}>
                {nav}
                {children}
            </header>
        )
    }
};
Header.propTypes = {};
Header.defaultProps = {};