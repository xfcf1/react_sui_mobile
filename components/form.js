/**
 * Created by alex.
 */

import React from 'react';

export class Form extends React.Component {
    render() {
        const {data, type, className, children, ...others} = this.props;
        let li = data.map(function(d, i){
            let input;
            switch (d.type){
                case 'checkbox':
                    input = <label className="label-switch">
                            <input type="checkbox"
                                   name = {d.name}
                                   onChange = {d.change}
                                   onClick = {d.click}
                                   disabled = {d.disabled}
                                   value = {d.value}
                            />
                            <div className="checkbox"></div>
                        </label>
                    break;
                case 'select':
                    let option = d.options.map(function(dd, i){
                        return <option key={i} value={dd.value}>{dd.text}</option>
                    })
                    input = <select value={d.value}>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    break;
                case 'textarea':
                    input = <textarea
                        name = {d.name}
                        placeholder = {d.placeholder}
                        value = {d.value}
                        onChange = {d.change}
                        onClick = {d.click}
                        disabled = {d.disabled}
                    ></textarea>
                    break;
                default :
                    input = <input
                        name = {d.name}
                        placeholder = {d.placeholder}
                        value = {d.value}
                        onChange = {d.change}
                        onClick = {d.click}
                        disabled = {d.disabled}
                        type = {d.type}
                    />
            }
            return <li key={i}>
                <div className="item-content">
                    <div className="item-media"><i className="icon icon-form-name"></i></div>
                    <div className="item-inner">
                        <div className="item-title label">{d.label}</div>
                        <div className="item-input">
                            {input}
                        </div>
                    </div>
                </div>
            </li>
        })
        return (
            <div className="list-block">
                <ul>
                    {li}
                </ul>
            </div>
        )
    }
};
Form.propTypes = {};
Form.defaultProps = {};