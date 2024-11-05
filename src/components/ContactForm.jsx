import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";

export const ContactUs = ({ isOpen, setIsOpen }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [country, setCountry] = useState("");

  const [loading, setLoading] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("Triggered!!");

    setLoading(true);
    emailjs
      .sendForm("service_noivkl2", "digitalbull_template", form.current, {
        publicKey: "GmoPu18cJVpdY2EOs",
      })
      .then(
        () => {
          setLoading(false);
          console.log("SUCCESS!");
          toast("Sent Successfully!!!");
          setIsOpen(false);

          setEmail("");
          setNumber("");
          setName("");
          setCountry("");
        },
        (error) => {
          setLoading(false);
          toast("Something went wrong! Try again later");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div
      className={`contact-form flex  ${
        isOpen ? "top-0 opacity-100" : "-top-[100vh] opacity-0"
      } fixed overflow-hidden  h-screen w-screen  left-0 flex-col items-center z-20 justify-center  bg-black/75`}
    >
      <form
        ref={form}
        onSubmit={(e) => sendEmail(e)}
        className="flex relative flex-col gap-5 w-[400px] max-w-[90vw] bg-gray-200 text-gray-800 rounded-lg p-5 py-8"
      >
        <button
          onClick={() => setIsOpen(false)}
          type="button"
          className="shadow shadow-red-600 absolute top-2 right-5 text-red-500 font-bold bg-gray-300 w-[30px] h-[30px] flex items-center justify-center rounded-full"
        >
          X
        </button>
        <div className="flex flex-col gap-1">
          <label>Full Name</label>
          <input
            type="text"
            name="user_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-black outline-none p-2 rounded-lg"
            // required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-black outline-none p-2 rounded-lg"
            // required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Phone</label>
          <input
            type="tel"
            name="phone_number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="text-black outline-none p-2 rounded-lg"
            // required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="plan">Select Plan</label>
          <select
            id="plan"
            type="text"
            name="plan"
            className="text-black outline-none p-2 rounded-lg"
          >
            <option value="1 year">1 year</option>
            <option value="2 years">2 years</option>
            <option value="Basic">Basic</option>
          </select>
        </div>
        <button
          value={"Send"}
          className=" rounded-md text-red-600 py-1 w-[200px] self-center text-lg font-semibold shadow shadow-gray-600"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};
