import React, { Component } from 'react';
import axios from 'axios';
import { Select, Form, Button } from 'antd';

const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];

class SelectWithHiddenSelectedOptions extends Component {
  state = {
    selectedItems: [],
  };

  handleChange = selectedItems => {
    this.setState({ selectedItems });
  };

  handleSubmit = e => {
        e.preventDefault();
    
        var payload={
          category: this.state.selectedItems
        }
        console.log(payload);

        axios.post('http://localhost:4000/api/createList', payload)
          .then((response) => {
            if(response.status === 200){
                console.log("List successfull created");
                localStorage.setItem('jwt', response.data.token)
                this.props.history.push('/')
            }
            })
            .catch(function (error) {
              if(error.status === 401) {
                  console.log('E-Mail exists');
              }
              console.log(error);
            });
      }

  render() {
    const { selectedItems } = this.state;
    const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));
    return (
      <Form onSubmit={this.handleSubmit}>
          <Select
            mode="multiple"
            placeholder="Inserted are removed"
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
          <Form.Item className="text-right">
            <Button className="mx-3" type="primary" htmlType="submit" >Upload list</Button>
          </Form.Item>
      </Form>
      
    );
  }
}
export default SelectWithHiddenSelectedOptions;



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


