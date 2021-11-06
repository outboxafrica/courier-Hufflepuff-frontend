import { useRouter } from "next/router";
import { getProviders, useSession } from "next-auth/react";
import BtnLogin from "../components/BtnLogin";

function Login() {
  const router = useRouter();
  const providers = getProviders();
  const { data: session, status } = useSession();
  console.log({ session, providers });

  if (session) {
    return router.push("/");
  }

  return (
    <div className="container" style={{ maxWidth: "480px", width: "100%" }}>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div
          style={{ maxwidth: "400px", width: "100%" }}
          className="border border-1 max-auto p-4 shadow"
        >
          <h2
            className="text-center fw-bolder text-uppercase"
            style={{ color: "#555", letterSpacing: "1px" }}
          >
            <p className="text-center">Drive Your Dream </p>
          </h2>

          <BtnLogin  bgColor="#6f42c1" textColor="#fff" />
        </div>
      </div>
    </div>
  );
}

export default Login;
