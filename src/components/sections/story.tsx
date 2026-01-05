export default function Story() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Story</h2>
          <p className="text-xl text-gray-600">
            How my parents' freeze-dried food business inspired TraceIT
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
                  Three years ago, my parents started a small freeze-dried food
                  business. As they grew, they found themselves spending more
                  and more time managing the CFIA traceability requirements
                  instead of running their business. The administrative work was
                  taking up nearly 40% of their weekly hours.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#00bf63] mb-2">
                  The Problem
                </h3>
                <p className="text-gray-700">
                  My parents tracked everything using Excel spreadsheets and
                  paper logs. Each production batch required manually copying
                  ingredient lot numbers, updating multiple files, and
                  cross-referencing previous records. When CFIA requested a mock
                  recall, it took them almost two full days to compile all the
                  necessary information. When they looked for software
                  solutions, they found that traditional options were
                  prohibitively expensive for a small food business. Most small
                  producers either can't justify the expense or end up paying
                  for complex systems with features they'll never use. This huge
                  gap between what regulators require and what small businesses
                  can practically implement is exactly what I address. With my
                  professional experience in AI and LLMs, combined with having
                  built TraceIT for my parents, I can now build custom solutions
                  10x faster and more affordably than traditional software
                  development.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#00bf63] mb-2">
                  The Solution
                </h3>
                <p className="text-gray-700">
                  I built the first version of TraceIT over a weekend to help
                  track their ingredient lots and production batches. It was
                  basic but immediately cut their paperwork time in half. Over
                  three years, we've improved it based on their daily use -
                  adding barcode scanning, one-click recall reports, and
                  supplier management. What used to take days now takes minutes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#00bf63] mb-2">
                  The Mission
                </h3>
                <p className="text-gray-700">
                  Now that TraceIT has been tested in a real business for three
                  years, I'm making it available to other Canadian food
                  producers who face the same challenges. I'm not a large
                  company with investors or sales teams - just someone who
                  solved a problem and wants to share that solution with others
                  who might find it useful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
