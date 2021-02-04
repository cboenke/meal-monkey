import { createElement } from "../../utils/createElement";

function createInputElement() {
  return createElement("input", {
    className: "input",
    placeholder: "*",
    type: "number",
    min: 0,
    max: 9,
  });
}

export function createVerifyForm() {
  const inputDigit1 = createInputElement();
  const inputDigit2 = createInputElement();
  const inputDigit3 = createInputElement();
  const inputDigit4 = createInputElement();

  const messageElement = createElement("p", {
    className: "message",
  });

  return createElement("form", {
    className: "form",
    children: [
      createElement("h2", {
        innerText: "We have sent an OTP to your Mobile",
      }),
      createElement("p", {
        innerText:
          "Please check your mobile number 071*****12 continue to reset your password",
      }),
      messageElement,
      createElement("div", {
        className: "form_otp",
        children: [inputDigit1, inputDigit2, inputDigit3, inputDigit4],
      }),
      createElement("input", {
        type: "submit",
        value: "Next",
        className: "btn-filled",
      }),
      createElement("p", {
        innerText: "Didn't Receive?",
        className: "form_hint",
        children: [
          createElement("a", {
            innerText: "Click here",
            href: "#",
          }),
        ],
      }),
    ],
    onsubmit: function (event) {
      event.preventDefault();
      const password =
        inputDigit1.value +
        inputDigit2.value +
        inputDigit3.value +
        inputDigit4.value;
      if (password === "3217") {
        messageElement.innerText = "";
      } else {
        messageElement.innerText = "Wrong password!";
      }
    },
  });
}
