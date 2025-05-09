import Image from "next/image";
import { Linkedin, Twitter, Mail } from "lucide-react";

export default function TeamSection() {
  const leadershipTeam = [
    {
      name: "Baraka Nampellah",
      role: "Software Engineer",
      bio: "With over +5 years of experience in technology ",
      image: "/nampellah.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
    {
      name: "Daniel Ntudunye",
      role: "Software Engineer",
      bio: "Danny leads our technology strategy and innovation initiatives. His expertise in cloud architecture, AI, and emerging technologies helps our clients stay ahead of the curve.",
      image: "/danny.jpeg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
    {
      name: "Moses Mbaraka",
      role: "Fullstack Developer",
      bio: "Moses oversees our day-to-day operations, ensuring we deliver exceptional service to our clients. His focus on operational excellence has been key to our growth.",
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
      bio: "Suleiman specializes in backend development and system design, bringing scalable and secure solutions to complex technical challenges. His passion for clean code and performance optimization drives continuous improvement across our projects.",
      image: "/sule.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
  ];

  const departmentHeads = [
    {
      name: "Peter Jones",
      role: "Lead Developer",
      image: "/images/team/lead-dev.jpg",
    },
    {
      name: "Mary Brown",
      role: "Project Manager",
      image: "/images/team/project-manager.jpg",
    },
    {
      name: "David Wilson",
      role: "UX Director",
      image: "/images/team/ux-director.jpg",
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      image: "/images/team/marketing-director.jpg",
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
        <div className='mx-auto max-w-3xl text-center'>
          <div className='mb-3 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm'>
            <span className='mr-2 inline-block h-2 w-2 rounded-full bg-blue-500'></span>
            Our People
          </div>
          <h2 className='mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl'>
            Meet Our Team
          </h2>
          <p className='mb-12 text-lg text-slate-600'>
            Our talented team brings together diverse skills, experiences, and
            perspectives to deliver exceptional technology solutions for our
            clients.
          </p>
        </div>

        <div className='mx-auto max-w-6xl'>
          <h3 className='mb-8 text-2xl font-bold text-slate-900'>
            Leadership Team
          </h3>
          <div className='grid gap-8 md:grid-cols-3'>
            {leadershipTeam.map((member, index) => (
              <div
                key={index}
                className='rounded-xl border border-slate-100 bg-white shadow-sm transition-all hover:shadow-md'
              >
                <div className='aspect-square overflow-hidden rounded-t-xl'>
                  <Image
                    src={member.image || "/placeholder.svg"}
                    width={400}
                    height={400}
                    alt={member.name}
                    className='h-full w-full object-cover'
                  />
                </div>
                <div className='p-6'>
                  <h4 className='text-xl font-semibold text-slate-900'>
                    {member.name}
                  </h4>
                  <p className='mb-3 text-blue-600'>{member.role}</p>
                  <p className='mb-4 text-slate-600'>{member.bio}</p>
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

          <h3 className='mb-8 mt-16 text-2xl font-bold text-slate-900'>
            Department Heads
          </h3>
          <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-4'>
            {departmentHeads.map((member, index) => (
              <div
                key={index}
                className='rounded-xl border border-slate-100 bg-white p-4 text-center shadow-sm transition-all hover:shadow-md'
              >
                <div className='mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full'>
                  <Image
                    src={member.image || "/placeholder.svg"}
                    width={96}
                    height={96}
                    alt={member.name}
                    className='h-full w-full object-cover'
                  />
                </div>
                <h4 className='text-lg font-semibold text-slate-900'>
                  {member.name}
                </h4>
                <p className='text-blue-600'>{member.role}</p>
              </div>
            ))}
          </div>

          <div className='mt-12 rounded-xl border border-slate-100 bg-white p-8 shadow-sm'>
            <div className='flex flex-col items-center justify-between gap-6 md:flex-row'>
              <div>
                <h4 className='mb-2 text-xl font-semibold text-slate-900'>
                  Join Our Team
                </h4>
                <p className='text-slate-600'>
                  We're always looking for talented individuals to join our
                  growing team. Check out our current openings.
                </p>
              </div>
              <a
                href='/careers'
                className='inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2'
              >
                View Open Positions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
