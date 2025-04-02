"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <>
      <section className="py-16 md:py-24 bg-[#00bf63]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Me</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about TraceIT or CFIA compliance? I'm here to help.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                I'm ready to answer your questions about TraceIT and help you
                understand how my solution can address your specific CFIA
                compliance needs.
              </p>

              <div className="space-y-6">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Email Me</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      <a
                        href="mailto:aslan.farboud@gmail.com"
                        className="text-[#00bf63] hover:underline"
                      >
                        aslan.farboud@gmail.com
                      </a>
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              {isSubmitted ? (
                <Card className="bg-green-50 border-green-100">
                  <CardHeader>
                    <CardTitle>Thanks for reaching out!</CardTitle>
                    <CardDescription>
                      I've received your message and will get back to you within
                      1 business day.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-2 bg-[#00bf63] hover:bg-[#00bf63]/80"
                    >
                      Send Another Message
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>Send Me a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and I'll respond within 1 business
                      day.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Your Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Smith"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your Company"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(123) 456-7890"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Your Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell me about your business and your CFIA compliance needs..."
                          className="min-h-32"
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-[#00bf63] hover:bg-[#00bf63]/80"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#00bf63]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Rather See TraceIT in Action?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Request a demo and I'll show you how TraceIT can help your
              business meet CFIA traceability requirements.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#00bf63] hover:bg-[#00bf63]/80"
            >
              <a href="/demo">Request a Demo</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
