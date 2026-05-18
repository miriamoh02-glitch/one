"use client";

import { useState, FormEvent } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function InquiryForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (form: FormData): FormErrors => {
    const next: FormErrors = {};
    const name = (form.get("name") as string)?.trim();
    const email = (form.get("email") as string)?.trim();
    const message = (form.get("message") as string)?.trim();

    if (!name || name.length < 2) next.name = "Please enter your full name";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Please enter a valid email address";
    if (!message || message.length < 10)
      next.message = "Please provide a brief message (min. 10 characters)";

    return next;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const validation = validate(form);

    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <FadeIn>
        <div className="border border-accent/30 bg-surface p-12 text-center md:p-16">
          <p className="font-display text-3xl text-primary">
            Thank You For Reaching Out
          </p>
          <p className="mt-4 text-secondary">
            We have received your message and will respond shortly.
          </p>
        </div>
      </FadeIn>
    );
  }

  return (
    <FadeIn>
      <form
        onSubmit={handleSubmit}
        className="space-y-10"
        noValidate
        aria-label="Contact form"
      >
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              autoComplete="name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={cn(errors.name && "border-red-600/50")}
            />
            {errors.name && (
              <p id="name-error" className="mt-2 text-sm text-red-700" role="alert">
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={cn(errors.email && "border-red-600/50")}
            />
            {errors.email && (
              <p id="email-error" className="mt-2 text-sm text-red-700" role="alert">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            rows={5}
            placeholder="How can we help you?"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={cn(errors.message && "border-red-600/50")}
          />
          {errors.message && (
            <p id="message-error" className="mt-2 text-sm text-red-700" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        <Button type="submit" variant="default" size="lg" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </FadeIn>
  );
}
