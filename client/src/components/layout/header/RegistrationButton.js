import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'antd';

class RegistrationButton extends Component {
  render() {
    return (
      <div>
        <Link to="/login">
            <Button className="float-right text-uppercase"
                type="primary">
                Login / Register
            </Button>
        </Link>
      </div>
    )
  }
}
export default RegistrationButton ;
