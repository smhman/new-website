export const validate = ({
    email,
    message,
  }: {
    email: string;
    message: string;
  }) => {
    const errors: { email?: string; message?: string } = {};
    if (!email || email.trim() === "") {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address";
    }
    if (!message || message.trim() === "") {
      errors.message = "Message is required";
    }
    return errors;
  };