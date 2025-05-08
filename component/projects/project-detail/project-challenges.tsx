export default function ProjectChallenges({ project }: { project: any }) {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute right-1/3 bottom-0 h-80 w-80 rounded-full bg-gradient-to-t from-slate-200 to-slate-300" />
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-gradient-to-b from-slate-200 to-slate-300" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-amber-500"></span>
            Challenges & Solutions
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Overcoming Project Challenges
          </h2>
          <p className="mb-12 text-lg text-slate-600">
            Developing a comprehensive pharmacy management system presented several unique challenges that required
            innovative solutions.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-slate-900">Challenges</h3>
              <div className="space-y-6">
                {project.challenges.map((challenge: string, index: number) => (
                  <div key={index} className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm">
                    <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                      {index + 1}
                    </div>
                    <h4 className="mb-2 text-lg font-semibold text-slate-900">
                      {challenge.split(":")[0] || "Challenge"}
                    </h4>
                    <p className="text-slate-600">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-2xl font-bold text-slate-900">Solutions</h3>
              <div className="space-y-6">
                {project.solutions.map((solution: string, index: number) => (
                  <div key={index} className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm">
                    <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      {index + 1}
                    </div>
                    <h4 className="mb-2 text-lg font-semibold text-slate-900">
                      {solution.split(":")[0] || "Solution"}
                    </h4>
                    <p className="text-slate-600">{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-xl border border-slate-100 bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold text-slate-900">Development Process</h3>
            <p className="mb-6 text-lg text-slate-600">
              Our team followed a structured approach to overcome these challenges, working closely with pharmacy
              professionals throughout the development process.
            </p>
            <div className="grid gap-6 md:grid-cols-4">
              {[
                {
                  phase: "Discovery",
                  description: "Extensive research and stakeholder interviews to understand requirements",
                },
                {
                  phase: "Design",
                  description: "User-centered design process with multiple iterations and testing",
                },
                {
                  phase: "Development",
                  description: "Agile development with two-week sprints and regular client reviews",
                },
                {
                  phase: "Deployment",
                  description: "Phased rollout with comprehensive training and support",
                },
              ].map((phase, index) => (
                <div key={index} className="rounded-lg bg-slate-50 p-4 text-center">
                  <div className="mb-2 text-lg font-semibold text-slate-900">{phase.phase}</div>
                  <p className="text-sm text-slate-600">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
