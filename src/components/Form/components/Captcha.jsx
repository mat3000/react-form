import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { asField } from '../Field';

class Captcha extends Component {
  constructor(props) {
    super(props);
    this.recaptchaRef = React.createRef();
  }

  componentDidMount() {
    // const { fieldState, fieldApi, ...props } = this.props;
    // const { test } = props;
    // test =
    // console.log(this.recaptchaRef.current);
    // this.recaptchaRef.current.execute();
    // setTimeout(() => {
    //   console.log(this.recaptchaRef.current.getValue());
    // }, 2000);
  }

  onSubmit() {
    console.log('onSubmit!!!!');
    this.recaptchaRef.current.execute();
  }

  render() {
    // const Input = ({ state, api, ...props }) => {
    const { state, api, ...props } = this.props;
    // const { setValue, setTouched, validator } = api;
    // const { value } = state;
    // const { name, disabled, onChange, ...etc } = props;

    // this.recaptchaRef.current.execute();

    console.log(this.props);

    return (
      <ReCAPTCHA
        ref={this.recaptchaRef}
        size="invisible"
        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
        onChange={() => {
          console.log('onChange', this.recaptchaRef.current.getValue());
          // fieldApi.setValue(this.recaptchaRef.current.getValue());
        }}
        {...props}
      />
    );
  }
}

export default asField(Captcha);
