import { AuthenticationForm } from "./component/AuthenticationForm";

function LoginForm() {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div style={{ backgroundColor: "lightgrey", width: "40%" }}>
      hello
      </div>
      <div style={{ backgroundColor: "white", width: "60%" }}>
        <AuthenticationForm></AuthenticationForm>

      </div>
    </div>
  );
}

export default LoginForm;
