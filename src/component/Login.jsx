import React from "react";
import { Button, Label, TextInput } from "flowbite-react";

function Login() {
  return (
    <>
      <div className="h-screen w-full flex  justify-center items-center bg-blue-700">
        <form className="flex flex-col bg-white gap-4 p-4 rounded-lg w-1/2">
          <div className="font-bold text-xl">Dashboard Login</div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your Email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your Password" />
            </div>
            <TextInput id="password1" type="password" required />
          </div>
          <button
            type="submit"
            className="bg-blue-700 text-white p-2 rounded-lg hover:bg-white hover:text-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
