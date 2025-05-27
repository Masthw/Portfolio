import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Toast from "../components/Toast";

const Contact = () => {
  const formRef = useRef();

  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState("success");
  const [toastMessage, setToastMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "service_6bme0nh",
        "template_0hrefwk",
        {
          name: form.name,
          to_name: "Matheus Soares",
          from_name: form.email,
          to_email: "matheussoaressdev@gmail.com",
          message: form.message,
        },
        "fKJEVHC_B7_CtNQC7"
      );
      setLoading(false);
      setToastType("success");
      setToastMessage("Your message has been sent successfully!");
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setLoading(false);
      console.log(error);
      setToastType("error");
      setToastMessage("Something went wrong. Please try again.");
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  };

  return (
    <section className="c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text text-gray-gradient">Let's talk</h3>
          <p className="text-lg text-white-600">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3 shadow-black-200">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Matheus Soares"
              />
            </label>
            <label className="space-y-3 shadow-black-200">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="matheussoaressdev@gmail.com"
              />
            </label>
            <label className="space-y-3 shadow-black-200">
              <span className="field-label">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi, I wanna give you a job..."
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn-arrow shadow-black-200"
              />
            </button>
          </form>
          {showToast && (
            <Toast
              message={toastMessage}
              type={toastType}
              onClose={() => setShowToast(false)}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
