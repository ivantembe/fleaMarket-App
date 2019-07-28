import React from 'react';
import { Icon, Menu, Dropdown} from 'antd';
import { connect } from 'unistore/react';
import actions from '../../actions/actions';

  
  
class AvatarComponent extends React.Component {
  handleClickCreateList(){
    this.props.createList()
  }
  
  handleClickManageList(){
    this.props.manageList()
	}
  
    render() {
      const menu = (
        <Menu style={{ width: 150}}>
          <Menu.Item>
            <span onClick={this.handleClickCreateList.bind(this)}>
              Create list
            </span>
          </Menu.Item>
          <Menu.Item>
            <span onClick={this.handleClickManageList.bind(this)}>
              Manage List
            </span>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
              Logout
            </a>
          </Menu.Item>
        </Menu>
        );
        return (
            <span className="my-2 float-right">
                <Dropdown overlay={menu}>
                    <span className="ant-dropdown-link">
                        {this.props.user ? this.props.user : ''}
                        <span>
                        <Icon className="mx-2" type="user" size="large"/>
                        </span>
                    </span>
                </Dropdown>
             </span>
        );
    }
}
export default connect('isLogged,user,createListIsClicked,manageListIsClicked', actions) (AvatarComponent);



  