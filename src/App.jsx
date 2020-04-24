import React, { useState, useEffect } from "react";
import {Switch, Route} from 'react-router-dom'
import * as yup from 'yup'
import axios from 'axios'
import Home from './components/Home'
import Pizza from './components/Pizza'

const url = 'https://reqres.in/api/users'

const initalFormValues = {
  name: '',
  number: '',
  address: '',
  size: '',
  toppings: {
    pepperoni: false,
    ham: false,
    pineapple: false,
    bacon: false,
  },
  specialInstructions: '',
  quantity: 0,
  totalCost: 0,
}

const initalFormErrors = {
  name: ''
}

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'a name must include at least 2 characters')
    .required('a name is required'),
  // number: yup
  //   .number()
  //   .min(10, "must be a valid phone number")
  //   .required('phone number is required'),
  // address: yup
  //   .string()
  //   .required('address is required'),
  // size: yup
  //   .string()
  //   .required('please choose a size'),
  // toppings: yup
    
  //   .boolean(),
  // specialInstructions: yup
  //   .string()
  //   .max(1000, 'pls narrow down your special request'),
  // quantity: yup
  //   .number()
  //   .required('pls select your quantity')
})

const App = () => {
  const [formValues, setFormValues] = useState(initalFormValues)
  const [formErrors, setFormErrors] = useState(initalFormErrors)
  const [submitDisabled, setSubmitDisabled] = useState(true)

  // const [order, setOrder] = useState({})


  const postOrder = currentOrder => {
    axios.post(url, currentOrder)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        debugger
      })
  }

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => {
        setSubmitDisabled(!valid)
      })
  }, [formValues])

  const submitHandler = evt => {
    evt.preventDefault()

    const newOrder = {
      name: formValues.name,
      number: formValues.number,
      address: formValues.address,
      size: formValues.size,
      toppings: Object.keys(formValues.toppings)
        .filter(topping => formValues.toppings[topping] === true),
      specialInstructions: formValues.specialInstructions,
      quantity: formValues.quantity,
      totalCost: formValues.totalCost,
    }
    postOrder(newOrder)
    setFormValues(initalFormErrors)
  }

  const changeHandler = evt => {
    const name = evt.target.name
    const value = evt.target.value

    setFormValues({
      ...formValues, 
      [name]:value
    })
  }

  const checkBoxChangeHandler = evt => {
    const name = evt.target.name
    const isChecked = evt.target.checked

    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: isChecked,
      }
    })  
  }

  return (
    <Switch>
      <Route path='/pizza'>
        <Pizza formValues={formValues}
          toppings={formValues.toppings}
          changeHandler={changeHandler}
          checkBoxChangeHandler={checkBoxChangeHandler}
          submitDisabled={submitDisabled}
          submitHandler={submitHandler}/>
      </Route>
      
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  )
};
export default App;
