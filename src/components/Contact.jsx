import React, { Component } from "react";
import s from "styled-components";

import SendIcon from "react-icons/lib/fa/paper-plane";
import Check from "react-icons/lib/md/check";

const Container = s.section`
  font-family: var(--font-montserrat);
  margin-bottom: 100px;

  h2 {
    padding: 20px;
    color: var(--violet);  
    font-size: 2rem;
  }
  `;

const FormWrapper = s.div`
  position: relative;
  background: linear-gradient(180deg, #7B4FDB 0%, #5103FF 100%);
  box-shadow: -2px 2px 6px rgba(0, 0, 0, 0.18);
  border-radius: 3px;
  min-height: 600px; //delete this
  max-width: 600px;
  margin: 0 auto;
  padding: 35px 45px;
  `;

const Form = s.form`
  color: white;
  p {
    font-size: 1.25rem;
    padding-bottom: 30px;
  }
  label {
    cursor: text;
    font-size: 1.625rem;
    width: 100%;
    display: block;
    transition: 0.3s all cubic-bezier(.165,.84,.44,1);
    &.label-input{
      transform: translateY(1rem)
      // margin-bottom: -1rem;
    }
    &.label-move {
      transform: translateY(-1rem);
      padding-top: 1rem;
      // margin-bottom: 1rem;
      font-size: .9rem;
    }
  }
  input {
    caret-color: white;
    color: white;
    font-family: var(--font-montserrat);
    font-size: 1.625rem;
    appearance: none;
    border: none;
    border-bottom: 2px solid white;
    outline: none;
    background-color: transparent;
    margin-bottom: 40px;
    display: block;
    width: 100%;
    padding: 0 12px;
    box-shadow: none;
    border-radius: 2px;
  }
  
  textarea {
    color: white;
    font-family: var(--font-montserrat);
    font-size: 1.425rem;
    appearance: none;
    border: 2px solid white;
    border-radius: 2px;
    background-color: transparent;
    width: 100%;
    margin-bottom: 50px;
  }
  `;

const SendButton = s.button`
    appearance: none;
    background-color: var(--violet-light);
    border: none;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
    position: absolute;
    bottom: -50px;
    left: calc(50% - 50px);
    outline : none;
    transition: 0.5s all ease-out;
    &.sent {
      background-color: #5fff9b;
    }
    &:hover {
      box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.13), 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
    }
    &:active {
      background-color: #5fff9b;
      box-shadow: 0 2px 3px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
    }
  `;

class Contact extends Component {
  state = {
    name: "",
    email: "",
    messageContent: "",
    formSent: null
  };

  handleNameChange = e => {
    const name = e.target.value;
    this.setState({ name });
  };

  handleEmailChange = e => {
    const email = e.target.value;
    this.setState({ email });
  };

  handleMessageChange = e => {
    const messageContent = e.target.value;
    this.setState({ messageContent });
  };

  handleSubmit = submitEvent => {
    submitEvent.preventDefault();
    const form = document.getElementById("contact-form");
    const { name, email, messageContent } = this.state;
    const body = JSON.stringify({ name, email, messageContent });

    fetch("/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body
    })
      .then(() =>
        this.setState({
          name: "",
          email: "",
          messageContent: "",
          formSent: "success"
        })
      )
      .catch(error => {
        console.error(error);
        this.setState({ formSent: "error" });
      });
  };

  resizeLabel = e => {
    const label = document.querySelector(`label[for=${e.target.id}]`);
    const isFilled = e.target.value !== "";
    const isMoved = label.classList.contains("label-move");

    if (!isMoved) {
      return label.classList.add("label-move");
    }
    if (isMoved && !isFilled) {
      return label.classList.remove("label-move");
    }
  };

  render() {
    let Send =
      this.state.formSent === "sucess" ? (
        <SendButton disabled className="sent" type="submit">
          <Check color="#B04DFF" size={40} />
        </SendButton>
      ) : (
        <SendButton disabled style={{ backgroundColor: "red" }} type="submit">
          :(
        </SendButton>
      );

    this.state.formSent === "error"
      ? (Send = (
          <SendButton type="submit">
            <SendIcon style={{ marginLeft: "-10px" }} color="red" size={40} />
          </SendButton>
        ))
      : null;
    return (
      <Container id="contact">
        <h2>Let's Talk</h2>
        <FormWrapper>
          <Form onSubmit={this.handleSubmit} id="contact-form">
            <p>
              Write me a message! I’ll probably get back to you on the same day.
            </p>

            <label className="label-input" htmlFor="name">
              your name
            </label>
            <input
              onFocus={this.resizeLabel}
              onBlur={this.resizeLabel}
              id="name"
              required
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            />

            <label className="label-input" htmlFor="email">
              your email
            </label>
            <input
              onFocus={this.resizeLabel}
              onBlur={this.resizeLabel}
              id="email"
              required
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />

            <label htmlFor="message">message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              value={this.state.messageContent}
              onChange={this.handleMessageChange}
              required
              minlength="5"
            />

            {Send}
          </Form>
        </FormWrapper>
      </Container>
    );
  }
}

export default Contact;
