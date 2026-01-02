"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderName = formData.get("senderName");
  const senderEmail = formData.get("senderEmail");
  const projectType = formData.get("projectType");
  const budget = formData.get("budget");
  const timeline = formData.get("timeline");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  // optional fields
  if (senderName && !validateString(senderName, 200)) {
    return { error: "Invalid name" };
  }
  if (projectType && !validateString(projectType, 200)) {
    return { error: "Invalid project type" };
  }
  if (budget && !validateString(budget, 200)) {
    return { error: "Invalid budget" };
  }
  if (timeline && !validateString(timeline, 200)) {
    return { error: "Invalid timeline" };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "michaldziuba26@gmail.com",
      subject: `New project inquiry${senderName ? ` — ${senderName}` : ""}`,
      replyTo: senderEmail as string, // Changed from reply_to to replyTo
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
        senderName: (senderName as string) || "",
        projectType: (projectType as string) || "",
        budget: (budget as string) || "",
        timeline: (timeline as string) || "",
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
