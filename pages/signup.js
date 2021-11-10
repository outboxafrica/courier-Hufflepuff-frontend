import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";

function Signup() {
  const { signUp } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signUp(email, password);
	  setLoading(false);
      console.log("signup success");
	  router.push("/");
    } catch (error) {
      alert(error.message);
	  setLoading(false);
    }
  };
  return (
    <div
      className="card mx-auto"
      style={{ maxWidth: "520px", marginTop: "40px" }}
    >
      <article className="card-body">
        <header className="mb-4">
          <h4 className="card-title">Sign up</h4>
        </header>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <small className="form-text text-muted">
              We ll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">
             {loading ? "Loading..." : "Sign up"}
            </button>
          </div>
        </form>
      </article>
    </div>
  );
}

export default Signup;
