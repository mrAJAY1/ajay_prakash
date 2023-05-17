import { useEffect, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

import { Phone } from "../icons/AllSvg";

const serviceID = "service_x1n4t08";
const templateID = "template_fo1xxks";

const Box = styled.div`
  border: solid 3px ${(p) => p.theme.text};
  max-width: 768px;
  margin: 60px auto;
  position: relative;
  @media (max-width: 920px) {
    margin: 20px auto;
    width: 95%;
    max-height: 90vh;
  }
  @media (min-width: 920px) {
    margin: 20px auto;
    width: 95%;
    max-height: 90vh;
  }
  backdrop-filter: blur(10px);
`;
const Title = styled.h1`
  margin-left: 50%;
  transform: translate(-50%);
  color: ${(p) => p.theme.text};
  font-size: calc(1em + 1vw);
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
`;
const Underline = styled.div`
  border-bottom: solid 2px ${(p) => p.theme.text};
  margin: 0 auto;
  width: 80px;
  @media (max-width: 480px) {
    width: 68px;
  }
  @media screen and (max-width: 420px) {
    width: 53px;
  }
`;
const Icon = styled.div`
  margin: 50px auto 0;
  width: 100%;
  svg {
    display: block;
    fill: ${(p) => p.theme.text};
    height: 50px;
    margin: 0 auto;
    width: 50px;
  }
  @media screen and (max-width: 420px) {
    height: 35px;
    width: 35px;
  }
`;

const Form = styled.form`
  padding: 37.5px;
  margin: 50px 0;
  font-family: "Karla", sans-serif;
  input,
  button,
  select,
  textArea {
    color: ${(p) => p.theme.text};
    margin: 0;
    font: inherit;
  }
  button,
  select {
    text-transform: none;
  }
  button {
    overflow: visible;
  }
  input {
    line-height: normal;
  }
  textarea {
    overflow: auto;
  }
  input[type="text"],
  [type="email"],
  select,
  textarea {
    background: none;
    border: none;
    border-bottom: solid 2px ${(props) => props.theme.text};
    color: ${(props) => props.theme.text};
    font-size: 1em;
    font-weight: 400;
    letter-spacing: 1px;
    margin: 0em 0 1.875em 0;
    padding: 0 0 0.875em 0;
    text-transform: uppercase;
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }
  input[type="text"]:focus,
  [type="email"]:focus,
  textarea:focus {
    outline: none;
    padding: 0 0 0.875em 0;
  }
  select {
    background: url("https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-down-32.png")
      no-repeat right;
    outline: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
  ::-webkit-input-placeholder {
    color: ${(props) => props.theme.text};
  }

  :-moz-placeholder {
    color: ${(props) => props.theme.text};
    opacity: 1;
  }

  ::-moz-placeholder {
    color: ${(props) => props.theme.text};
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: ${(props) => props.theme.text};
  }

  select::-ms-expand {
    display: none;
  }
  textarea {
    line-height: 150%;
    height: 100px;
    resize: none;
    width: 100%;
  }
  @media screen and (max-width: 420px) {
    input[type="text"],
    [type="email"],
    select,
    textarea {
      font-size: 0.875em;
    }
  }
`;
const Name = styled.div`
  float: left;
  width: 45%;
`;
const Email = styled.div`
  float: right;
  width: 45%;
`;
const TelePhone = styled.div`
  width: 100%;
`;
const Subject = styled.div`
  width: 100%;
`;
const Message = styled.div`
  float: none;
`;
const Label = styled.label`
  color: #ff0000;
`;
const Submit = styled.div`
  input {
    background: none;
    border: solid 2px ${(props) => props.theme.text};
    color: ${(props) => props.theme.text};
    cursor: pointer;
    display: inline-block;
    font-size: 0.875em;
    font-weight: bold;
    outline: none;
    padding: 20px 35px;
    text-transform: uppercase;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    &:hover {
      background: ${(props) => props.theme.text};
      color: ${(props) => props.theme.body};
    }
    @media (max-width: 480px) {
      padding: 15px 25px;
    }
  }
`;
const StyledToastContainer = styled(ToastContainer)`
  @media (max-width: 768px) {
    width: 40%;
  }
`;
function FormComponent() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    telephone: "",
    message: "",
  });
  const [formErr, setFormErr] = useState({});
  const [submit, setSubmit] = useState(false);
  const form = useRef(null);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };
  const validate = (value) => {
    const error = {};
    const regEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regPhone = /^\d{10}$/;
    const regName = /^[a-zA-Z ]{2,30}$/;
    if (!regEmail.test(value.email)) {
      error.email = "invalid email";
    }
    if (!regName.test(value.name)) {
      error.name = "invalid name";
    }
    if (!regPhone.test(value.telephone)) {
      error.telephone = "invalid mobile number";
    }
    return error;
  };
  const handleSubmit = (e, value) => {
    e.preventDefault();
    setFormErr(validate(value));
    setSubmit(true);
  };

  const sendErrNotification = () => {
    const errKeys = Object.values(formErr);
    errKeys.map((x, index) => {
      return toast.error(x, {
        delay: 1000 * index,
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    });
    setSubmit(false);
  };
  const sendSuccessNotification = () => {
    toast.success("Message sent ✔️", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
    setSubmit(false);
  };
  const sendFailedNotification = () => {
    toast.error("could not send message !!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
    setSubmit(false);
  };
  const sendMail = () => {
    emailjs
      .sendForm(serviceID, templateID, form.current, "A-mLzY_2e54YotUo_")
      .then(
        () => {
          sendSuccessNotification();
        },
        (error) => {
          console.error(error.text);
          sendFailedNotification();
        }
      );
  };
  //   const sendFailedNotification = () => {};

  useEffect(() => {
    if (submit && Object.keys(formErr).length === 0) {
      sendMail();
    } else if (submit && Object.keys(formErr).length > 0) {
      sendErrNotification();
    }
  }, [submit]);
  return (
    <Box>
      <StyledToastContainer />
      <Title>&bull; Keep in Touch &bull;</Title>
      <Underline />
      <Icon>
        <Phone />
      </Icon>
      <Form ref={form} onSubmit={(e) => handleSubmit(e, values)}>
        <Name>
          <Label />
          <input
            style={{
              borderBottom: `2px solid ${formErr.name ? "red" : null}`,
              color: `${formErr.name ? "red" : "inherit"}`,
            }}
            value={values.name}
            onChange={handleChange}
            type="text"
            placeholder="My name is"
            name="name"
            required
          />
        </Name>
        <Email>
          <Label />
          <input
            value={values.email}
            onChange={handleChange}
            type="text"
            placeholder="My email is"
            name="email"
            required
            style={{
              borderBottom: `2px solid ${formErr.email ? "red" : "#000000"}`,
              color: `${formErr.email ? "red" : "inherit"}`,
            }}
          />
        </Email>
        <TelePhone>
          <Label htmlFor="telePhone" />
          <input
            style={{
              borderBottom: `2px solid ${
                formErr.telephone ? "red" : "#000000"
              }`,
              color: `${formErr.telephone ? "red" : "inherit"}`,
            }}
            value={values.telephone}
            onChange={handleChange}
            type="text"
            placeholder="My number is"
            name="telephone"
            required
          />
        </TelePhone>
        <Subject>
          <Label htmlFor="subject" />
          <select
            placeholder="Subject line"
            onChange={handleChange}
            value={values.subject}
            name="subject"
            required
          >
            <option disabled hidden defaultChecked>
              Subject line
            </option>
            <option>I&#39;d like to start a project</option>
            <option>I&#39;d like to ask a question</option>
            <option>I&#39;d like to make a proposal</option>
          </select>
        </Subject>
        <Message>
          <Label htmlFor="subject" />
          <textarea
            name="message"
            placeholder="I'd like to chat about"
            cols="30"
            rows="5"
            onChange={handleChange}
            required
          />
        </Message>
        <Submit>
          <input type="submit" value="Send Message" />
        </Submit>
      </Form>
    </Box>
  );
}

export default FormComponent;
