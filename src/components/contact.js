import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';


const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const initialValues = {
    senderName: '',
    email: '',
    message: '',
  };

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <Container fluid className="vh-100 bkgrd">
      <div className="d-flex w-100 justify-content-center">
        <Form className="w-25 mt-4" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              defaultValue={initialValues.senderName}
              {...register('senderName', { required: true, minLength: 2, maxLength: 80 })}
            />
            {errors.senderName && <Form.Text>Please enter your name</Form.Text>}
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              defaultValue={initialValues.email}
              {...register('email', {
                required: true,
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            {errors.email && <Form.Text>A valid email is required</Form.Text>}
          </Form.Group>

          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control
              defaultValue={initialValues.message}
              {...register('message', { required: true })}
            />
            {errors.message && <Form.Text>Please enter a message</Form.Text>}
          </Form.Group>

          <input type="submit" className="my-1" />
        </Form>
      </div>
    </Container>
  );
};

export default Contact;