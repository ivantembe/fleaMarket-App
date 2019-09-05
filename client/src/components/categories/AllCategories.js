import React, { Component } from 'react'
import axios from 'axios'
import { Card, Col, Row, Divider } from 'antd'
import actions from '../actions/actions'
import { connect } from 'unistore/react'




 class AllCategories extends Component {
    constructor(props){
        super(props);
        this.state = {
          list: [],
          title: ''
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
          url: 'http://localhost:4000/api/allLists',
          headers: {'Authorization': 'Bearer ' + jwt}
        }).then((response) => {
          this.setState({ 
            list: response.data.list,
            title: 'All Categories'
          });
        });
      }
      

      componentDidUpdate(prevProps){
        const jwt = localStorage.getItem('jwt')
        if(!jwt){
          this.props.history.push('/login')
          return
        }

        if(this.props.allCategoriesIsClicked !== prevProps.allCategoriesIsClicked ){
          axios({
            method: 'get',
            url: 'http://localhost:4000/api/allLists',
            headers: {'Authorization': 'Bearer ' + jwt}
          }).then((response) => {
            this.setState({ 
              list: response.data.list, 
              title: 'All categories' 
            });
          });
        }

        if(this.props.carAndBikeIsClicked ){
          axios({
            method: 'get',
            url: 'http://localhost:4000/api/carAndBike',
            headers: {'Authorization': 'Bearer ' + jwt}
          }).then((response) => {
            this.setState({ 
              list: response.data.list, 
              title: 'Car & Bike'
            });
          });
        }

        if(this.props.realStateIsClicked ){
          axios({
            method: 'get',
            url: 'http://localhost:4000/api/realState',
            headers: {'Authorization': 'Bearer ' + jwt}
          }).then((response) => {
            this.setState({ 
              list: response.data.list,
              title: 'Real State'
             });
          });
        }

        if(this.props.electronicsIsClicked ){
          axios({
            method: 'get',
            url: 'http://localhost:4000/api/electronics',
            headers: {'Authorization': 'Bearer ' + jwt}
          }).then((response) => {
            this.setState({ 
              list: response.data.list,
              title: 'Electronics'
             });
          });
        }

        if(this.props.modeAndBeautyIsClicked !== prevProps.modeAndBeautyIsClicked){
          axios({
            method: 'get',
            url: 'http://localhost:4000/api/modeAndBeauty',
            headers: {'Authorization': 'Bearer ' + jwt}
          }).then((response) => {
            this.setState({ 
              list: response.data.list,
              title: 'Mode & Beauty'
             });
          });
        }
        
      }

      

  render() {
    var { list, title } = this.state;

    return (
        <div className="w-75 m-auto border p-4">
            { title }
            < Divider />

            {list.map((listItems, index) => {
                return (
                    <div className="d-inline-flex">
                        <Row gutter={16}>
                            <Col span={6}>
                                <Card
                                    hoverable
                                    style={{ width: 220 }}
                                    cover={<img alt="example" src="https://via.placeholder.com/150" />}
                                >
                                    <Meta title={listItems.listTitle} description={listItems.listPrice + ' EUR'} style={{ color: 'red'}}/>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                )
            })}
        </div>
    )
  }
}

const { Meta } = Card; 

export default connect('allCategoriesIsClicked, carAndBikeIsClicked, realStateIsClicked, electronicsIsClicked, modeAndBeautyIsClicked', actions) (AllCategories);
