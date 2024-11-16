"use client";
import { MdOutlineEmail } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { useState } from "react";
import { backendurlForUserLogin } from "../helpers/backend"; // Adjust import path as needed
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();

  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState('');

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${backendurlForUserLogin}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInput),
        credentials: 'include',
      });

      const data = await response.json();
      console.log(data, "response");
      
      if (response.ok && data.status === true) {
        setMessage("User logged in successfully.");
        router.push("/"); // Redirect to home page on successful login
      } else {
        setMessage("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.log(error, "error");
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-[80vh] flex justify-center items-center flex-col mt-10">
      <div className="w-[30%] p-2 flex flex-col justify-center items-center rounded-lg">
        {/* Input Fields */}
        <form onSubmit={handleForm}>
          <div className="w-full p-2 flex flex-col gap-4">
            {/* Email */}
            <div className="inputBox mb-2 w-full relative">
              <MdOutlineEmail className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#636380]" />
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full pl-12 pr-4 py-2 rounded-lg focus:outline-none bg-[#242444] text-[#636380] outline-none"
                autoComplete="off"
                value={userInput.email}
                name="email"
                onChange={handleInput}
              />
            </div>

            {/* Password */}
            <div className="inputBox mb-2 w-full relative">
              <CiUser className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#636380]" />
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full pl-12 pr-4 py-2 rounded-lg focus:outline-none bg-[#242444] text-[#636380] outline-none"
                autoComplete="off"
                value={userInput.password}
                name="password"
                onChange={handleInput}
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
