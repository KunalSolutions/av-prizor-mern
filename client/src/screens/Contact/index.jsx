import axios from "axios";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await axios.post("/api/contact", formData);
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      alert("Error sending message");
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-xl bg-white rounded-3xl p-10">
        
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black mb-3">
            Get In Touch
          </h1>
          <p className="text-slate-800 text-sm">
            We’d love to hear from you. Send us a message.
          </p>
        </div>

        {/* Success Message */}
        {success && (
          <div className="mb-6 p-3 rounded-lg text-green-400 text-center text-sm">
            Message sent successfully!
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-black placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-300 transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-black placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-300 transition"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-black placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-300 transition"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-black placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-300 transition"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl font-semibold bg-indigo-500 text-white hover:opacity-90 hover:scale-[1.02] transition duration-200 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;
