import React, { useState } from "react";
import Container from "../ui/Container";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

/**
 * Contact page section with form and direct contact options
 */
const ContactSection = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ message: "", type: "" });
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayMessage, setOverlayMessage] = useState("");

  const whatsappNumber = "918886113839";
  const handleWhatsAppSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ message: "Sending...", type: "info" });
    try {
      const fd = new FormData(e.target);
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) {
        console.warn("VITE_WEB3FORMS_ACCESS_KEY is not set");
      }
      fd.append("access_key", accessKey ?? "");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });
      const data = await response.json();
      if (data && data.success) {
        const successMsg = "Message submitted successfully.";
        setStatus({ message: successMsg, type: "success" });
        setFormData({ name: "", email: "", message: "" });
        try {
          e.target.reset();
        } catch (err) {}
        setOverlayMessage(successMsg);
        setShowOverlay(true);
        setTimeout(() => setShowOverlay(false), 3500);
      } else {
        setStatus({
          message: data?.message || "Error submitting form.",
          type: "error",
        });
      }
    } catch (err) {
      console.error(err);
      setStatus({ message: "Network error. Please try again.", type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <Container>
        <div ref={ref} className={isVisible ? "animate-fade-in" : "opacity-0"}>
          {/* Main Heading */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-dark-900 mb-6">
              Let's Connect
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get in touch with our team for consultations, quotes, or questions
              about our services.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${
                showOverlay ? "filter blur-sm pointer-events-none" : ""
              }`}
            >
              {/* Contact Form */}
              <Card className="p-8">
                <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-dark-900 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cream-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-dark-900 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cream-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-dark-900 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 bg-cream-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  {status.message && (
                    <p
                      className={`text-sm mt-2 ${
                        status.type === "success"
                          ? "text-green-600"
                          : status.type === "error"
                          ? "text-red-600"
                          : "text-gray-600"
                      }`}
                    >
                      {status.message}
                    </p>
                  )}
                </form>
              </Card>

              {/* Direct Contact Options */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-dark-900 mb-6">
                  Reach Us Directly
                </h2>
                <p className="text-gray-600 mb-8">
                  Prefer a direct approach? Reach out through the channels
                  below.
                </p>

                {/* WhatsApp Card */}
                <Card className="p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">💬</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-dark-900 mb-2">
                        WhatsApp Us
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">
                        Get instant responses and quick quotes on WhatsApp.
                      </p>
                      <a
                        href={`https://wa.me/${whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-semibold hover:underline"
                      >
                        +91 8886113839
                      </a>
                    </div>
                  </div>
                </Card>

                {/* Email Card */}
                <Card className="p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📧</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-dark-900 mb-2">
                        Email Us
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">
                        Send detailed inquiries and project requirements via
                        email.
                      </p>
                      <a
                        href="mailto:flowsiteaidevs@gmail.com"
                        className="text-primary font-semibold hover:underline"
                      >
                        flowsiteaidevs@gmail.com
                      </a>
                    </div>
                  </div>
                </Card>

                {/* Call Card */}
                <Card className="p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-dark-900 mb-2">
                        Call Us
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">
                        Speak directly with our team for consultations.
                      </p>
                      <a
                        href={`tel:${whatsappNumber}`}
                        className="text-primary font-semibold hover:underline"
                      >
                        +91 8886113839
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            {showOverlay && (
              <div className="absolute inset-0 flex items-center justify-center z-50">
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-lg shadow-lg text-center">
                  <p className="text-lg font-semibold text-dark-900">
                    {overlayMessage}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
