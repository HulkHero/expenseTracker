import React from 'react'
import { Formik, Form, Field } from 'formik';
import { ExpenseSchema } from './ExpenseSchema';
 
const ExpenseForm = ({handleSubmit}) => {
  return (
    <Formik  initialValues={{
      title: '',
      amount: '',
    }}
    validationSchema={ExpenseSchema}
    onSubmit={handleSubmit}>
       {({ errors, touched }) => (
    <Form className="ml-auto mr-auto mt-2 flex-grow-0 text-white w-fit ">
    <label className=' mr-4 text-white text-xl' >title:</label>
    <Field type="text" name="title" className='text-black w-[300px] p-2 ' placeholder='enter title' />
    {errors.title && touched.title ? <h6 className='text-red-500'>{errors.title}</h6> : <div className='min-h-[24px]'></div>}
    <br />
    <label className='mr-4  text-white text-xl' >cost:</label>
    <Field as="input" type="number" name="amount" className=' w-[300px] my-[0px] text-black p-2 ' placeholder='enter expense or income' />
    {errors.amount && touched.amount ? <h6 className='text-red-500'>{errors.amount}</h6> : <div className='min-h-[24px]'></div>}
    <br />
    <button type="submit" className=' mx-auto min-w-full  mb-4 bg-yellow-400 hover:bg-yellow-500 rounded-lg px-4 py-2' >Add</button>
</Form>
       )}
</Formik>
   
  )
}

export default ExpenseForm