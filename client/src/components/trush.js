
import React from 'react';
import axios from 'axios';
import { withRouter} from 'react-router-dom';
import { withFormik, Form, Field,  } from 'formik';
import { Button, Divider, Select } from 'antd';
import { connect } from 'unistore/react'
import actions from '../../actions/actions'


const category = ['Select category','Car & Bike', 'Real State', 'Mode & Beauty', 'Electronics'];
const condition = ['Select category', 'New', 'Second Hand']

const CreateList = ({
  values,
  handelChange,
}) => (
  <Form className="w-75 m-auto mt-5 py-5 px-5 border">
    <div>
        <div>
            ARTICLE CATEGORY
            <span className="float-right text-danger">
            <small>All fields are mandatory</small>
            </span>  
        </div>
        <Divider />

        <div className="pb-5">
            <div className="d-flex w-50 mb-3">
              <span className="w-50">Category</span>
              <Field className="w-50" component="select" name="category" placeholder="Select category">
                      {category.map((item) => 
                      <option key={item}>{item}</option>)
                  }
              </Field>
            </div>

            
            <div className="d-flex w-50 mb-3">
              <span className="w-50">Condition</span>
              <Field className="w-50" component={Select} name="condition" placeholder="Select condtion">
                  {condition.map((item) => 
                      <Select.Option key={item}>{item}</Select.Option>)
                      }
              </Field>
              {/* <Field className="w-50" component="select" name="condition" placeholder="Select condtion">
                  {condition.map((item) => 
                      <option key={item}>{item}</option>)
                      }
              </Field> */}
            </div>
        </div>
    </div>  
    <Button className="mx-3" type="primary" htmlType="submit" >Upload list</Button>
  </Form>
)

const FormikCreateList = withFormik ({
  mapPropsToValues({ category, condition, name}) {
    return {
      category: category || '',
      condition:  condition || ''
    }
  },
  handleSubmit(values) {
    var payload = {
      category: values.category,
      condition: values.condition
    }
    console.log(values)
    console.log(payload)
    const jwt = localStorage.getItem('jwt');
        axios.post('http://localhost:4000/api/createList', payload, {headers: {'Authorization': 'Bearer ' + jwt}})
          .then((response) => {
            if(response.status === 200){
                console.log("List successfull created");
                localStorage.setItem('jwt', response.data.token)
                this.props.history.push('/login')
            }
            })
            .catch((error) => {
              if(error.status === 401) {
              }
              console.log(error);
            });
  }
}) (CreateList)

export default connect ('isLogged', actions) (withRouter (FormikCreateList));



// ----------------------------------------------------------------------




//import React, { Component } from 'react';
import React from 'react';
import axios from 'axios';
import { withRouter} from 'react-router-dom';
//import { Select, Form, Button, Divider, Input } from 'antd';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';
import { connect } from 'unistore/react'
import actions from '../actions/actions'

const category = ['Apples', 'Nails', 'Bananas', 'Helicopters'];
const condition = ['A', 'N', 'B', 'H']

const CreateList = ({
  values,
  handleChange,
}) => (
  <Form>
    <Field component="select" name={category}>
      {category.map((item) => 
        <option name={item}>{item}</option>)
      }
      {/* <option name="new">Please category</option>
      <option name="carAndBike">Car & Bike</option>
      <option name="realState">Real State</option>
      <option name="modeAndBeauty">Mode & Beauty</option>
      <option name="electronics">Electronics</option>
      <option name="books">Books</option>
      <option name="services">Services</option> */}
    </Field>

    <Field component="select" name={condition}>
      {condition.map((item) => 
          <option name={item}>{item}</option>)
        }
      {/* <option name="new">Please condtion</option>
      <option name="new">New</option>
      <option name="secondHand">Second Hand</option> */}
    </Field>
    <button>Submit</button>
  </Form>
)

const FormikCreateList = withFormik ({
  mapPropsToValues({ category, condition, name}) {
    return {
      category: category || '',
      condition: condition || ''
    }
  },
  handleSubmit(values) {
    var payload = {
      category: values.category,
      condition: values.condition
    }
    console.log(payload)

    const jwt = localStorage.getItem('jwt');
        axios.post('http://localhost:4000/api/createList', payload, {headers: {'Authorization': 'Bearer ' + jwt}})
          .then((response) => {
            if(response.status === 200){
                console.log("List successfull created");
                localStorage.setItem('jwt', response.data.token)
                this.props.history.push('/login')
            }
            })
            .catch((error) => {
              if(error.status === 401) {
              }
              console.log(error);
            });
  }
  
}) (CreateList)

export default connect ('isLogged', actions) (withRouter (FormikCreateList));

// ------------------------------------------------------------------------

import React, { Component } from 'react';
import axios from 'axios';
import { Select, Form, Button, Divider, Input } from 'antd';
import { withFormik } from 'Formik';
import Yup from 'yup';
import { connect } from 'unistore/react'
import actions from '../actions/actions'

const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];
//const CONDITION = ['New', 'Second Hand'];

class CreateList extends Component {
  state = {
    selectedItems: []
  };

  handleChange = (selectedItems) => {
    this.setState({ selectedItems });
  };

  handleSubmit = e => {
        e.preventDefault();
    
        var payload={
          category: this.state.selectedItems
        }

        const jwt = localStorage.getItem('jwt');
        axios.post('http://localhost:4000/api/createList', payload, {headers: {'Authorization': 'Bearer ' + jwt}})
          .then((response) => {
            if(response.status === 200){
                console.log("List successfull created");
                localStorage.setItem('jwt', response.data.token)
                // this.props.history.push('/')
            }
            })
            .catch((error) => {
              if(error.status === 401) {
              }
              console.log(error);
            });
      }

  render() {
    const { selectedItems} = this.state;
    const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));
    

    return (
      <div className="w-75 m-auto p-5 border">
        <Form onSubmit={this.handleSubmit}>
          <div className="mb-5">
            <div >
              ARTICLE CATEGORY
              <span className="float-right text-danger">
                <small>All fields are mandatory</small>
              </span>  
            </div>
            <Divider />

            {/* CATEGORY */}
            <div className="w-50 d-flex mb-3">
              <span className="w-50">Category</span>
              <Select
                className="w-50"
                placeholder="Please select"
                value={selectedItems}
                onChange={this.handleChange}
                style={{ width: '50%' }}
              >
                {filteredOptions.map(item => (
                  <Select.Option key={item} value={item}>
                    {item}
                  </Select.Option>
                ))}
              </Select>
            </div>
          </div>
          
          <div>
            <div>
              LIST DETAILS
            </div>
            <Divider />
            {/* TITLE */}
            <div className="w-50 d-flex mb-3">
              <span className="w-50">Title</span>
              <div className="w-50 ">
              <Input  placeholder=""/>
              </div>
            </div>
          </div>
          
          

          <Form.Item className="text-right">
            <Button className="mx-3" type="primary" htmlType="submit" >Upload list</Button>
          </Form.Item>
        </Form>
      </div>
      
    );
  }
}
export default connect ('isLogged', actions) (CreateList);



// import React, { Component } from 'react';
// import { withRouter} from 'react-router-dom';
// import axios from 'axios';
// import { Form, Select, Button } from 'antd';
// //import PicturesWall from './FileUpload';



// class CreateList extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//         category: ''
//     }
//   }

//   handleChange(value) {
//     this.setState({
//       category: value
//     });
//   }
  

//   handleSubmit(event) {
//     event.preventDefault();

//     var payload={
//       category: this.state.category
// 			// condition: this.state.condition,
// 			// type: this.state.type,
// 			// title : this.state.title,
// 			// description: this.state.description,
// 			// price: this.state.price,
// 			// image: this.state.image,
// 			// city: this.state.city,
// 			// name: this.state.name,
// 			// telephone: this.state.telephone,
//     }
//     console.log(payload);

//     axios.post('http://localhost:4000/api/createList', payload)
//     .then((response) => {
//       if(response.status === 200){
//           console.log("Register successfull");
//           localStorage.setItem('jwt', response.data.token)
//           this.props.history.push('/')
//       }
//       })
//       .catch(function (error) {
//         if(error.status === 401) {
//             console.log('E-Mail exists');
//         }
//         console.log(error);
//       });
//     }

  

//   render() {
//     //const { Option } = Select;
//     // const { TextArea } = Input;
//     //const { getFieldDecorator } = this.props.form;

//     let options = [
//       { value: 'Car & Bike', label: 'Category' }
//     ]

//     return (
//       <div>
//         <Select value={this.state.category}
//                         options={options}
//                         placeholder="Select category"
//                         searchable={false}
//                         onChange={this.handleChange.bind(this)}
//                     />
//         <Button onSubmit={this.handleSubmit} className="mx-3" type="primary" htmlType="submit" >Upload list</Button>
//       </div>
//       // <Form onSubmit={this.handleSubmit} className="w-75 m-auto mt-5 py-5 px-5 border">
//       //     {/* <div>
//       //       ARTICLE CATEGORY
//       //       <span className="float-right text-danger">
//       //       <small>All fields are mandatory</small>
//       //       </span>  
//       //     </div>
//       //     <Divider />
//       //     <div className="pb-5">
//       //       <div className="d-flex w-50 mb-3">
//       //           <span className="w-50">Category</span>
//       //           <div className="w-50">
//       //             <Form.Item> */}
//       //               {/* <Select value={this.state.category}
//       //                   options={options}
//       //                   placeholder="Select category"
//       //                   searchable={false}
//       //                   onChange={this.handleChange.bind(this)}
//       //               /> */}
                      
//       //               {/* {getFieldDecorator('category', {
//       //                     rules: [
//       //                         { 
//       //                         required: true, 
//       //                         message: 'Please input category' 
//       //                         }
//       //                     ],
//       //                 })(
//       //                   <Select  
//       //                       placeholder="Please select" 
//       //                       onChange={this.handleChange.bind(this.value, 'category')}>
//       //                       <Option value="carAndBike">Car & Bike</Option>
//       //                       <Option value="realState">Real State</Option>
//       //                       <Option value="modeAndBeauty">Mode & Beauty</Option>
//       //                       <Option value="electronics">Electronics</Option>
//       //                       <Option value="books">Books</Option>
//       //                       <Option value="services">Services</Option>
//       //                   </Select>
//       //               )} */}
//       //             </Form.Item>
//       //           </div>
//       //       </div>
//       //       {/* <div className="d-flex w-50">
//       //           <span className="w-50">Condition</span>
//       //           <div className="w-50 ">
//       //               <Select name="condition"
//       //               defaultValue="Please select" 
//       //               onChange={this.handleChange.bind(this.name)}>
//       //                   <Option value="new">New</Option>
//       //                   <Option value="secondHand">SecondHand</Option>
//       //               </Select>
//       //           </div>
//       //       </div> */}
//       //     </div>
          
//       //     {/* <div className="my-5">
//       //       <div >
//       //           LISTING DETAILS
//       //       </div>
//       //       <Divider />
//       //       <div className="d-flex w-100 mb-3">
//       //           <span className="w-25">Type</span>
//       //           <div className="w-75 ">
//       //               <Radio>I am offering</Radio>
//       //               <Radio>I am looking for</Radio>   
//       //           </div>
//       //       </div>
//       //       <div className="d-flex w-50 mb-3">
//       //           <span className="w-50">Title</span>
//       //           <div className="w-50 ">
//       //               <Input  placeholder=""/>
//       //           </div>
//       //       </div>
//       //       <div className="d-flex w-50 mb-3">
//       //           <span className="w-50">Description</span>
//       //           <div className="w-50 ">
//       //               <TextArea rows={4}/>
//       //           </div>
//       //       </div>
//       //       <div className="d-flex w-50 mb-3">
//       //           <span className="w-50">Price</span>
//       //           <div className="w-50 ">
//       //               <Input placeholder="" />
//       //           </div>
//       //       </div>
//       //       <div className="d-flex mb-3">
//       //           <span className="w-25">Image</span>
//       //           <div className="w-75 ">
//       //               <PicturesWall className="d-flex"/>
//       //           </div>
//       //       </div>
//       //     </div>
          

//       //     <div>
//       //       LOCATION AND PROVIDER DETAILS
//       //     </div>
//       //     <Divider />
//       //     <div className="d-flex w-50 mb-3">
//       //       <span className="w-50">city</span>
//       //       <div className="w-50 ">
//       //           <Select  defaultValue="Please select"  onChange={this.handleChange}>
//       //               <Option value="berlin">Berlin</Option>
//       //               <Option value="hamburg">Hamburg</Option>
//       //               <Option value="munich">Munich</Option>
//       //           </Select>
//       //       </div>
//       //     </div>
//       //     <div className="d-flex w-50 mb-3">
//       //         <span className="w-50">Name</span>
//       //         <div className="w-50 ">
//       //           <Input  placeholder=""/>
//       //         </div>
//       //     </div>
//       //     <div className="d-flex w-50 mb-3">
//       //         <span className="w-50">Telephone</span>
//       //         <div className="w-50 ">
//       //           <Input  placeholder="" />
//       //         </div>
              
//       //     </div>
//       //     <Divider /> */}
//       //     <Form.Item className="text-right">
//       //       <Button className="mx-3" type="primary" htmlType="submit" >Upload list</Button>
//       //       <Button >Cancel</Button>
//       //     </Form.Item>
//       // </Form>
//     )
//   }
// }
// const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(CreateList);
// export default withRouter (WrappedNormalLoginForm);


