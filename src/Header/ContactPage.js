import React, { useState } from "react";
import "../index.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    alternatePhone: "",
    subject: "",
    recipientEmail: "",
    dob: "",
    gender: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";

    if (!formData.phone || !/^\+?[0-9\s-]{10,15}$/.test(formData.phone))
      newErrors.phone = "Valid phone number is required";

    if (formData.alternatePhone && !/^\+?[0-9\s-]{10,15}$/.test(formData.alternatePhone))
      newErrors.alternatePhone = "Alternate phone must be valid";

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";

    if (
      !formData.recipientEmail.trim() ||
      !/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(formData.recipientEmail)
    )
      newErrors.recipientEmail = "Valid recipient email is required";

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    setSubmitStatus("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch("https://portfolio-chi-one-57.vercel.app/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
  });


      if (!response.ok) throw new Error("Network error");

      setSubmitStatus("✅ Email sent successfully!");
      setFormData({
        fullName: "",
        phone: "",
        alternatePhone: "",
        subject: "",
        recipientEmail: "",
        dob: "",
        gender: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setSubmitStatus("❌ Failed to send email.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl backdrop-blur-xl text-white animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-pink-400 mb-10 tracking-wide drop-shadow-md">
        Contact Us
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-8 bg-gray-900/50 p-10 rounded-3xl border border-pink-500/30 shadow-inner shadow-pink-500/10"
      >
        {/* Full Name */}
        <div className="col-span-2">
          <label className="block mb-2 text-indigo-300 font-semibold">Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full px-6 py-3 bg-gray-800 text-white rounded-xl border-2 ${
              errors.fullName ? "border-red-500" : "border-pink-500/20"
            } focus:ring-2 focus:ring-pink-500 outline-none`}
            placeholder="Your full name"
          />
          {errors.fullName && <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-2 text-indigo-300 font-semibold">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91xxxxxxxxxx"
            className={`w-full px-6 py-3 bg-gray-800 text-white rounded-xl border-2 ${
              errors.phone ? "border-red-500" : "border-pink-500/20"
            } focus:ring-2 focus:ring-pink-500 outline-none`}
          />
          {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
        </div>

        {/* Alternate Phone */}
        <div>
          <label className="block mb-2 text-indigo-300 font-semibold">Alternate Number (Optional)</label>
          <input
            type="tel"
            name="alternatePhone"
            value={formData.alternatePhone}
            onChange={handleChange}
            placeholder="+91xxxxxxxxxx"
            className={`w-full px-6 py-3 bg-gray-800 text-white rounded-xl border-2 ${
              errors.alternatePhone ? "border-red-500" : "border-pink-500/20"
            } focus:ring-2 focus:ring-pink-500 outline-none`}
          />
          {errors.alternatePhone && <p className="text-red-400 text-sm mt-1">{errors.alternatePhone}</p>}
        </div>

        {/* DOB */}
        <div>
          <label className="block mb-2 text-indigo-300 font-semibold">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full px-6 py-3 bg-gray-800 text-white rounded-xl border-2 border-pink-500/20 focus:ring-2 focus:ring-pink-500 outline-none"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block mb-2 text-indigo-300 font-semibold">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full px-6 py-3 bg-gray-800 text-white rounded-xl border-2 border-pink-500/20 focus:ring-2 focus:ring-pink-500 outline-none"
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </div>

        {/* Subject */}
        <div>
          <label className="block mb-2 text-indigo-300 font-semibold">Subject *</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Email subject"
            className={`w-full px-6 py-3 bg-gray-800 text-white rounded-xl border-2 ${
              errors.subject ? "border-red-500" : "border-pink-500/20"
            } focus:ring-2 focus:ring-pink-500 outline-none`}
          />
          {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 text-indigo-300 font-semibold">Recipient Email *</label>
          <input
            type="email"
            name="recipientEmail"
            value={formData.recipientEmail}
            onChange={handleChange}
            placeholder="recipient@example.com"
            className={`w-full px-6 py-3 bg-gray-800 text-white rounded-xl border-2 ${
              errors.recipientEmail ? "border-red-500" : "border-pink-500/20"
            } focus:ring-2 focus:ring-pink-500 outline-none`}
          />
          {errors.recipientEmail && (
            <p className="text-red-400 text-sm mt-1">{errors.recipientEmail}</p>
          )}
        </div>

        {/* Message */}
        <div className="col-span-2">
          <label className="block mb-2 text-indigo-300 font-semibold">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message..."
            rows="4"
            className="w-full px-6 py-4 bg-gray-800 text-white rounded-xl border-2 border-pink-500/20 focus:ring-2 focus:ring-pink-500 outline-none"
          ></textarea>
        </div>

        {/* Submit */}
        <div className="col-span-2 text-center mt-4">
          <button
            type="submit"
            className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 text-white text-lg px-10 py-4 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            ✉️ Send Email
          </button>
        </div>

        {submitStatus && (
          <p className="col-span-2 text-center mt-4 text-lg font-medium text-green-400">
            {submitStatus}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactPage;
