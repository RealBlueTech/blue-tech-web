import Image from "next/image";

export default function Partners() {
  const partners = [
    {
      name: "Partner 1",
      image:
        "data:image/jpeg;base64,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",
    },
    { name: "Partner 2", image: "/sms.png" },
    { name: "Partner 3", image: "/placeholder.svg?height=80&width=200" },
    { name: "Partner 4", image: "/placeholder.svg?height=80&width=200" },
    { name: "Partner 5", image: "/placeholder.svg?height=80&width=200" },
    { name: "Partner 6", image: "/placeholder.svg?height=80&width=200" },
  ];

  return (
    <section className='relative overflow-hidden bg-white py-20'>
      {/* Background subtle pattern */}
      <div className='absolute inset-0 z-0 opacity-[0.03]'>
        <div className='absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-gradient-to-t from-slate-200 to-slate-300' />
        <div className='absolute left-1/3 top-0 h-64 w-64 rounded-full bg-gradient-to-b from-slate-200 to-slate-300' />
      </div>

      <div className='container relative z-10 mx-auto px-4'>
        <div className='mx-auto max-w-3xl text-center'>
          <div className='mb-3 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm'>
            <span className='mr-2 inline-block h-2 w-2 rounded-full bg-blue-500'></span>
            Trusted By
          </div>
          <h2 className='mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl'>
            Our Partners & Clients
          </h2>
          <p className='mb-12 text-lg text-slate-600'>
            We're proud to work with leading organizations across industries to
            deliver exceptional technology solutions.
          </p>
        </div>

        <div className='mx-auto max-w-6xl'>
          <div className='flex flex-wrap justify-center items-center gap-10 py-8'>
            {partners.map((partner, index) => (
              <div
                key={index}
                className='flex items-center justify-center h-32 w-48 transition-transform duration-200 hover:scale-105'
                title={partner.name}
              >
                <Image
                  src={partner.image || "/placeholder.svg"}
                  width={180}
                  height={100}
                  alt={partner.name}
                  className='object-contain h-full w-full'
                />
              </div>
            ))}
          </div>

          <div className='mt-16 rounded-xl border border-slate-100 bg-white p-8 shadow-sm'>
            <div className='grid gap-8 md:grid-cols-2'>
              <div>
                <h3 className='mb-4 text-2xl font-bold text-slate-900'>
                  Industry Expertise
                </h3>
                <p className='mb-6 text-slate-600'>
                  We've worked with clients across a wide range of industries,
                  developing deep expertise in their unique challenges and
                  opportunities.
                </p>
                <div className='grid grid-cols-2 gap-4'>
                  {[
                    "Healthcare",
                    "Finance",
                    "Manufacturing",
                    "Retail",
                    "Education",
                    "Logistics",
                    "Non-profit",
                    "Government",
                  ].map((industry, index) => (
                    <div
                      key={index}
                      className='rounded-lg border border-slate-100 bg-slate-50 p-3 text-center text-slate-700'
                    >
                      {industry}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className='mb-4 text-2xl font-bold text-slate-900'>
                  Global Reach
                </h3>
                <p className='mb-6 text-slate-600'>
                  With clients and partners around the world, we deliver
                  technology solutions that transcend geographical boundaries.
                </p>
                <div className='relative aspect-[4/3] overflow-hidden rounded-lg'>
                  <Image
                    src='https://images.unsplash.com/photo-1700845299121-f5530c510f0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTgyfHxnbG9iYWwlMjByZWFjaHxlbnwwfHwwfHx8MA%3D%3D'
                    fill
                    sizes='(max-width: 768px) 100vw, 400px'
                    alt='Global map with client locations'
                    className='object-cover'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
