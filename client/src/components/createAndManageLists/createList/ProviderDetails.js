import React, { Component } from 'react'
import { Field,  } from 'formik'
import { Divider } from 'antd'


const city = ['Select city', 'Berlin','Hamburg','Dresden', 'Frankfurt-Oder', 'Munich']

class ProviderDetails extends Component {
    render() {
        return (
            <div>
                <span>
                    CONTACT AND PROVIDER DETAILS
                </span>
                <Divider />

                <div className="pb-5">
                    <div className="d-flex w-50 mb-3">
                        <span className="w-50">City</span>
                        <Field className="w-50" 
                            component="select" 
                            name="city">
                                {city.map((item) => 
                                <option key={item}>{item}</option>)
                            }
                        </Field>
                    </div>
                    <div className="d-flex w-50 mb-3">
                        <span className="w-50">Name</span>
                        <Field className="w-50"
                            type="text"
                            name="providerName" 
                            > 
                        </Field>
                    </div>
                    <div className="d-flex w-50 mb-3">
                        <span className="w-50">Telephone</span>
                        <Field className="w-50"
                            type="number"
                            name="providerTelephone" 
                            > 
                        </Field>
                    </div>
                </div>
            </div>  
        )
    }
}
export default  ProviderDetails