import React, { Component } from 'react'
import { Menu } from 'antd'
import actions from '../actions/actions'
import { connect } from 'unistore/react'




class CategoryBar extends Component {
    state = {
        current: 'all',
      };
    
      handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };

      handleClickAllCategories() {
        this.props.allCategories()
      }

      handleClickCarAndBike() {
        this.props.carAndBike()
      }

      handleClickRealState() {
        this.props.realState()
      }

      handleClickModeAndBeauty() {
        this.props.modeAndBeauty()
      }

      handleClickElectronics() {
        this.props.electronics()
      }
      
    
      render() {
        return (
            <div className="w-75 mx-auto mb-5">
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" className=" d-flex justify-content-between border-0 font-weight-bold" style={{ fontSize: '16px' }}>
                    <Menu.Item key="all">
                        <span onClick={this.handleClickAllCategories.bind(this)}>All</span>
                    </Menu.Item>
                    <Menu.Item key="carAndBike">
                        <span onClick={this.handleClickCarAndBike.bind(this)}>Car & Bike</span>
                    </Menu.Item>
                    <Menu.Item key="realState">
                        <span onClick={this.handleClickRealState.bind(this)}>Real State</span>
                    </Menu.Item>
                    <Menu.Item key="modeAndBeauty">
                        <span onClick={this.handleClickModeAndBeauty.bind(this)}>Mode & Beauty</span>
                    </Menu.Item>
                    <Menu.Item key="electronics">
                        <span onClick={this.handleClickElectronics.bind(this)}>Electronics</span>
                    </Menu.Item>
                </Menu>
            </div>
        );
      }
}

export default connect ('allCategoriesIsClicked, carAndBikeIsClicked, realStateIsClicked, modeAndBeautyIsClicked, electronicsIsClicked', actions) (CategoryBar)




