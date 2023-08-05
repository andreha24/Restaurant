import React from "react";
import { Field, Form } from "react-final-form";
import InputMask from "react-input-mask";
import { Link, useHistory } from "react-router-dom";

import Aside from "../../components/Aside";

function LoginPage() {
  const history = useHistory();

  const required = (value) => (value ? undefined : "обязательное к заполнению");

  const welcome = (values) => {
    const userEmail = localStorage.getItem("email");
    const userPassword = localStorage.getItem("password");

    if (values.email === userEmail && values.password === userPassword) {
      history.push("/");
    }
  };

  return (
    <>
      <Aside />
      <div className="login-form-wrapper">
        <span style={{
          position: "absolute",
          top: "10px",
        }}
        >
          Если у вас нет аккаунта то вам нужно
          {" "}
          <Link to="/registration-page">зарегистрироваться</Link>
        </span>
        <Form
          onSubmit={welcome}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className="login-form">
              <div className="login-form-inputs">
                <Field name="email" validate={required}>
                  {({ input, meta }) => (
                    <div className="login-field-wrapper">
                      <InputMask
                        {...input}
                        name="email"
                        placeholder="Email"
                        className="login-form-input"
                        autoComplete="off"
                        mask=""
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>

                <Field name="password" validate={required}>
                  {({ input, meta }) => (
                    <div className="login-field-wrapper">
                      <input
                        {...input}
                        name="password"
                        placeholder="password"
                        className="login-form-input"
                        type="password"
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
              </div>
              <button type="submit" className="log-btn">Войти</button>
            </form>

          )}
        />
      </div>
    </>
  );
}

export default LoginPage;
