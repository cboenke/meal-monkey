import { createElement } from "../../utils/createElement";

function createOTPInputElement() {
  const input = createElement("input", {
    className: "input",
    placeholder: "*",
    type: "password",
  });
  return input;
}

function createPasswordContainerElement() {
  const inputDigit1 = createOTPInputElement();
  const inputDigit2 = createOTPInputElement();
  const inputDigit3 = createOTPInputElement();
  const inputDigit4 = createOTPInputElement();
  const passwordContainer = createElement("div", {
    className: "form_otp",
    children: [inputDigit1, inputDigit2, inputDigit3, inputDigit4],
  });

  return passwordContainer;
}

export function createVerifyForm() {
  const form = document.createElement("form");
  form.className = "form";

  // const digits = document.createElement("div");
  // digits.className = "digits";

  const title = document.createElement("h2");
  title.innerText = "We have sent an OTP to your Mobile";

  const infoText = document.createElement("p");
  infoText.innerText =
    "Please check your mobile number 071*****12 continue to reset your password";

  const passwordContainer = createPasswordContainerElement();

  const button = document.createElement("button");
  button.innerText = "Next";
  button.className = "btn-filled";

  const hint = document.createElement("p");
  hint.innerText = "Didn't Receive?";
  hint.className = "form_hint";

  const resendLink = document.createElement("a");
  resendLink.innerText = " Click here";
  resendLink.href = "#";

  hint.append(resendLink);

  // digits.append(inputDigit1, inputDigit2, inputDigit3, inputDigit4);

  form.append(title, infoText, passwordContainer, button, hint);

  return form;
}
