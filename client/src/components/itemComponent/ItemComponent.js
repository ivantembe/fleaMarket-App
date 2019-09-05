import React, { Component } from 'react'
import { Divider, Button } from 'antd';

class ItemComponent extends Component {
  render() {
    return (
        <div className="w-75 m-auto d-flex">
            <div className="w-75 mr-2 p-4 border">
                <h5>
                    Title Description
                </h5>
                <h5 className="text-danger">
                    Price 40 EUR
                </h5>
                <div className="my-3 bg-success">
                    IMAGE
                </div>
                <div className="my-5">
                    <h5>Details</h5>
                    < Divider />
                    <div className="d-flex">
                        <span className="w-50">Category</span>
                        <div className="w-50">
                            Electronics 
                        </div>
                    </div>
                    <div className="d-flex">
                        <span className="w-50">Condition</span>
                        <div className="w-50">
                            2 Hand
                        </div>
                    </div>
                    <div className="d-flex">
                        <span className="w-50">City</span>
                        <div className="w-50">
                            Berlin
                        </div>
                    </div>
                </div>
                <div>
                    <h5>Description</h5>
                    < Divider /> 
                    <p className="w-75">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard 
                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    </p>
                </div>
            </div>

            <div className="w-25 text-center">
                <div className="border py-5">
                    <h5>Povider Name</h5>
                    <p>Tel: +4915214456</p>
                    < Button type="primary">
                        Email Provider
                    </Button>
                </div> 
            </div>
        </div>
    )
  }
}
export default ItemComponent;
