export default function PrivacyPolicy() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700">
              Last Updated: {new Date().toISOString().split("T")[0]}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              1. Introduction
            </h2>
            <p>
              TraceIT ("we," "our," or "us") respects your privacy and is
              committed to protecting your personal information. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you use our website and services.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              2. Information We Collect
            </h2>
            <p>
              We may collect information about you in various ways, including:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>
                <strong>Personal Information:</strong> Name, email address,
                phone number, company information, and other contact details you
                provide when registering for our services.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you access
                and use our website and services.
              </li>
              <li>
                <strong>Technical Data:</strong> IP address, browser type,
                device information, cookies, and similar tracking technologies.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              3. How We Use Your Information
            </h2>
            <p>
              We may use the information we collect for various purposes,
              including:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Providing, maintaining, and improving our services</li>
              <li>Processing transactions and sending related information</li>
              <li>Responding to your requests and inquiries</li>
              <li>Sending administrative messages and updates</li>
              <li>
                Marketing and promotional communications (subject to your
                preferences)
              </li>
              <li>Analyzing usage patterns to enhance user experience</li>
              <li>
                Protecting our rights, property, or safety, and that of our
                users
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              4. Information Sharing and Disclosure
            </h2>
            <p>We may share your information with:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>
                <strong>Service Providers:</strong> Third-party vendors who
                perform services on our behalf.
              </li>
              <li>
                <strong>Business Transfers:</strong> If we are involved in a
                merger, acquisition, or sale of assets.
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to
                protect our rights.
              </li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              5. Data Security
            </h2>
            <p>
              We implement reasonable security measures to protect your personal
              information. However, no method of transmission over the Internet
              or electronic storage is 100% secure, and we cannot guarantee
              absolute security.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              6. Your Choices and Rights
            </h2>
            <p>
              Depending on your location, you may have certain rights regarding
              your personal information, including:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Accessing, correcting, or deleting your information</li>
              <li>Withdrawing consent for processing your information</li>
              <li>Objecting to certain processing activities</li>
              <li>Data portability</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information
              provided below.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              7. Cookies and Tracking Technologies
            </h2>
            <p>
              We use cookies and similar tracking technologies to collect
              information about your browsing activities. You can instruct your
              browser to refuse all cookies or to indicate when a cookie is
              being sent.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              8. Children's Privacy
            </h2>
            <p>
              Our services are not intended for individuals under the age of 18.
              We do not knowingly collect personal information from children.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              9. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. The updated
              version will be indicated by an updated "Last Updated" date. We
              encourage you to review this Privacy Policy periodically.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy,
              please contact us at:
            </p>
            <p>[Contact Information]</p>

            <p className="mt-8 text-sm text-gray-500">
              This Privacy Policy is intended to comply with our obligations
              under applicable privacy laws but does not create any rights or
              obligations beyond those required by law.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
