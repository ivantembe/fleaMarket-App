import React, { Component } from 'react'
import axios from 'axios'
import { Divider, Button } from 'antd'
import { connect } from 'unistore/react'
import actions from '../../actions/actions'

class ManageListing extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: [],
    }
  }
  componentDidMount() {
    const jwt = localStorage.getItem('jwt')
    if(!jwt){
      this.props.history.push('/login')
      return
    }
    axios({
      method: 'get',
      url: 'http://localhost:4000/api/userLists',
      headers: {'Authorization': 'Bearer ' + jwt}
    }).then((response) => {
      this.setState({ list: response.data.list });
    });
  }

  onDeleteList(list){
    const jwt = localStorage.getItem('jwt')
    axios({
      method: 'delete',
      data: {
        list: {
          id: list.list_id
        }
      },
      url: 'http://localhost:4000/api/deleteList',
      headers: {'Authorization': 'Bearer ' + jwt}
    }).then((response) => {
      this.setState({ list: response.data.list });
    }); 
  }

  onEditClick(){
    this.props.updateList()
  }

  render() {
    var { list } = this.state;
    console.log(list)

    return (
      <div className="w-75 m-auto mt-5 py-5 px-5 border">
        <div className="d-flex">
            <div className="w-25">
                LIST ID
            </div>
            <div className="w-50">
                LIST TITLE
            </div>
            <div className="w-25">
                ACTION
            </div>
          </div>
          < Divider />
          <div  >
              {list.map((listitems, index) => {
                  return (
                  <div className="d-flex mb-2">
                    <span key={index} className="w-25">{listitems.list_id}</span>
                    <span key={index} className="w-50">{listitems.listTitle}</span>
                    <div className="w-25">
                      <Button onClick={this.onEditClick.bind(this)}>Edit</Button>
                      <Button className="mx-3" type="primary" onClick={this.onDeleteList.bind(this)}>Delete</Button>
                    </div>
                  </div> )
              })}
          </div>
      </div>
    )
  }
  
}
export default connect ('createListIsClicked, updateListIsClicked', actions) (ManageListing)
