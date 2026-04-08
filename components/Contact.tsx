"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  Send,
  MessageCircle,
  ExternalLink,
  Mail,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { siteConfig } from "@/lib/data";

interface FormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: siteConfig.web3formsKey,
          ...data,
        }),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Let&apos;s Work Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-muted max-w-2xl mx-auto"
          >
            Have a project in mind? Reach out and let&apos;s make it happen.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className="w-full rounded-xl border border-border bg-muted-light px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full rounded-xl border border-border bg-muted-light px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="projectType"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Project Type
                </label>
                <select
                  id="projectType"
                  {...register("projectType", {
                    required: "Please select a project type",
                  })}
                  className="w-full rounded-xl border border-border bg-muted-light px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                >
                  <option value="">Select a project type</option>
                  <option value="website">Website Design & Development</option>
                  <option value="ecommerce">E-Commerce Store</option>
                  <option value="hosting">Cloud Hosting & Deployment</option>
                  <option value="seo">SEO & Online Presence</option>
                  <option value="maintenance">Maintenance & Support</option>
                  <option value="custom">Custom Software</option>
                  <option value="other">Other</option>
                </select>
                {errors.projectType && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.projectType.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Tell Me About Your Project
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Please write at least 10 characters",
                    },
                  })}
                  className="w-full rounded-xl border border-border bg-muted-light px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition resize-none"
                  placeholder="I'd like a website for my business that..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-primary/25 hover:bg-primary-dark transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>

              {status === "success" && (
                <div className="flex items-center gap-2 text-green-600 text-sm">
                  <CheckCircle size={16} />
                  Message sent! I&apos;ll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 text-red-500 text-sm">
                  <AlertCircle size={16} />
                  Something went wrong. Please try again or contact me directly.
                </div>
              )}
            </form>
          </motion.div>

          {/* Contact info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="rounded-2xl bg-muted-light p-6">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Or reach me directly
              </h3>
              <div className="space-y-4">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-green-50 p-4 text-sm font-medium text-green-700 hover:bg-green-100 transition-colors"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </a>
                <a
                  href={siteConfig.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-green-50 p-4 text-sm font-medium text-green-700 hover:bg-green-100 transition-colors"
                >
                  <ExternalLink size={20} />
                  Hire me on Fiverr
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 text-sm font-medium text-blue-700 hover:bg-blue-100 transition-colors"
                >
                  <Mail size={20} />
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-border p-6 text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="mt-1 text-sm text-muted">
                Projects delivered to happy clients worldwide
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
