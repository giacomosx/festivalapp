import { Link, useNavigate } from "react-router-dom";
import Layout from "../Layout";
import AxiosApi from "../api/axiosApi";
import { login } from "../redux/loginSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Spinner from "../components/Spinner";

const Login = () => {
  const api = new AxiosApi();
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

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
      const logUser = await api.post("/auth/login", user);

      if (logUser) {
        localStorage.setItem("token", logUser.token)
        localStorage.setItem("userData", JSON.stringify(logUser.userData) )
        dispatch(login())
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
      navigate('/dashboard/home')
    }
  };

  return (
    <Layout>
      <div className="flex h-[calc(100dvh-181px)] w-full justify-center items-center">
        <form
          className="w-full max-w-sm widget rounded-2xl p-8"
          onSubmit={handleSubmit}
        >
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
              htmlFor="passsword"
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
          </div>

          <div className="text-sm mb-5">
            If you not have an account please{" "}
            <Link to={"/register"} className="text-primary hover:underline">
              register now
            </Link>
          </div>
          <div className="flex flex-col justify-between w-full md:items-center md:flex-row space-y-4 md:space-y-0">
            {!loading && (
                <button
                    type="submit"
                    className=" text-gray-900 bg-primary hover:bg-primaryHover focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center "
                >
                  Log in
                </button>
            )}
            {loading && (
                <Spinner/>
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

export default Login;
