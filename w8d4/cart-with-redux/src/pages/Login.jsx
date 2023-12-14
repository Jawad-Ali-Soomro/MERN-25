import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN } from "../redux/actions";
import useAuth from "../hooks/useAuth";
const Login = () => {
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();
  const authorized = useAuth();
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleValue = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    console.log({ ...data });
    const userName = data.email.split("@")[0];
    const email = data.email;
    dispatch({ type: LOGIN, payload: { email: email, userName: userName } });
    navigate("/products");
  };
  return (
    <React.Fragment>
      {JSON.stringify({
        authorized,
      })}
      <form
        onSubmit={submitForm}
        className="flex justify-center items-center h-[100vh] flex-col  "
      >
        <div className="border-violet-200 border-[2px] p-8 rounded-md">
          <div className="my-1">
            <label htmlFor="email">Email</label>
            <input
              className="border-[1px] border-black"
              type="email"
              value={data.email}
              name="email"
              id="email"
              onChange={handleValue}
            />
          </div>
          <div className="my-1">
            <label htmlFor="password">Password</label>
            <input
              className="border-[1px] border-black"
              type="password"
              value={data.password}
              name="password"
              onChange={handleValue}
              id="password"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-200 p-1 rounded-md hover:bg-blue-400 transition-all"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};
export default Login;
