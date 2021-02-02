export function createVerifyForm() {
  const form = document.createElement("form");
  form.className = "form";

  const digits = document.createElement("div");
  digits.className = "digits";

  const title = document.createElement("h2");
  title.innerText = "We have sent an OTP to your Mobile";

  const infoText = document.createElement("p");
  infoText.innerText =
    "Please check your mobile number 071*****12 continue to reset your password";

  const inputDigit1 = document.createElement("input");
  inputDigit1.type = "password";
  inputDigit1.placeholder = "*";

  const inputDigit2 = document.createElement("input");
  inputDigit2.type = "password";
  inputDigit2.placeholder = "*";

  const inputDigit3 = document.createElement("input");
  inputDigit3.type = "password";
  inputDigit3.placeholder = "*";

  const inputDigit4 = document.createElement("input");
  inputDigit4.type = "password";
  inputDigit4.placeholder = "*";

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

  digits.append(inputDigit1, inputDigit2, inputDigit3, inputDigit4);

  form.append(title, infoText, digits, button, hint);

  return form;
}
