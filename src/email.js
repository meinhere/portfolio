import emailjs from "@emailjs/browser";

const sendCustomEmail = (details) => {
  let params = {
    from_name: details.from_name,
    from_email: details.from_email,
    message: details.message
  }

  emailjs.init(import.meta.env.VITE_PUBLIC_KEY);
  const res = emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, params);
  return res;
};

export { sendCustomEmail };