import ServicesHero from "../../../component/services/services-hero"
import ServicesOverview from "../../../component/services/services-overview"
import ServiceDetails from "../../../component/services/service-details"
import ProcessSection from "../../../component/services/process-section"
import TechnologiesSection from "../../../component/services/technologies-section"
import ServicesFAQ from "../../../component/services/services-faq"
import ServicesTestimonials from "../../../component/services/services-testimonials"
import ServicesCTA from "../../../component/services/services-cta"

export const metadata = {
  title: "Services | BlueTech",
  description: "Explore our comprehensive technology services designed to help your business innovate and grow.",
}

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesOverview />
      <ServiceDetails />
      <ProcessSection />
      <TechnologiesSection />
      <ServicesFAQ />
      <ServicesTestimonials />
      <ServicesCTA />
    </main>
  )
}
