import Image from "next/image";
import { Linkedin, Twitter, Mail } from "lucide-react";

export default function Team() {
  const teamMembers = [
    {
      name: "Baraka Nampellah",
      role: "Software Engineer",
      bio: "5+ years of experience in technology leadership and business strategy.",
      image: "/nampellah.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
    {
      name: "Daniel Ntunduye",
      role: "Software Engineer",
      bio: "Expert in cloud architecture and emerging technologies.",
      image: "/danny.jpeg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
    {
      name: "Moses Mbaraka",
      role: "Software Engineer",
      bio: "Full-stack developer specializing in scalable web applications.",
      image: "/moses.jpeg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
    {
      name: "Suleiman Mustapha",
      role: "Software Engineer",
      bio: "Backend specialist focused on scalable systems and performance optimization.",
      image: "/sule.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
  ];

  return (
    <section className='relative overflow-hidden bg-slate-50 py-20'>
      {/* Background subtle pattern */}
      <div className='absolute inset-0 z-0 opacity-[0.03]'>
        <div className='absolute right-1/4 top-0 h-80 w-80 rounded-full bg-gradient-to-b from-slate-200 to-slate-300' />
        <div className='absolute left-1/3 bottom-0 h-64 w-64 rounded-full bg-gradient-to-t from-slate-200 to-slate-300' />
      </div>

      <div className='container relative z-10 mx-auto px-4'>
        <div className='mx-auto max-w-2xl text-center'>
          <div className='mb-3 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm'>
            <span className='mr-2 inline-block h-2 w-2 rounded-full bg-blue-500'></span>
            Our Experts
          </div>
          <h2 className='mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl'>
            Meet Our Team
          </h2>
          <p className='mb-10 text-lg text-slate-600'>
            Our talented team of experts brings together diverse skills and
            experience to deliver exceptional technology solutions.
          </p>
        </div>

        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className='group relative overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition-all hover:shadow-md'
            >
              <div className='aspect-square overflow-hidden'>
                <Image
                  src={member.image || "/placeholder.svg"}
                  width={400}
                  height={400}
                  alt={member.name}
                  className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-semibold text-slate-900'>
                  {member.name}
                </h3>
                <p className='mb-3 text-blue-600'>{member.role}</p>
                <p className='mb-4 text-sm text-slate-600'>{member.bio}</p>
                <div className='flex space-x-3'>
                  <a
                    href={member.social.linkedin}
                    className='inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:bg-slate-50 hover:text-blue-600'
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className='h-4 w-4' />
                  </a>
                  <a
                    href={member.social.twitter}
                    className='inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:bg-slate-50 hover:text-blue-600'
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter className='h-4 w-4' />
                  </a>
                  <a
                    href={member.social.email}
                    className='inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:bg-slate-50 hover:text-blue-600'
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className='h-4 w-4' />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
