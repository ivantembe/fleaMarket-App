import React, { Component } from 'react';
import { Row, Col, Divider } from 'antd';
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div className="py-5 w-75 m-auto">
        < Divider />
        <Row gutter={16}>
            <Col className="gutter-row" span={6}>
                <ul className="gutter-box list-unstyled ">
                    <p>COMPANY</p>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/">Jobs</Link>
                    </li>
                    <li>
                        <Link to="/">Partners</Link>
                    </li>
                </ul>
            </Col> 
            <Col className="gutter-row" span={6}>
                <ul className="gutter-box list-unstyled">
                    <p>INFORMATION</p>
                    <li>
                        <Link to="/">Help</Link>
                    </li>
                    <li>
                        <Link to="/">About Security</Link>
                    </li>
                    <li>
                        <Link to="/">Sell on fleaMarket</Link>
                    </li>
                    <li>
                        <Link to="/">Data Protection</Link>
                    </li>
                </ul>
            </Col>
            <Col className="gutter-row " span={6}>
                <ul className="gutter-box list-unstyled">
                    <p>SERVICES</p>
                    <li>
                        <Link to="/">Ads</Link>
                    </li>
                    <li>
                        <Link to="/">Marketing</Link>
                    </li>
                    <li>
                        <Link to="/">Consulting</Link>
                    </li>
                    <li>
                        <Link to="/">Shipping</Link>
                    </li>
                </ul>
            </Col>
            <Col className="gutter-row " span={6}>
                <ul className="gutter-box list-unstyled">
                    <p>SOCIAL MEDIA</p>
                    <li>
                        <Link to="/">Facebook</Link>
                    </li>
                    <li>
                        <Link to="/">Instagram</Link>
                    </li>
                    <li>
                        <Link to="/">Youtube</Link>
                    </li>
                </ul>
            </Col>
        </Row>
      </div>
    )
  }
}
