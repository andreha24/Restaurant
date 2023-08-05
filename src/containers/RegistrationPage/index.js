import React from "react";
import { Form, Field } from "react-final-form";
import InputMask from "react-input-mask";
import { useHistory } from "react-router-dom";

import Aside from "../../components/Aside";

import "./index.css";

function RegistrationPage() {
  const history = useHistory();

  const symbols = ["!", "@", "#", "$", "%", "&", "*", "?"];

  const minLength = (value) => (value.length > 6 ? undefined : "Количество символов должна быть больше 6");
  const required = (value) => (value ? undefined : "обязательное к заполнению");
  const hasCapital = (value) => (value !== value.toLowerCase() ? undefined : "Должна быть заглавная буква");
  const hasSymbol = (value) => (symbols.some((elem) => value.includes(elem)) ? undefined : "Должен быть символ");
  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !(emailRegex.test(value)) ? "Некорректный email" : undefined;
  };
  const composeValidators = (...validators) => (
    (value) => validators.reduce((error, validator) => error || validator(value), undefined)
  );

  const RegistrationClick = (values) => {
    localStorage.setItem("email", values.email);
    localStorage.setItem("password", values.password);
    history.push("/login-page");
  };

  return (
    <>
      <Aside />
      <div className="login-form-wrapper">
        <Form
          onSubmit={RegistrationClick}
          render={({ handleSubmit }) => (

            <form onSubmit={handleSubmit} className="login-form">
              <div className="login-form-inputs">
                <Field name="email" validate={composeValidators(required, validateEmail)}>
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

                <Field name="password" validate={composeValidators(required, minLength, hasCapital, hasSymbol)}>
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
              <button type="submit" className="log-btn">Зарегистрироваться</button>
            </form>

          )}
        />
      </div>
    </>

  );
}

export default RegistrationPage;
