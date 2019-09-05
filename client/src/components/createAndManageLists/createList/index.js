import React from 'react';
import axios from 'axios';
import { withRouter} from 'react-router-dom';
import { withFormik, Form } from 'formik';
import { Button, Divider } from 'antd';
import { connect } from 'unistore/react'
import actions from '../../actions/actions'
import ArticleCategory from './ArticleCategory';
import ListDetails from './ListDetails';
import ProviderDetails from './ProviderDetails';



const CreateList = ({
  values,
  handelChange,
}) => (
  <Form className="w-75 m-auto mt-5 py-5 px-5 border">
    < ArticleCategory />
    < ListDetails />
    < ProviderDetails />
    < Divider />
    <Button className="mx-3 text-uppercase float-right" type="primary" htmlType="submit" >create list</Button>
  </Form>
)

 const FormikCreateList  =  withFormik ({
  mapPropsToValues({ category, condition, name, offeringType, listTitle, listPrice, listDescription, city, providerName, providerTelephone}) {
    return {
      category: category || '',
      condition:  condition || '',
      offeringType: offeringType || '',
      listTitle: listTitle || '',
      listPrice: listPrice || '',
      listDescription: listDescription || '',
      city: city || '',
      providerName: providerName || '',
      providerTelephone: providerTelephone || ''
    }
  },
  handleSubmit(values) {
    var payload = {
      category: values.category,
      condition: values.condition,
      offeringType: values.offeringType,
      listTitle: values.listTitle,
      listPrice: values.listPrice,
      listDescription: values.listDescription,
      city: values.city,
      providerName: values.providerName,
      providerTelephone: values.providerTelephone
    }
    console.log(payload)
    const jwt = localStorage.getItem('jwt');
        axios.post('http://localhost:4000/api/list', payload, {headers: {'Authorization': 'Bearer ' + jwt}})
          .then((response) => {
            if(response.status === 200){
                console.log("List successfull created");
                localStorage.setItem('jwt', response.data.token)
                this.props.history.push('/')
            }
            })
            .catch((error) => {
              if(error.status === 401) {
              }
              console.log(error);
            });
  }
}) (CreateList)

export default withRouter (connect ('isLogged', actions) (FormikCreateList));
