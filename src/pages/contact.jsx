import React from "react";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import Form from "../components/form";

const Contact = () => {
  return (
    <section className="p-[5%] dark:text-gray-100 dark:bg-slate-900 " id="contact">
      <h2 className="text-center text-[2rem]">Contact Us</h2>
      <div className="w-[140px] h-[2px] bg-[purple] mx-auto mt-[.3rem]"></div>

      <div className="mt-[3rem] sm:flex gap-[1rem] md:justify-around">
        <div className="text-center" data-aos="fade-left">
          <FaPhone size={44} className="mx-auto text-[#228B22] mb-[.5rem]" />
          <p>Call: +234 903 50 85579</p>
          <p>+27 66 167 4126</p>
        </div>
        <br />
        <div className="text-center" data-aos="fade-left">
          <MdMail size={44} className="mx-auto text-[#228B22] mb-[.5rem]" />
          <p>Email: info@rootswrld.com</p>
          <p>Web: rootswrld.com</p>
        </div>
        <br />
        <div className="text-center" data-aos="fade-left">
          <FaMapMarkerAlt
            size={44}
            className="mx-auto text-[#228B22] mb-[.5rem]"
          />
          <p>Nigeria, South Africa</p>
          <p>NG 228B22, SA</p>
        </div>
      </div>

      <Form />
    </section>
  );
};

export default Contact;
