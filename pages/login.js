import { useRouter } from "next/router";
import Head from "next/head";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function Login() {
  const router = useRouter();
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signIn(email, password);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          justifyContent: "center",
          padding: "25px",
        }}
      >
        <aside className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title mb-4">Sign in</h4>
              <form onSubmit={handleLogin}>
                <a href="#" className="btn btn-facebook btn-block mb-2 disabled">
                  <i className="fab fa-facebook-f"></i> Sign in with Facebook
                </a>
                <a href="#" className="btn btn-google btn-block mb-4 disabled">
                  <i className="fab fa-google"></i> Sign in with Google
                </a>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-user"></i>
                      </span>
                    </div>
                    <input
                      name="email"
                      className="form-control"
                      placeholder="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-lock"></i>
                      </span>
                    </div>
                    <input
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">
                    {loading ? "Loading..." : "Sign in"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

export default Login;
