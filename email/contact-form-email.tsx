import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
  senderName: string;
  projectType: string;
  budget: string;
  timeline: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
  senderName,
  projectType,
  budget,
  timeline,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New project inquiry from your site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                New project inquiry
              </Heading>
              <Text>
                <strong>From:</strong>{" "}
                {senderName ? `${senderName} ` : ""}
                {`<${senderEmail}>`}
              </Text>
              {projectType ? (
                <Text>
                  <strong>Project type:</strong> {projectType}
                </Text>
              ) : null}
              {budget ? (
                <Text>
                  <strong>Budget:</strong> {budget}
                </Text>
              ) : null}
              {timeline ? (
                <Text>
                  <strong>Timeline:</strong> {timeline}
                </Text>
              ) : null}
              <Text>{message}</Text>
              <Hr />
              <Text>Reply to: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
