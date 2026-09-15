import { useState } from "react";
import { submitContactForm } from "../services/api";
import PageHeader from "../components/PageHeader";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");
    setStatusType("");

    try {
      const response = await submitContactForm(formData);

      setStatus(response.data.message);
      setStatusType("success");

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus(
        error.response?.data?.message ||
          "Unable to submit your message. Please try again."
      );

      setStatusType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Have a question or want to work with us? Get in touch with our team."
      />

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-3">

            {/* Contact Information */}
            <div className="lg:col-span-1">

              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Get In Touch
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                Let's talk about your project.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Have an idea, question, or project in mind?
                Send us a message and our team will get back
                to you as soon as possible.
              </p>

              {/* Email */}
              <div className="mt-10 flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  @
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Email
                  </h3>

                  <p className="mt-1 text-sm text-slate-600">
                    info@example.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="mt-6 flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  ☎
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Phone
                  </h3>

                  <p className="mt-1 text-sm text-slate-600">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="mt-6 flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  ●
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Location
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Noida, Uttar Pradesh, India
                  </p>
                </div>
              </div>

            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Send us a message
                  </h3>

                  <p className="mt-2 text-sm text-slate-600">
                    Fill out the form below and we'll get back to you.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Name + Email */}
                  <div className="grid gap-6 sm:grid-cols-2">

                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-slate-700"
                      >
                        Your Name *
                      </label>

                      <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-slate-700"
                      >
                        Email Address *
                      </label>

                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
                      />
                    </div>

                  </div>

                  {/* Phone + Subject */}
                  <div className="grid gap-6 sm:grid-cols-2">

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-slate-700"
                      >
                        Phone Number
                      </label>

                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-2 block text-sm font-medium text-slate-700"
                      >
                        Subject
                      </label>

                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
                      />
                    </div>

                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Your Message *
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      placeholder="Tell us about your project or requirement..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10"
                    />
                  </div>

                  {/* Status */}
                  {status && (
                    <div
                      className={`rounded-xl px-4 py-3 text-sm ${
                        statusType === "success"
                          ? "bg-green-50 text-green-700"
                          : "bg-red-50 text-red-700"
                      }`}
                    >
                      {status}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  >
                    {loading ? "Sending..." : "Send Message →"}
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default Contact;