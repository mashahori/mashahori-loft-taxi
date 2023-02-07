import { Form, Field } from "react-final-form";
import { TextField, Button } from "@mui/material";
import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  validateEmail,
  validatePassword,
  validateName,
} from "../../utils/validate";

export const Signup = (props) => {
  const onSubmit = (email, password) => {};

  return (
    <>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <StyledForm onSubmit={handleSubmit}>
            <h2>Sign up</h2>

            <Field name="email" validate={validateEmail}>
              {({ input, meta: { error, touched } }) => (
                <TextField
                  {...input}
                  id="standard-basic"
                  label="Email*"
                  variant="standard"
                  placeholder="mail@mail.ru"
                  error={!!error && !!touched}
                  helperText={touched ? error : ""}
                />
              )}
            </Field>

            <Field name="name" validate={validateName}>
              {({ input, meta: { error, touched } }) => (
                <TextField
                  {...input}
                  id="standard-basic"
                  label="Name*"
                  variant="standard"
                  placeholder="mail@mail.ru"
                  error={!!error && !!touched}
                  helperText={touched ? error : ""}
                />
              )}
            </Field>

            <Field name="password" validate={validatePassword}>
              {({ input, meta: { error, touched } }) => (
                <TextField
                  {...input}
                  type="password"
                  id="standard-basic"
                  label="Password*"
                  variant="standard"
                  placeholder="*************"
                  error={!!error && !!touched}
                  helperText={touched ? error : ""}
                />
              )}
            </Field>

            <Button variant="contained">Sign up</Button>
          </StyledForm>
        )}
      />
      <Link to="/login">Log in</Link>
    </>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 30px;
`;
