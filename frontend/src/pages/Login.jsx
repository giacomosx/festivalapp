import { Link } from "react-router-dom";
import Layout from "../Layout";

const Login = () => {
  return (
    <Layout>
      <div className="flex h-[calc(100dvh-181px)] w-full justify-center items-center">
        <form className="w-full max-w-sm widget rounded-2xl p-8">
            <div className="mb-5 w-full">
                <label htmlFor="email" className="block mb-2 text-base font-medium ">Your email</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 " placeholder="name@festvalapp.com" required />
            </div>
            <div className="mb-5 w-full">
                <label htmlFor="passsword" className="block mb-2 text-base font-medium ">Your password</label>
                <input type="password" id="password" className="bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 "  required />
            </div>
            
            <div className="text-sm mb-5">
               If you not have an account please <Link to={'/register'} className="text-primary hover:underline">register now</Link> 
            </div>
            <button type="submit" className="text-gray-900 bg-primary hover:bg-primaryHover focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Log in</button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
