import ContactHero from "../../../component/contact/contact-hero"
import ContactForm from "../../../component/contact/contact-form"
import ContactInfo from "../../../component/contact/contact-info"
import OfficeLocations from "../../../component/contact/office-locations"
import ContactFAQ from "../../../component/contact/contact-faq"
import ContactCTA from "../../../component/contact/contact-cta"

export const metadata = {
  title: "Contact Us | BlueTech",
  description: "Get in touch with our team to discuss your technology needs and how we can help your business grow.",
}

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <OfficeLocations />
      <ContactFAQ />
      <ContactCTA />
    </main>
  )
}
