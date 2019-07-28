import React, { Component } from 'react';
import RegistrationButton from './RegistrationButton';
import AvatarComponent from './Avatar'
import { connect } from 'unistore/react';
import actions from '../../actions/actions';

class Header extends Component {
  render() {
    return (
        <div className="my-5 py-3" style={{ backgroundColor: '#ecf0f1' }}>
            <div className="w-75 m-auto">
                <div className=" text-dark d-flex justify-content-between">
                    <span className="font-weight-bold">FleaMarket</span>
                    {this.props.isLogged ? <AvatarComponent />: <RegistrationButton />}
                </div>
            </div>
        </div>
    )
  }
}
export default connect('isLogged,user', actions)(Header);


