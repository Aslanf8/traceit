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
import { Check } from "lucide-react";

export default function DemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    businessType: "",
    employees: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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

    // Send form data to Formspree
    fetch("https://formspree.io/f/xdkewava", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setIsSubmitting(false);
          setIsSubmitted(true);
          setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            businessType: "",
            employees: "",
            message: "",
          });
        } else {
          alert("Oops! There was a problem submitting the form.");
          setIsSubmitting(false);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Oops! There was a problem submitting the form.");
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <section className="py-16 md:py-24 bg-[#00bf63]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Request a Demo
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how TraceIT can simplify your CFIA traceability compliance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Request a Demo?</h2>
              <p className="text-gray-600 mb-8">
                My personalized demo will show you exactly how TraceIT can
                address your specific CFIA compliance needs. You'll see:
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <Check className="h-5 w-5 text-[#00bf63]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Real-world Scenarios</h3>
                    <p className="text-gray-600">
                      I'll show you how TraceIT handles actual scenarios
                      relevant to your business type.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <Check className="h-5 w-5 text-[#00bf63]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      User-friendly Interface
                    </h3>
                    <p className="text-gray-600">
                      Experience the simplicity of TraceIT's design that
                      requires minimal training.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <Check className="h-5 w-5 text-[#00bf63]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      CFIA Compliance Features
                    </h3>
                    <p className="text-gray-600">
                      See exactly how TraceIT addresses each aspect of the CFIA
                      traceability requirements.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <Check className="h-5 w-5 text-[#00bf63]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      Implementation Process
                    </h3>
                    <p className="text-gray-600">
                      Understand how quickly and easily you can get up and
                      running with TraceIT.
                    </p>
                  </div>
                </li>
              </ul>

              <Card className="bg-[#00bf63]/5 border-[#00bf63]/20">
                <CardHeader className="pb-2">
                  <CardTitle>What to Expect</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-2">
                    After submitting this form, I'll contact you within 1
                    business day to schedule your personalized demo.
                  </p>
                  <p className="text-sm text-gray-600">
                    The demo typically takes 30-45 minutes and can be conducted
                    via video conference at a time that's convenient for you.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              {isSubmitted ? (
                <Card className="bg-green-50 border-green-100">
                  <CardHeader>
                    <CardTitle>Demo Request Received!</CardTitle>
                    <CardDescription>
                      Thank you for your interest in TraceIT. I'll contact you
                      within 1 business day to schedule your personalized demo.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      In the meantime, you might want to explore the features
                      page to learn more about how TraceIT addresses CFIA
                      requirements.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      className="mr-2 bg-[#00bf63] hover:bg-[#00bf63]/80"
                    >
                      Request Another Demo
                    </Button>
                    <Button
                      variant="outline"
                      asChild
                      className="border-[#00bf63] text-[#00bf63]"
                    >
                      <a href="/features">Explore Features</a>
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>Schedule Your Demo</CardTitle>
                    <CardDescription>
                      Fill out the form below to request a personalized
                      demonstration of TraceIT.
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
                            required
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
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="businessType">Business Type</Label>
                          <select
                            id="businessType"
                            name="businessType"
                            value={formData.businessType}
                            onChange={handleChange}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            required
                          >
                            <option value="">Select Business Type</option>
                            <option value="processor">Food Processor</option>
                            <option value="manufacturer">
                              Food Manufacturer
                            </option>
                            <option value="distributor">
                              Food Distributor
                            </option>
                            <option value="importer">Food Importer</option>
                            <option value="exporter">Food Exporter</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="employees">Number of Employees</Label>
                          <select
                            id="employees"
                            name="employees"
                            value={formData.employees}
                            onChange={handleChange}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            required
                          >
                            <option value="">Select Size</option>
                            <option value="1-10">1-10</option>
                            <option value="11-50">11-50</option>
                            <option value="51-200">51-200</option>
                            <option value="201+">201+</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">
                          Specific Interests or Questions
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell me about your specific CFIA compliance challenges or any questions you have..."
                          className="min-h-32"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-[#00bf63] hover:bg-[#00bf63]/80"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Request Demo"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-16 bg-[#00bf63]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              What My Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <p className="italic text-gray-600 mb-4">
                    "After seeing the demo, we were convinced that TraceIT was
                    the right solution for us. Implementation was smooth, and
                    now our CFIA compliance is completely under control."
                  </p>
                  <p className="font-medium">Sarah J., Operations Manager</p>
                  <p className="text-sm text-gray-500">
                    Food Processing Company
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="italic text-gray-600 mb-4">
                    "The demo showed us exactly how TraceIT would work for our
                    specific import/export needs. The system is as user-friendly
                    as demonstrated, and our team picked it up quickly."
                  </p>
                  <p className="font-medium">Michael T., Compliance Director</p>
                  <p className="text-sm text-gray-500">
                    Food Import/Export Business
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
