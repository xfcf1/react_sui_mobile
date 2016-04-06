/**
 * Created by alex.
 */

import React from 'react';

export default class Button extends React.Component {
    render() {
        const {click, color, className, children, ...others} = this.props;
        const Component = this.props.href ? 'a' : 'button';
        let _class = className ? className : '';
        let button;
        switch (color){
            case 'success':
                button = ' button-fill button-success';
                break;
            case 'danger':
                button = ' button-fill button-danger';
                break;
            case 'warning':
                button = ' button-fill button-warning';
                break;
            case 'default' :
                button = ' button-fill';
        }
        return (
            <Component onClick={click} {...others} className={'button ' + _class + button}>{children}</Component>
        )
    }
};
Button.propTypes = {};
Button.defaultProps = {};