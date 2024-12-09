import { useState } from "react";
import { toast } from "react-toastify";

export const FormSubscribe = () => {
   const [email, setEmail] = useState("")

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,}$/

    if (!emailRegex.test(email)) {
        toast.error("Please enter a valid email address")
        return;
      }

      localStorage.setItem("userEmailSubscribe", email);
      toast.success("Email successfully registered")
};

  return (
    <form action="" className="text-sm/7" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Enter Your Email Address"
        className="font-normal border-b border-black pr-5 focus:outline-none"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" className="uppercase border-b border-black ml-2.5 hover-text">
        Subscribe
      </button>
    </form>
  );
}
