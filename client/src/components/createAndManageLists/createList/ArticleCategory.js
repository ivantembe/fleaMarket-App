import React, { Component } from 'react'
import { Field,  } from 'formik'
import { Divider } from 'antd'


const category = ['Select category','Car & Bike', 'Real State', 'Mode & Beauty', 'Electronics']
const condition = ['Select condition', 'New', 'Second Hand']

class ArticleCategory extends Component {
    render() {
        return (
            <div>
                <div>
                    ARTICLE CATEGORY
                    <span className="float-right text-danger">
                    </span>  
                </div>
                <Divider />

                <div className="pb-5">
                    <div className="d-flex w-50 mb-3">
                    <span className="w-50">Category</span>
                    <Field className="w-50" 
                        component="select" 
                        name="category">
                            {category.map((item) => 
                            <option key={item}>{item}</option>)
                        }
                    </Field>
                    </div>
                    <div className="d-flex w-50 mb-3">
                    <span className="w-50">Condition</span>
                    <Field className="w-50" 
                        component="select" 
                        name="condition" >
                        {condition.map((item) => 
                            <option key={item}>{item}</option>)
                            }
                    </Field>
                    </div>
                </div>
            </div>  
        )
    }
}
export default  ArticleCategory
