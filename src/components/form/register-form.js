// `
//         <form class="form">
//           <h2>Reset Password</h2>
//           <p>Please enter your email to receive a link to create a new password via email</p>
//           <input placeholder="Email" />
//           <input type="submit" class="btn-submit" />
//         </form>
//       `;

export function createRegisterForm() {
  const form = document.createElement("form");
  form.className = "form";

  const button = document.createElement("button");
  button.innerText = "Register";

  button.className = "btn-filled";

  function register() {
    alert("Successfully registered!");
  }

  button.addEventListener("click", register);

  const title = document.createElement("h2");
  title.innerText = "Reset Password";

  const infoText = document.createElement("p");
  infoText.innerText =
    "Please enter your email to receive a link to create a new password via email.";

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "email";

  form.append(title, infoText, input, button);

  return form;
}
