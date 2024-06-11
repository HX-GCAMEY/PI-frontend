export const validateSignin = (signinValues: {
  email: string;
  password: string;
}) => {
  let errors = {};
  if (!signinValues.email) {
    errors = {...errors, email: "Email is required"};
  }
  if (!signinValues.password) {
    errors = {...errors, password: "Password is required"};
  }
  if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(signinValues.email)) {
    errors = {...errors, email: "Email is invalid"};
  }
  if (signinValues.password.length < 6) {
    errors = {...errors, password: "Password must be at least 6 characters"};
  }
  if (!/[a-z]/.test(signinValues.password)) {
    errors = {
      ...errors,
      password: "Password must contain at least one lowercase letter",
    };
  }
  if (!/\d/.test(signinValues.password)) {
    errors = {...errors, password: "Password must contain at least one number"};
  }

  return errors;
};

export const validateSignup = (signipValues: {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  phone: string;
  address: string;
}) => {
  let errors = {};
  if (!signipValues.email) {
    errors = {...errors, email: "Eemail is required"};
  }
  if (!signipValues.password) {
    errors = {...errors, password: "Password is required"};
  }
  if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/.test(signipValues.email)) {
    errors = {...errors, email: "Eemail is invalid"};
  }
  if (signipValues.password.length < 6) {
    errors = {...errors, password: "Password must be at least 6 characters"};
  }
  if (!/[a-z]/.test(signipValues.password)) {
    errors = {
      ...errors,
      password: "Password must contain at least one lowercase letter",
    };
  }
  if (!/\d/.test(signipValues.password)) {
    errors = {...errors, password: "Password must contain at least one number"};
  }

  if (!signipValues.first_name) {
    errors = {...errors, first_name: "First name is required"};
  }
  if (!signipValues.last_name) {
    errors = {...errors, last_name: "Last name is required"};
  }
  if (!signipValues.phone) {
    errors = {...errors, phone: "Phone number is required"};
  }
  if (!signipValues.address) {
    errors = {...errors, address: "Address is required"};
  }

  if (!/^\d+$/.test(signipValues.phone)) {
    errors = {...errors, phone: "Phone number must contain only numbers"};
  }

  return errors;
};
