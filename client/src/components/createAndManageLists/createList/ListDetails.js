import React, { Component } from 'react'
import { Field,  } from 'formik'
import { Divider } from 'antd'
//import PicturesWall from './FileUpload'


const offeringType = ['Select type','I am offering','I am looking for']

class ListDetails extends Component {
    render() {
        return (
            <div>
                <span>
                    LIST DETAILS
                </span>
                <Divider />

                <div className="pb-5">
                    <div className="d-flex w-50 mb-3">
                        <span className="w-50">Type</span>
                        <Field className="w-50" 
                            component="select" 
                            name="offeringType">
                                {offeringType.map((item) => 
                                <option key={item}>{item}</option>)
                            }
                        </Field>
                    </div>
                    <div className="d-flex w-50 mb-3">
                        <span className="w-50">Title</span>
                        <Field className="w-50"
                            type="text"
                            name="listTitle" 
                            > 
                        </Field>
                    </div>
                    <div className="d-flex w-50 mb-3">
                        <span className="w-50">Description</span>
                        <Field className="w-50"
                            component="textarea"
                            name="listDescription" 
                            > 
                        </Field>
                    </div>
                    <div className="d-flex w-50 mb-3">
                        <span className="w-50">Price</span>
                        <div className="w-50 d-flex">
                            <Field className="w-50"
                                type="number"
                                name="listPrice" 
                                placeholder="0.00"> 
                            </Field>
                            <span className="w-50 ml-2">EUR</span>
                        </div>
                    </div>
                    {/* <div className="d-flex mb-3">
                        <span className="w-25">Image</span>
                        <div className="w-75 ">
                        <PicturesWall className="d-flex"/>
                        </div>
                    </div> */}
                </div>
            </div>  
        )
    }
}
export default  ListDetails