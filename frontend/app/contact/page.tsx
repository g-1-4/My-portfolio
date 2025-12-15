"use client";

import { useState } from "react";
import { Mail, Linkedin, Github, Send, CheckCircle2 } from "lucide-react";

type Errors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
};

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const MAX_CHARS = 1000;
  const [messageText, setMessageText] = useState("");

  {
    /*Validation*/
  }
  function validateForm(data: any) {
    const newErrors: Errors = {};

    if (!data.firstName || data.firstName.trim().length < 2) {
      newErrors.firstName = "First name is required (min 2 characters)";
    }

    if (data.lastName && data.lastName.trim().length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(data.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!data.message) {
      newErrors.message = "Message is required";
    } else if (data.message.length > MAX_CHARS) {
      newErrors.message = `Message must be under ${MAX_CHARS} characters`;
    }

    return newErrors;
  }

  {
    /*Submit*/
  }
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage(null);

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData);

    const validationErrors = validateForm(payload);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setMessage("Message sent successfully. I’ll get back to you shortly.");
        e.currentTarget.reset();

        setTimeout(() => {
          setMessage(null);
        }, 5000);
      } else {
        setSuccess(false);
        setMessage("Something went wrong while sending your message.");
      }
    } catch {
      setSuccess(false);
      setMessage("Unable to connect right now. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-indigo-500 text-white min-h-screen pt-32 px-6 sm:px-10 md:px-16 lg:px-24">
      <section className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 pb-24">
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Contact Me
          </h1>

          <p className="text-xl font-semibold">
            Have any questions? I’ll get back to you soon.
          </p>

          <p className="text-lg leading-relaxed max-w-xl">
            Got a question about coding, career paths, projects, or just want to
            talk football or favorite playlists? I'm here for it. For anything
            more formal — internships, collaborations, or ideas — just hit up
            the contact form or email me. Always happy to connect!
          </p>

          <a
            href="mailto:gowthamarepalli09@gmail.com"
            className="underline text-lg block"
          >
            gowthamarepalli09@gmail.com
          </a>

          <div className="flex gap-6 pt-6">
            <a
              href="https://www.linkedin.com/in/gowthamarepalli"
              target="_blank"
              className="transition transform hover:scale-125 hover:text-white/70"
            >
              <Linkedin size={26} />
            </a>

            <a
              href="https://github.com/g-1-4"
              target="_blank"
              className="transition transform hover:scale-125 hover:text-white/70"
            >
              <Github size={26} />
            </a>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* NAME */}
            <div>
              <p className="mb-2">
                Name <span className="opacity-60">(first required)</span>
              </p>

              <div className="grid sm:grid-cols-2 gap-2 sm:gap-4">
                <div>
                  <input
                    name="firstName"
                    placeholder="First name"
                    className="input"
                  />
                  {errors.firstName && (
                    <p className="text-sm text-red-300 mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    name="lastName"
                    placeholder="Last name (optional)"
                    className="input"
                  />
                  {errors.lastName && (
                    <p className="text-sm text-red-300 mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label>Email *</label>
              <input
                name="email"
                placeholder="your.email@example.com"
                className="input mt-2"
              />
              {errors.email && (
                <p className="text-sm text-red-300 mt-1">{errors.email}</p>
              )}
            </div>

            {/* MESSAGE */}
            <div>
              <label>Message *</label>
              <textarea
                name="message"
                rows={5}
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                className="input mt-2 resize-none"
                placeholder="Write your message here..."
              />

              <div className="flex justify-between items-center text-sm mt-1">
                <span className="text-red-300">{errors.message}</span>

                <span
                  className={`transition ${
                    messageText.length > MAX_CHARS
                      ? "text-red-300"
                      : messageText.length > MAX_CHARS * 0.8
                      ? "text-yellow-300"
                      : "opacity-60"
                  }`}
                >
                  {messageText.length}/{MAX_CHARS}
                </span>
              </div>
            </div>

            {/* FEEDBACK */}
            {message && (
              <div
                className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm ${
                  success
                    ? "bg-green-400/10 text-green-200"
                    : "bg-red-400/10 text-red-200"
                }`}
                role="alert"
              >
                {success && <CheckCircle2 size={18} className="opacity-80" />}
                <span>{message}</span>
              </div>
            )}

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                bg-white text-indigo-600
                font-semibold text-lg
                py-3.5 rounded-lg
                cursor-pointer
                transition-all
                hover:bg-white/90 hover:shadow-lg
                active:scale-[0.98]
                disabled:opacity-60
                disabled:cursor-not-allowed
                flex items-center justify-center gap-2
              "
            >
              {loading ? (
                <>
                  <span className="inline-block w-5 h-5 border-2 border-indigo-600/30 border-t-indigo-600 rounded-full animate-spin"></span>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
