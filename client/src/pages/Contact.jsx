import { useState } from "react";
import contactData from "../data/contact.json";
import IntroCard from "../components/cards/IntroCard.jsx";

const apiBase = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/$/, "");

export default function Contact() {
    const [fieldErrors, setFieldErrors] = useState({});
    const [status, setStatus] = useState("idle");
    const [formError, setFormError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFieldErrors({});
        setFormError("");
        setStatus("sending");

        const form = e.currentTarget;
        const payload = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value,
        };

        try {
            const res = await fetch(`${apiBase}/api/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            const body = await res.json().catch(() => ({}));

            if (!res.ok) {
                const byPath = {};
                for (const err of body.errors ?? []) {
                    if (err.path) byPath[err.path] = err.msg;
                }
                setFieldErrors(byPath);
                setStatus("error");
                return;
            }
            setStatus("success");
            form.reset();
        } catch {
            setFormError("Network error. Is the server running?");
            setStatus("error");
        }
    };

    return (
        <section id="contact">
            <h2>Contact Me</h2>

            <IntroCard intro={contactData.intro} />

            <section>
                <h3>Contact Methods</h3>
                <div className="grid grid-two">
                    <article>
                        <form id="contact-form" noValidate onSubmit={handleSubmit}>
                            <fieldset>
                                <legend>Send a Message</legend>

                                {formError && (
                                    <p className="error-message" role="alert">
                                        {formError}
                                    </p>
                                )}

                                <div className="form-field">
                                    <label className="label" htmlFor="name">
                                        Name
                                    </label>
                                    <input type="text" id="name" name="name" placeholder="Your name" required disabled={status === "sending"} />
                                    <div className="error-message" id="error-name" role="alert">
                                        {fieldErrors.name ?? ""}
                                    </div>
                                </div>

                                <div className="form-field">
                                    <label className="label" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="your.email@example.com"
                                        required
                                        disabled={status === "sending"}
                                    />
                                    <div className="error-message" id="error-email" role="alert">
                                        {fieldErrors.email ?? ""}
                                    </div>
                                </div>

                                <div className="form-field">
                                    <label className="label" htmlFor="phone">
                                        Phone
                                    </label>
                                    <input type="tel" id="phone" name="phone" placeholder="(555) 555-5555" disabled={status === "sending"} />
                                    <div className="error-message" id="error-phone"></div>
                                </div>

                                <div className="form-field">
                                    <label className="label" htmlFor="message">
                                        Message
                                    </label>
                                    <textarea id="message" name="message" placeholder="Type your message here..." required disabled={status === "sending"}></textarea>
                                    <div className="error-message" id="error-message" role="alert">
                                        {fieldErrors.message ?? ""}
                                    </div>
                                </div>

                                <button type="submit" disabled={status === "sending"}>
                                    {status === "sending" ? "Sending…" : "Send"}
                                </button>
                                {status === "success" && (
                                    <p className="form-success" role="status">
                                        Thanks — your message was sent.
                                    </p>
                                )}
                            </fieldset>
                        </form>
                    </article>

                    <article>
                        <h4>Direct Contact</h4>
                        <ul className="contact-links">
                            {contactData.directContact.map((item, index) => (
                                <li key={index}>
                                    <span className="label">{item.label}</span>
                                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                                        {item.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </article>
                </div>
            </section>
        </section>
    );
}
