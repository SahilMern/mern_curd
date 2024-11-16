"use client";
import { CiUser } from "react-icons/ci";
import {
  MdOutlineEmail,
  MdOutlinePhoneEnabled,
  MdOutlineRealEstateAgent,
} from "react-icons/md";
import { PiAddressBookThin, PiCityLight } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { FaPlaceOfWorship } from "react-icons/fa";
import { useState } from "react";
import { backendurlForUserRegister } from "../helpers/backend";
import { useRouter } from 'next/navigation'
const Register = () => {
  const router = useRouter()
  const [userInput, setUserInput] = useState({
    username: "",
    email: "",
    phone: "",
    address: "",
    location: "",
    city: "",
    state: "",
    country: "",
    password: "",
    confirmPassword:""
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // console.log(userInput, "Previous user details");

  const handleForm = async (e) => {
    e.preventDefault(); // Fixed this line

    try {
      const response = await fetch(`${backendurlForUserRegister}`, {
        // Adjust URL as needed
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Fixed the header value
        },
        body: JSON.stringify(userInput), // Fixed body value
      });

      const data = await response.json();
      console.log(data, "response");
      if(data.status===true){
        alert("User register Sussfully")
        router.push("/login")
      }
    } catch (error) {
      console.log(error, "error");
    }
  };
  return (
    <div className="min-h-[80vh] flex justify-center items-center flex-col mt-10">
      <div className="w-[30%] p-2 flex flex-col justify-center items-center rounded-lg">
        {/* Input Fields */}
        <form onSubmit={handleForm}>
          <div className="w-full p-2 flex flex-col gap-4">
            {/* Username */}
            <div className="inputBox mb-2 w-full relative">
              <CiUser className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#636380]" />
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="w-full pl-12 pr-4 py-2 rounded-lg focus:outline-none bg-[#242444] text-[#636380] outline-none"
                autoComplete="off"
                value={userInput.username}
                name="username"
                onChange={handleInput}
              />
            </div>

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

            {/* Phone Number */}
            <div className="inputBox mb-2 w-full relative">
              <MdOutlinePhoneEnabled className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#636380]" />
              <input
                type="text"
                id="phone"
                placeholder="Phone Number"
                className="w-full pl-12 pr-4 py-2 rounded-lg focus:outline-none bg-[#242444] text-[#636380] outline-none"
                autoComplete="off"
                value={userInput.phone}
                name="phone"
                onChange={handleInput}
              />
            </div>

            {/* Address */}
            <div className="inputBox mb-2 w-full relative">
              <PiAddressBookThin className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#636380]" />
              <input
                type="text"
                id="address"
                placeholder="Address"
                className="w-full pl-12 pr-4 py-2 rounded-lg focus:outline-none bg-[#242444] text-[#636380] outline-none"
                autoComplete="off"
                value={userInput.address}
                name="address"
                onChange={handleInput}
              />
            </div>

            {/* Location */}
            <div className="inputBox mb-2 w-full relative">
              <CiLocationOn className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#636380]" />
              <input
                type="text"
                id="location"
                placeholder="Location"
                className="w-full pl-12 pr-4 py-2 rounded-lg focus:outline-none bg-[#242444] text-[#636380] outline-none"
                autoComplete="off"
                value={userInput.location}
                name="location"
                onChange={handleInput}
              />
            </div>

            {/* City */}
            <div className="inputBox mb-2 w-full relative">
              <PiCityLight className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#636380]" />
              <input
                type="text"
                id="city"
                placeholder="City"
                className="w-full pl-12 pr-4 py-2 rounded-lg focus:outline-none bg-[#242444] text-[#636380] outline-none"
                autoComplete="off"
                value={userInput.city}
                name="city"
                onChange={handleInput}
              />
            </div>

            {/* State */}
            <div className="inputBox mb-2 w-full relative">
              <MdOutlineRealEstateAgent className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#636380]" />
              <input
                type="text"
                id="state"
                placeholder="State"
                className="w-full pl-12 pr-4 py-2 rounded-lg focus:outline-none bg-[#242444] text-[#636380] outline-none"
                autoComplete="off"
                value={userInput.state}
                name="state"
                onChange={handleInput}
              />
            </div>

            {/* Country */}
            <div className="inputBox mb-2 w-full relative">
              <FaPlaceOfWorship className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#636380]" />
              <input
                type="text"
                id="country"
                placeholder="Country"
                className="w-full pl-12 pr-4 py-2 rounded-lg focus:outline-none bg-[#242444] text-[#636380] outline-none"
                autoComplete="off"
                value={userInput.country}
                name="country"
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

             {/* Confirm Password */}
             <div className="inputBox mb-2 w-full relative">
              <CiUser className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#636380]" />
              <input
                type="password"
                id="cpassword"
                placeholder="confirm Password"
                className="w-full pl-12 pr-4 py-2 rounded-lg focus:outline-none bg-[#242444] text-[#636380] outline-none"
                autoComplete="off"
                value={userInput.confirmPassword}
                name="confirmPassword"
                onChange={handleInput}
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">Register</button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
