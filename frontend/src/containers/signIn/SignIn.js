import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({});

const SignIn = () => {
  return (
    <Formik
      initialValues={{ dialcode: "in", phone: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {}}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue,
        setFieldError,
        setFieldTouched,
      }) => <div className="">Hi</div>}
    </Formik>
  );
};

export default SignIn;
