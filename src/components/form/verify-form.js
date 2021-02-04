import { createElement } from "../../utils/createElement";

function createOTPInputElement() {
  const input = createElement("input", {
    className: "input",
    placeholder: "*",
    type: "password",
    maxLength: 1,
  });
  return input;
}

export function createVerifyForm() {
  const form = document.createElement("form");
  form.className = "form";

  const title = document.createElement("h2");
  title.innerText = "We have sent an OTP to your Mobile";

  const infoText = document.createElement("p");
  infoText.innerText =
    "Please check your mobile number 071*****12 continue to reset your password";

  const inputDigit1 = createOTPInputElement();
  const inputDigit2 = createOTPInputElement();
  const inputDigit3 = createOTPInputElement();
  const inputDigit4 = createOTPInputElement();
  const passwordContainer = createElement("div", {
    className: "form_otp",
    children: [inputDigit1, inputDigit2, inputDigit3, inputDigit4],
  });

  const button = document.createElement("button");
  button.innerText = "Next";
  button.className = "btn-filled";

  const hint = document.createElement("p");
  hint.innerText = "Didn't Receive?";
  hint.className = "form_hint";

  const resendLink = document.createElement("a");
  resendLink.innerText = " Click here";
  resendLink.href = "#";

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const secretPassword = "3217";
    const password = `${inputDigit1.value}${inputDigit2.value}${inputDigit3.value}${inputDigit4.value}`;

    if (password === secretPassword) {
      alert("The password is correct!");
    } else {
      alert("How can you be so wrong, you dummy?");
    }
  });

  hint.append(resendLink);

  form.append(title, infoText, passwordContainer, button, hint);

  return form;
}
