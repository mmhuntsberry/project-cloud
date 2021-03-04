import React, { useState, useEffect } from "react";
import { InlineLoading, TextInput } from "carbon-components-react";
import { isEmail } from "validator";

export const EmailInput = ({
  currentState,
  handleChange,
  handleBlur,
  value,
  testid
}) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { email } = currentState.context;

  useEffect(() => {
    if (isEmail(email)) {
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
      }, 500);
    }
  }, [loading]);

  const renderStatus = () => {
    if (loading) {
      return <InlineLoading className="inline-loading" />;
    }
    if (!loading && success) {
      return (
        <InlineLoading
          data-testid="email-inline-loading-success"
          className="inline-loading"
          status="finished"
        />
      );
    }
    if (!loading) {
      return null;
    }
  };

  return (
    <div className="form__input-container u-margin-b-05">
      <TextInput
        data-testid={testid}
        className="text-input"
        id="register-email"
        invalidText="Please enter a valid email address."
        labelText="Email"
        placeholder="Enter email"
        value={value}
        onChange={e => {
          setSuccess(false);
          handleChange(e);
        }}
        size="xl"
        onBlur={e => {
          handleBlur(e);
          isEmail(value) && setLoading(true);
        }}
        invalid={currentState.matches({ emailErr: "badFormat" }) ? true : false}
      ></TextInput>
      {renderStatus()}
    </div>
  );
};
