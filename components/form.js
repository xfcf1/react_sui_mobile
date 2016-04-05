/**
 * Created by alex.
 */

import React from 'react';

export class Form extends React.Component {
    render() {
        const {type, className, children, ...others} = this.props;
        return (
            <div className="list-block">
                <ul>
                    <li>
                        <div className="item-content">
                            <div className="item-media"><i className="icon icon-form-name"></i></div>
                            <div className="item-inner">
                                <div className="item-title label">姓名</div>
                                <div className="item-input">
                                    <input type="text" placeholder="Your name"/>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="item-content">
                            <div className="item-media"><i className="icon icon-form-email"></i></div>
                            <div className="item-inner">
                                <div className="item-title label">邮箱</div>
                                <div className="item-input">
                                    <input type="email" placeholder="E-mail"/>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="item-content">
                            <div className="item-media"><i className="icon icon-form-password"></i></div>
                            <div className="item-inner">
                                <div className="item-title label">密码</div>
                                <div className="item-input">
                                    <input type="password" placeholder="Password" className=""/>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="item-content">
                            <div className="item-media"><i className="icon icon-form-gender"></i></div>
                            <div className="item-inner">
                                <div className="item-title label">性别</div>
                                <div className="item-input">
                                    <select>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="item-content">
                            <div className="item-media"><i className="icon icon-form-calendar"></i></div>
                            <div className="item-inner">
                                <div className="item-title label">生日</div>
                                <div className="item-input">
                                    <input type="date" placeholder="Birth day" value="2014-04-30"/>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="item-content">
                            <div className="item-media"><i className="icon icon-form-toggle"></i></div>
                            <div className="item-inner">
                                <div className="item-title label">开关</div>
                                <div className="item-input">
                                    <label className="label-switch">
                                        <input type="checkbox"/>
                                            <div className="checkbox"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="align-top">
                        <div className="item-content">
                            <div className="item-media"><i className="icon icon-form-comment"></i></div>
                            <div className="item-inner">
                                <div className="item-title label">文本域</div>
                                <div className="item-input">
                                    <textarea></textarea>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
};
Form.propTypes = {};
Form.defaultProps = {};