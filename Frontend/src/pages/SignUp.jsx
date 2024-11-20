import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import OAuth from "../components/OAuth";

const SignUp = () => {
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
      navigate("/signin");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div
      className="h-full flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://wallpaperboat.com/wp-content/uploads/2020/10/23/57974/real-estate-16.jpg')",
      }}
    >
      <div className="p-6 bg-white bg-opacity-90 shadow-xl rounded-lg max-w-lg w-full">
        <h1 className="text-3xl text-center font-bold text-gray-800 my-4">Sign Up</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            id="username"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            id="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            id="password"
            onChange={handleChange}
          />
          <button
            className="bg-blue-600 text-white p-3 rounded-lg uppercase hover:opacity-90 transition disabled:opacity-70"
            disabled={loading}
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
          <OAuth />
        </form>

        <div className="flex justify-center gap-2 mt-5">
          <p>Have an account?</p>
          <Link to="/signin">
            <span className="text-blue-700 font-semibold underline">Sign In</span>
          </Link>
        </div>
        {error && <p className="text-red-500 text-center mt-3">{error}</p>}
      </div>
    </div>
  );
};

export default SignUp;
