import React, { Component } from 'react'
import { Link } from "react-router-dom"
import RegistrationButton from './RegistrationButton'
import AvatarComponent from './Avatar'
import { connect } from 'unistore/react'
import actions from '../../actions/actions'

class Header extends Component {
  render() {
    return (
        <div className="mb-5 py-3 border-bottom" style={{ fontSize: '20px' }}>
            <div className="w-75 m-auto">
                <div className=" text-dark d-flex justify-content-between">
                    <Link className="font-weight-bold text-dark" to="/">FleaMarket</Link>
                    {this.props.isLogged ? <AvatarComponent />: <RegistrationButton />}
                </div>
            </div>
        </div>
    )
  }
}
export default connect('isLogged,user', actions)(Header);


