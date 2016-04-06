/**
 * Created by alex.
 */

import React from 'react';

export class Search extends React.Component {
    render() {
        const {click, placeholder, className, children, ...others} = this.props;
        let _class = className ? className : '';
        return (
            <div className={"bar bar-header-secondary " + _class}>
                <div className="searchbar">
                    <a className="searchbar-cancel">取消</a>
                    <div className="search-input">
                        <label className="icon icon-search" htmlFor="search" onClick={click}></label>
                        <input type="search" id='search' placeholder='输入关键字...'/>
                    </div>
                </div>
            </div>
        )
    }
};
Search.propTypes = {};
Search.defaultProps = {};