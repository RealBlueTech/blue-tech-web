import Image from "next/image";

export default function CompanyStory() {
  const milestones = [
    {
      year: "2019",
      title: "Founded",
      description:
        "BlueTech was founded with a vision to help businesses leverage technology for growth.",
    },
    {
      year: "2020",
      title: "Expansion",
      description:
        "Expanded our services to include cloud solutions and mobile app development.",
    },
    {
      year: "2021",
      title: "Global Reach",
      description:
        "Collabolate with partners in  Japan to serve our growing international client base.",
    },
    {
      year: "2022",
      title: "Innovation Lab",
      description: "Explore emerging technologies like AI and blockchain.",
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description:
        "Recognized as a leader in technology solutions by industry analysts.",
    },
    {
      year: "Today",
      title: "Continued Growth",
      description:
        "Continuing to innovate and expand our capabilities to meet evolving client needs.",
    },
  ];

  return (
    <section className='relative overflow-hidden bg-slate-50 py-20'>
      {/* Background subtle pattern */}
      <div className='absolute inset-0 z-0 opacity-[0.03]'>
        <div className='absolute left-1/4 bottom-0 h-80 w-80 rounded-full bg-gradient-to-t from-slate-200 to-slate-300' />
        <div className='absolute right-1/3 top-0 h-64 w-64 rounded-full bg-gradient-to-b from-slate-200 to-slate-300' />
      </div>

      <div className='container relative z-10 mx-auto px-4'>
        <div className='mx-auto max-w-3xl text-center'>
          <h2 className='mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl'>
            Our Journey
          </h2>
          <p className='mb-12 text-lg text-slate-600'>
            From our humble beginnings to becoming a leading technology
            solutions provider, our journey has been defined by innovation,
            growth, and a relentless focus on client success.
          </p>
        </div>

        <div className='relative mx-auto max-w-4xl'>
          {/* Timeline line */}
          <div className='absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 transform bg-slate-200'></div>

          {/* Timeline items */}
          <div className='space-y-12'>
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`w-full max-w-sm rounded-xl border border-slate-100 bg-white p-6 shadow-sm md:w-5/12 ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className='absolute left-1/2 top-6 flex h-10 w-10 -translate-x-1/2 transform items-center justify-center rounded-full border-4 border-white bg-blue-500 text-white shadow-md'>
                    <span className='text-xs font-bold'>{milestone.year}</span>
                  </div>
                  <h3 className='mb-2 text-xl font-semibold text-slate-900'>
                    {milestone.title}
                  </h3>
                  <p className='text-slate-600'>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='mx-auto mt-20 max-w-5xl rounded-xl bg-white p-8 shadow-sm'>
          <div className='grid gap-8 md:grid-cols-2 md:gap-12'>
            <div>
              <h3 className='mb-4 text-2xl font-bold text-slate-900'>
                Our Founding Story
              </h3>
              <p className='mb-4 text-slate-600'>
                BlueTech was founded in 2008 by a group of technology
                enthusiasts who saw the potential for businesses to transform
                through digital innovation. What began as a small web
                development agency quickly evolved into a comprehensive
                technology solutions provider.
              </p>
              <p className='text-slate-600'>
                Our founders' vision was simple: to make cutting-edge technology
                accessible to businesses of all sizes, helping them compete and
                thrive in an increasingly digital world. This vision continues
                to guide us today.
              </p>
            </div>
            <div className='relative aspect-video overflow-hidden rounded-lg'>
              <Image
                src='/images/company-founders.jpg'
                fill
                sizes='(max-width: 768px) 100vw, 600px'
                alt='BlueTech founders'
                className='object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
