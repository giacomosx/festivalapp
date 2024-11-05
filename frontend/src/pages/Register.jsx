import { Link, useNavigate } from "react-router-dom";
import Layout from "../Layout";
import AxiosApi from "../api/axiosApi";
import { useState } from "react";

const Register = () => {
  const api = new AxiosApi();
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value.trim(),
    });
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const createUser = await api.post("/auth/register", user);

      if (createUser) {
        setSuccess(createUser.message);
      }
    } catch (error) {
      console.log(error.error);
      setError(error.error);
      setLoading(false);
    } finally {
      setLoading(false);
      navigate("/login");
    }
  };

  return (
    <Layout>
      <div className="flex h-[calc(100dvh-81px)] w-full justify-center items-center">
        <form
          className="w-full max-w-sm widget rounded-2xl p-8"
          onSubmit={handleSubmit}
        >
          <div className="mb-5 w-full">
            <label
              htmlFor="username"
              className="block mb-2 text-base font-medium "
            >
              Your username
            </label>
            <input
              onChange={handleChange}
              name="username"
              type="text"
              id="username"
              className="bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 "
              placeholder="jhonSnow"
              required
            />
          </div>
          <div className="mb-5 w-full">
            <label
              htmlFor="email"
              className="block mb-2 text-base font-medium "
            >
              Your email
            </label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 "
              placeholder="name@festvalapp.com"
              required
            />
          </div>
          <div className="mb-5 w-full">
            <label
              htmlFor="password"
              className="block mb-2 text-base font-medium "
            >
              Your password
            </label>
            <input
              onChange={handleChange}
              name="password"
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 "
              required
            />
            <p className="text-xs text-gray-400">Min. 6 characters</p>
          </div>
          <div className="mb-5 w-full">
            <label
              htmlFor="repeatPassword"
              className="block mb-2 text-base font-medium "
            >
              Repeat password
            </label>
            <input
              onChange={handleChange}
              name="passwordConfirm"
              type="password"
              id="passwordConfirm"
              className="bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 "
              required
            />
          </div>

          <div className="text-sm mb-5">
            If you already have an account please{" "}
            <Link to={"/login"} className="text-primary hover:underline">
              login
            </Link>
          </div>
          <div className="flex flex-col justify-between w-full md:items-center md:flex-row space-y-4 md:space-y-0">
            <button
              type="submit"
              className=" shrink-0 text-gray-900 bg-primary hover:bg-primaryHover focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center "
            >
              Register now
            </button>
            {loading && (
              <span className="w-8 h-8 border-2 border-primary rounded-full border-b-transparent animate-spin"></span>
            )}
            {success && (
              <span className="text-green-500 border p-2 px-4 text-sm rounded border-green-500 w-fit">
                {success}
              </span>
            )}
            {error && (
              <span className="text-red-500 border p-2 px-4 text-sm rounded border-red-500 w-fit">
                {error}
              </span>
            )}
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
