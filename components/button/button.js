/**
 * Created by alex.
 */

import React from 'react';

export default class Button extends React.Component {
    render() {
        const {className, children, ...others} = this.props;
        const Component = this.props.href ? 'a' : 'button';
        return (
            <Component {...others} className={'button ' + className}>{children}</Component>
        )
    }
};
Button.propTypes = {};
Button.defaultProps = {};