import React from "react"
import "./AddBookmark.css"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

const schema = Yup.object().shape({
  name: Yup.string().required("Required"),
  url: Yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Enter correct url!"
    )
    .required("Please enter website"),
  desc: Yup.string().required("Required"),
})

const AddBookmark = () => {
  return (
    <div className="container">
      <h1>New Bookmark</h1>
      <Formik
        initialValues={{
          name: "",
          url: "",
          desc: "",
        }}
        validationSchema={schema}
        onSubmit={values => {
          console.log(values)
        }}
      >
        <Form id="bookmark-form">
          <div className="labels">
            <label htmlFor="name">Name:</label>
            <label htmlFor="url">Url:</label>
            <label htmlFor="desc">Description:</label>
          </div>
          <div className="inputs">
            <Field name="name" type="text" />
            <ErrorMessage component="div" className="error" name="name" />
            <Field name="url" type="text" />
            <ErrorMessage component="div" className="error" name="url" />
            <Field as="textarea" name="desc" type="text" />
            <ErrorMessage component="div" className="error" name="desc" />
          </div>
        </Form>
      </Formik>
      <button
        type="submit"
        form="bookmark-form"
        className="add-bookmark-button"
      >
        Add Bookmark
      </button>
    </div>
  )
}

export default AddBookmark
