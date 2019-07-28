import React, { Component } from 'react';
import { Divider, Button } from 'antd';

class ManageListing extends Component {
  render() {
    return (
      <div className="w-75 m-auto mt-5 py-5 px-5 border">
        <div className="d-flex ">
            <div className="w-25">
                LISTING ID
            </div>
            <div className="w-50">
                LISTING TITLE
            </div>
            <div className="w-25">
                ACTION
            </div>
          </div>
          < Divider />
          <div className="d-flex mb-2">
              <div className="w-25">001</div>
              <div className="w-50">MACBOOK PRO MID 2017, NEW SILVER</div>
              <div className="w-25">
                <Button >Edit</Button>
                <Button className="mx-3" type="primary">Delete</Button>
              </div>
          </div>
          <div className="d-flex ">
              <div className="w-25">001</div>
              <div className="w-50">MACBOOK PRO MID 2017, NEW SILVER</div>
              <div className="w-25">
                <Button >Edit</Button>
                <Button className="mx-3" type="primary">Delete</Button>
              </div>
          </div>
      </div>
    )
  }
}
export default ManageListing;
