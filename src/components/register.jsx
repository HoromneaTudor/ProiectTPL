import { register, login } from "../Registration.js";

export const Register = (prop) => {
  return (
    <div id="content_main">
      <meta charSet="utf-8" />
      <title>Login + Firebase Database</title>
      {/* Cool Google Fonts */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Bowlby+One+SC&display=swap"
        rel="stylesheet"
      />
      {/* Our stylesheet */}
      <link rel="stylesheet" type="text/css" href="css/register.css" />
      <div id="content_container">
        <div id="form_container">
          <div id="form_header_container">
            <h2 id="form_header"> Login + Firebase Database </h2>
          </div>

          <div id="form_content_container">
            <div id="form_content_inner_container">
              <br></br>
              <input type="text" id="last_name" placeholder="Last name" />
              <input type="text" id="first_name" placeholder="First name" />
              <input type="email" id="email" placeholder="Email" />
              <input type="password" id="password" placeholder="Password" />
              <input
                type="password"
                id="confirm_password"
                placeholder="Confirm password"
              />
              <input type="text" id="CNP" placeholder="CNP" />
              <input type="text" id="card_series" placeholder="Card series" />
              <br></br>
              <br></br>

              <div id="button_container">
                <button
                  onClick={() =>
                    login(
                      document.getElementById("email").value,
                      document.getElementById("password").value
                    )
                  }
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    register(
                      document.getElementById("last_name").value,
                      document.getElementById("first_name").value,
                      document.getElementById("email").value,
                      document.getElementById("password").value,
                      document.getElementById("confirm_password").value,
                      document.getElementById("CNP").value,
                      document.getElementById("card_series").value
                    );
                  }}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
