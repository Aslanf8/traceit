"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
export default function FeaturesPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-[#00bf63]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              TraceIT Features
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I designed every feature of TraceIT to address a specific CFIA
              traceability requirement, making compliance simple for Canadian
              food businesses like my mom's.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="traceability" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-3xl grid-cols-3">
                <TabsTrigger value="traceability">Traceability</TabsTrigger>
                <TabsTrigger value="identification">
                  Food Identification
                </TabsTrigger>
                <TabsTrigger value="records">Records & Reporting</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="traceability" className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    One Step Back Traceability
                  </h2>
                  <p className="text-gray-600 mb-6">
                    CFIA regulations require you to document all food
                    commodities you receive, including ingredients and food
                    animals. TraceIT makes this simple:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#00bf63] mr-2">✓</span>
                      <span>Easy supplier management with contact details</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00bf63] mr-2">✓</span>
                      <span>
                        Quick input of received products with date stamps
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00bf63] mr-2">✓</span>
                      <span>
                        Automatic lot code tracking for incoming materials
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00bf63] mr-2">✓</span>
                      <span>
                        Barcode scanner compatibility for fast receiving
                      </span>
                    </li>
                  </ul>
                </div>
                {/* <div className="bg-gray-200 rounded-lg p-8 text-center h-64 flex items-center justify-center">
                  <p className="text-gray-600">
                    Screenshot of supplier tracking interface
                  </p>
                </div> */}
                <Image
                  src="/wck-dashboard-example.png"
                  alt="TraceIT Dashboard"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* <div className="order-2 md:order-1 bg-gray-200 rounded-lg p-8 text-center h-64 flex items-center justify-center">
                  <p className="text-gray-600">
                    Screenshot of customer tracking interface
                  </p>
                </div> */}
                <Image
                  src="/wck-dashboard-example.png"
                  alt="TraceIT Dashboard"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="order-1 md:order-2">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    One Step Forward Traceability
                  </h2>
                  <p className="text-gray-600 mb-6">
                    CFIA requires documenting where your products go. With
                    TraceIT, you can:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#00bf63] mr-2">✓</span>
                      <span>
                        Manage customer database with detailed contact
                        information
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00bf63] mr-2">✓</span>
                      <span>
                        Track product shipments by lot code and destination
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00bf63] mr-2">✓</span>
                      <span>
                        Generate shipping documentation with traceability
                        information
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00bf63] mr-2">✓</span>
                      <span>
                        Link outgoing products to specific incoming ingredients
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="identification" className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Food Product Identification
                  </h2>
                  <p className="text-gray-600 mb-6">
                    CFIA requires clear identification of food products. TraceIT
                    provides:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#00bf63] mr-2">✓</span>
                      <span>
                        Automated lot code generation based on date, production
                        line, or custom rules
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00bf63] mr-2">✓</span>
                      <span>
                        Label templates with all required CFIA identification
                        information
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00bf63] mr-2">✓</span>
                      <span>
                        QR code and barcode generation for easier tracking
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00bf63] mr-2">✓</span>
                      <span>
                        Link between raw materials and finished product
                        identifiers
                      </span>
                    </li>
                  </ul>
                </div>
                {/* <div className="bg-[#00bf63]/5 rounded-lg p-8 text-center h-64 flex items-center justify-center">
                  <p className="text-gray-600">
                    Screenshot of food identification system
                  </p>
                </div> */}
                <Image
                  src="/wck-scanning-prod.png"
                  alt="TraceIT Dashboard"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </TabsContent>

            <TabsContent value="records" className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Record Keeping & Reporting
                  </h2>
                  <p className="text-gray-600 mb-6">
                    CFIA requires accessible records for at least 2 years.
                    TraceIT offers:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#00bf63] mr-2">✓</span>
                      <span>
                        Secure cloud storage of all traceability records
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00bf63] mr-2">✓</span>
                      <span>
                        One-click report generation for CFIA inspections
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00bf63] mr-2">✓</span>
                      <span>
                        Mock recall simulation tools to test your system
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00bf63] mr-2">✓</span>
                      <span>
                        Data backups and export functions for redundancy
                      </span>
                    </li>
                  </ul>
                </div>
                {/* <div className="bg-[#00bf63]/5 rounded-lg p-8 text-center h-64 flex items-center justify-center">
                  <p className="text-gray-600">
                    Screenshot of reporting dashboard
                  </p>
                </div> */}
                <Image
                  src="/wck-reportig.png"
                  alt="TraceIT Dashboard"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Additional Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>User Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Multiple user accounts with permission controls to ensure
                    data security.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Mobile Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Access TraceIT from any device with responsive design for
                    warehouse use.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Email Notifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Automatic alerts for expiring products, incomplete records,
                    and more.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Import/Export</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Easy integration with existing systems via CSV and Excel
                    data transfers.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Product Catalog</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Maintain a complete catalog of your products with
                    specification details.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Training Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Built-in tutorials and guides to help your team use the
                    system effectively.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#00bf63]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Ready to simplify your CFIA compliance?
            </h2>

            <p className="text-xl text-black mb-8">
              Schedule a demo to see how TraceIT can work for your specific
              business needs.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-white text-[#00bf63] hover:bg-[#00bf63]/10"
            >
              <Link href="/demo">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
