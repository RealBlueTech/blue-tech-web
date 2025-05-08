export default function ProjectOverview({ project }: { project: any }) {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-gradient-to-t from-slate-200 to-slate-300" />
        <div className="absolute left-1/3 top-0 h-64 w-64 rounded-full bg-gradient-to-b from-slate-200 to-slate-300" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
            Project Overview
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">About This Project</h2>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="rounded-xl border border-slate-100 bg-white p-8 shadow-sm">
            <p className="mb-6 text-lg leading-relaxed text-slate-700">{project.longDescription}</p>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-semibold text-slate-900">Project Scope</h3>
                <p className="text-slate-600">
                  This comprehensive pharmacy management system was designed to modernize operations for pharmacies of
                  all sizes, from independent stores to large chains. The system provides end-to-end management of all
                  pharmacy processes, enhancing efficiency and patient care.
                </p>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-semibold text-slate-900">Our Approach</h3>
                <p className="text-slate-600">
                  We employed an agile development methodology, working closely with pharmacy professionals to ensure
                  the system met real-world needs. The solution was built with scalability in mind, allowing for easy
                  expansion and integration with other healthcare systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
