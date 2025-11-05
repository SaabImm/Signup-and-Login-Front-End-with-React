import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/dataCont";

const BACKEND_URL = "https://back-end-signup-and-login.onrender.com";

export default function VerifyPage() {
  const { token } = useParams();
  const [message, setMessage] = useState("Verifying your email...");
  const { setAuthData } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/auth/verify/${token}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        const data = await response.json();

        if (response.ok) {
          // ✅ Save user and token in context
          setAuthData({
            user: data.user,
            token: data.token
          });

          setMessage("✅ Email verified! Redirecting to your profile...");
          
          // Wait a moment for UX, then navigate
          setTimeout(() => navigate("/profile"), 1500);
        } else {
          setMessage(data.message || "❌ Verification failed. Please try again.");
        }
      } catch (error) {
        console.error("Verification error:", error);
        setMessage("⚠️ Verification failed. The link may be invalid or expired.");
      }
    };

    verifyUser();
  }, [token, navigate, setAuthData]);

  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h2>{message}</h2>
    </div>
  );
}
