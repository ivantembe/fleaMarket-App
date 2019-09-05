import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'antd';

class RegistrationButton extends Component {
  render() {
    return (
      <div>
        <Link to="/register">
            <Button className="float-right text-uppercase"
                type="primary">
                Register
            </Button>
        </Link>
        <Link to="/login">
            <Button className="float-right text-uppercase mr-2">
                Login
            </Button>
        </Link>
      </div>
    )
  }
}
export default RegistrationButton ;
