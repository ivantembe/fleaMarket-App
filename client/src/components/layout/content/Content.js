import React, { Component } from 'react';
import { connect } from 'unistore/react';
import actions from '../../actions/actions';
import FormikCreateList from '../../createAndManageLists/createList/';
import ManageList from '../../createAndManageLists/manageList/';
import CategoryBar from '../../categories/CategoryBar';
import AllCategories from '../../categories/AllCategories'
import UpdateList from '../../createAndManageLists/manageList/UpdateList';




class Content extends Component {
  render() {
        let toBeRender ;
        if(this.props.createListIsClicked){
            toBeRender = <FormikCreateList />
        } else toBeRender = [< CategoryBar />, < AllCategories />]
        
        if (this.props.manageListIsClicked) {
            toBeRender = < ManageList />
        }

        if (this.props.updateListIsClicked) {
          toBeRender = < UpdateList />
        }

    return (
      <div >
        { toBeRender }
      </div>
    )
  }
}
export default connect ('isLogged, createListIsClicked, manageListIsClicked, updateListIsClicked, carAndBikeIsClicked, electronicsIsClicked, modeAndBeautyIsClicked, realStateIsClicked', actions)(Content);
