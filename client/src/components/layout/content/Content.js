import React, { Component } from 'react';
import { connect } from 'unistore/react';
import actions from '../../actions/actions';
import SelectWithHiddenSelectedOptions from '../../createAndManageLists/CreateList';
import ManageList from '../../createAndManageLists/ManageList';



class Content extends Component {
  render() {
        let toBeRender ;
        if(this.props.createListIsClicked){
            toBeRender = <SelectWithHiddenSelectedOptions />;
        }
        
        if (this.props.manageListIsClicked) {
            toBeRender = < ManageList />;
        }
    return (
      <div>
          { toBeRender}
      </div>
    )
  }
}
export default connect ('isLogged, createListIsClicked, manageListIsClicked', actions)(Content);
