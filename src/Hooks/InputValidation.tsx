const emailRegex: any = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegex: any = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;

export function Validation(value: any) {
  let errors: any = {};
  if (!value?.emailValue) {
    errors.email = 'Email address is required!';
  }
  if (value?.emailValue && emailRegex.test(value?.emailValue) === false) {
    errors.email = 'Email address is invalid!';
  }
  if (value?.userName?.length < 4) {
    errors.userName = 'Please enter minimum 4 digit username';
  }
  if (value?.phoneValue?.length < 10) {
    errors.phoneValue = 'Please enter valid mobile number';
  }
  if (phoneRegex.test(value?.phoneValue) === false) {
    errors.phoneValue = 'Phone number is invalid!';
  }
  if (!value?.passwordValue) {
    errors.password = 'Password is required!';
  }
  if (value?.passwordValue?.length < 6) {
    errors.password = 'Please enter minimum 6 digit password';
  }
  if (!value?.confirmPasswordValue) {
    errors.confirmPassword = 'Confirm password is required!';
  }
  if (
    value?.confirmPasswordValue &&
    value?.passwordValue != value?.confirmPasswordValue
  ) {
    errors.confirmPassword = 'Please enter same as password field.';
  }
  if (!value?.nameValue) {
    errors.name = 'Please enter your name!';
  }
  if (value?.nameValue && value?.nameValue.length < 3) {
    errors.name = 'Please enter the minimum 3 character!';
  }
  if (!value?.surnameValue) {
    errors.surname = 'Please enter your surname!';
  }
  if (value?.surnameValue && value?.surnameValue.length < 3) {
    errors.surname = 'Please enter the minimum 3 character!';
  }
  if (!value?.descriptionValue) {
    errors.description = 'Please enter the questions ?';
  }
  if (!value?.otpValue) {
    errors.otp = 'Please enter 6 digit OTP';
  }
  return errors;
}
