export default function Story() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Story</h2>
          <p className="text-xl text-gray-600">
            How my mom's freeze-dried food business inspired TraceIT
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-[#00bf63] mb-2">
                  The Beginning
                </h3>
                <p className="text-gray-700">
                  Three years ago, I watched my mom struggle with CFIA
                  traceability requirements while running her freeze-dried food
                  business. Despite her passion for creating amazing products,
                  the administrative burden of compliance was taking precious
                  time away from what she loved doing.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#00bf63] mb-2">
                  The Problem
                </h3>
                <p className="text-gray-700">
                  My mom, like many small food business owners, was using
                  spreadsheets and paper records that were time-consuming and
                  error-prone. The existing software solutions were either too
                  expensive, too complex, or didn't address the specific needs
                  of small Canadian food operations.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#00bf63] mb-2">
                  The Solution
                </h3>
                <p className="text-gray-700">
                  With my software development background, I built the first
                  version of TraceIT specifically for her business. Over the
                  past three years, we've refined the system through three major
                  iterations, each time making it more intuitive and effective
                  based on real-world use in her daily operations.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#00bf63] mb-2">
                  The Mission
                </h3>
                <p className="text-gray-700">
                  Now that TraceIT has proven its value in my mom's business, I
                  want to help other small and medium Canadian food producers
                  navigate compliance without stress or excessive cost. I'm not
                  a big company—just one developer with a practical solution to
                  a real problem I've seen firsthand.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200 mt-6">
                <p className="italic text-gray-600">
                  "I created TraceIT to solve a problem my mom faced in her
                  freeze-dried food business. After seeing how much it helped
                  her, I knew other small food businesses in Canada could
                  benefit from it too."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
