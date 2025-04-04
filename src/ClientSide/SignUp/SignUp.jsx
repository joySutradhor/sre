import { useState } from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { FaGoogle } from "react-icons/fa";

const SignUp = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:1337/api/auth/local/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: fullname,
            email,
            password,
          }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        alert("Signup successful!");
      } else {
        alert(data.message[0].messages[0].message);
      }
    } catch (error) {
      console.error("Error signing up:", error);
      alert("Error signing up");
    }
  };
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-custom-gradient p-6 rounded shadow-md w-full max-w-md ">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">First Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full  text-white py-2 rounded-md bg-black hover:bg-opacity-75  transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center  mt-[20px]">
          <button
            type="button"
            className="mx-1 h-9 w-9  rounded-full bg-black hover:bg-[#8EFA6D]/[79.68] text-white shadow-[0_4px_9px_-4px_#3b71ca]"
          >
            <BiLogoFacebook
              size={20}
              className="text-white flex justify-center items-center w-full"
            />
          </button>
          <button
            type="button"
            className="inlne-block mx-1 h-9 w-9 rounded-full bg-black hover:bg-[#8EFA6D]/[79.68] uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
          >
            <FaGoogle
              size={20}
              className="flex justify-center text-white items-center w-full"
            />
          </button>
        </div>
        <div className="mt-4 text-center">
          <a
            href="/signin"
            className="text-[#A8FF57]/[92.3] hover:text-[#8EFA6D]/[79.68] hover:underline"
          >
            Already have an account? Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
