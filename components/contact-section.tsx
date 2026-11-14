"use client";
import { useState } from "react";
import { Check, Copy, Mail, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
export function ContactSection() {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = "mailto:" + profile.email;
    }
  }
  return (
    <section className="contact-section container" id="contact">
      <div className="contact-card">
        <span className="eyebrow">04 / LET’S CONNECT</span>
        <h2>
          Good things start with
          <br />
          <span>a conversation.</span>
        </h2>
        <p>
          A project in mind, an interesting opportunity, or just a hello?
          <br />
          I’d love to hear from you.
        </p>
        <div className="contact-buttons">
          <a className="button button-primary" href={"mailto:" + profile.email}>
            <Mail size={16} /> Say hello <ArrowUpRight size={16} />
          </a>
          <button className="button button-secondary" onClick={copy}>
            {copied ? <Check size={15} /> : <Copy size={15} />}{" "}
            {copied ? "Copied!" : "Copy email"}
          </button>
        </div>
        <span className="contact-email">{profile.email}</span>
        <span className="sr-only" role="status">
          {copied ? "Email copied to clipboard" : ""}
        </span>
      </div>
    </section>
  );
}
