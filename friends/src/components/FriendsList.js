import React from 'react';
import { withFormik, Form, Field } from 'formik';
import { axiosWithAuth } from './axiosWithAuth';

const FriendsList = () => {
  return (
    <Form className="App" style={{ width: 400 }}>
      <div className="form-group">
        <label className="label">Name:</label>
        <Field className="input" name="name" type="text" autoComplete="off" />
      </div>

      <div className="form-group">
        <label className="label">Age:</label>
        <Field className="input" name="age" type="text" autoComplete="off" />
      </div>

      <div className="form-group">
        <label className="label">Email:</label>
        <Field className="input" name="email" type="email" autoComplete="off" />
      </div>

      <button className="btn" type="submit">
        Add A Friend &rarr;
      </button>
    </Form>
  );
};

// formik needs to be called twice
// the first time you give it and object
// mapProps to Values returns the initial state
export default withFormik({
  mapPropsToValues() {
    return {
      name: '',
      age: '',
      email: ''
    };
  },

  // we need to post the values from the form to the server, and set the token
  // to local storage.
  handleSubmit(values, { resetForm }) {
    // console.log(formikBag.props);

    axiosWithAuth()
      .post('/friends', values)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err.response.data);
      });
    // console.log(values);
    resetForm();
  }
})(FriendsList);
