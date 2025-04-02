export default function Story() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Development Story
            </h2>
            <p className="text-lg text-gray-600">
              Three years of dedicated development for Canadian food businesses
            </p>
          </div>

          <div className="bg-white p-8 border border-gray-200 rounded-lg shadow-md">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-blue-600 mb-2">
                  The Challenge
                </h3>
                <p className="text-gray-700">
                  When the CFIA introduced the Safe Food for Canadians
                  Regulations, many small and medium food businesses were left
                  scrambling to find affordable traceability solutions that met
                  all requirements without requiring major operational changes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-600 mb-2">
                  The Journey
                </h3>
                <p className="text-gray-700 mb-4">
                  Over three years, we worked closely with Canadian food
                  businesses across multiple sectors:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Studying the exact CFIA requirements in detail</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      Understanding the unique challenges faced by SMEs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      Developing and iterating on TraceIT through multiple
                      versions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      Gathering feedback from actual users to refine the system
                    </span>
                  </li>
                </ul>
                <p className="text-gray-700">
                  The result is a software solution that's perfectly tailored to
                  the needs of Canadian food businesses that need to comply with
                  CFIA traceability regulations.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-600 mb-2">
                  The Result
                </h3>
                <p className="text-gray-700">
                  Today, TraceIT offers a simple, effective, and affordable
                  solution that addresses every aspect of CFIA traceability
                  compliance. Our users report easier inspections, peace of
                  mind, and less time spent on paperwork.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <blockquote className="text-gray-700 italic relative">
                  <span className="text-4xl text-blue-200 absolute top-0 left-0">
                    "
                  </span>
                  <p className="ml-6">
                    We built TraceIT because we believe that food safety
                    compliance should be accessible to businesses of all sizes.
                    Every Canadian business deserves an affordable solution that
                    makes CFIA compliance straightforward.
                  </p>
                  <footer className="mt-4 text-right font-medium">
                    - The TraceIT Development Team
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
