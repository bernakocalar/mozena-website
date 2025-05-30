"use client";
import React, { useState, useRef, useEffect } from "react";

type FormData = {
  fullName: string;
  email: string;
  message: string;
  phone: string;
  company: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    message: "",
    phone: "",
    company: "",
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: boolean }>({});
  const [shakeButton, setShakeButton] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inputRefs = {
    fullName: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    message: useRef<HTMLTextAreaElement>(null),
    phone: useRef<HTMLInputElement>(null),
    company: useRef<HTMLInputElement>(null),
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: boolean } = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (["fullName", "email", "message"].includes(key) && !value.trim()) {
        errors[key] = true;
      }
    });
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setShakeButton(true);
    } else {
      console.log("Form Submitted:", formData);
      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        message: "",
        phone: "",
        company: "",
      });
    }
  };

  useEffect(() => {
    if (shakeButton) {
      const timer = setTimeout(() => setShakeButton(false), 500);
      return () => clearTimeout(timer);
    }
  }, [shakeButton]);

  const getLabelClass = (field: keyof FormData) => {
    const isActive =
      formData[field] !== "" ||
      inputRefs[field].current === document.activeElement;
    return `form-label ${isActive ? "active" : ""}`;
  };

  const getInputClass = (field: keyof FormData) => {
    return `form-input ${formErrors[field] ? "error" : ""}`;
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {(["fullName", "email", "phone", "company"] as (keyof FormData)[]).map(
          (field) => (
            <div key={field} className="form-group">
              <label htmlFor={field} className={getLabelClass(field)}>
                {field === "fullName"
                  ? "Full Name *"
                  : field === "email"
                  ? "Email *"
                  : field === "phone"
                  ? "Phone"
                  : "Company"}
              </label>
              <input
                id={field}
                name={field}
                type={field === "email" ? "email" : "text"}
                value={formData[field]}
                onChange={handleChange}
                ref={inputRefs[field] as React.RefObject<HTMLInputElement>}
                className={getInputClass(field)}
              />
            </div>
          )
        )}

        <div className="form-group">
          <label htmlFor="message" className={getLabelClass("message")}>
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            ref={inputRefs.message}
            rows={2}
            className={getInputClass("message")}
          />
        </div>

        <button
          type="submit"
          className={`mt-6 px-6 py-2 text-primary rounded transition-all duration-200 bg-white ${
            shakeButton ? "animate-shake" : ""
          }`}
        >
          Send
        </button>

        {isSubmitted && (
          <p className="text-green-600 mt-4 text-center">
            Form submitted successfully!
          </p>
        )}
      </form>
    </div>
  );
}
