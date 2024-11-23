import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import OAuth from "../components/OAuth";

const SignUp = ({ onClose, onSwitchToSignIn }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);

      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }

      setLoading(false);
      setError(null);
      onSwitchToSignIn();
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center bg-purple-200 rounded-3xl">
      <div className="p-10 shadow-xl rounded-2xl max-w-lg w-full">
        <h1 className="text-4xl text-center font-bold text-gray-800 my-4">Create Account</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Username"
            className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="username"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="password"
            onChange={handleChange}
          />
          <button
            className="bg-blue-600 text-white py-3 rounded-lg text-lg uppercase font-bold hover:bg-blue-700 transition disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
          <OAuth />
        </form>

        <div className="flex justify-center items-center gap-2 mt-6">
          <p className="text-gray-600">Already have an account?</p>
          <button
            type="button"
            onClick={onSwitchToSignIn}
            className="text-blue-500 underline font-semibold hover:text-blue-700"
          >
            Sign In
          </button>
        </div>
        {error && <p className="text-red-500 text-center mt-3">{error}</p>}
      </div>
    </div>
  );
};

export default SignUp;
