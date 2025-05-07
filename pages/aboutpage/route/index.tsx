import AboutHero from "../../../component/about/about-hero"
import CompanyStory from "../../../component/about/company-story"
import MissionVision from "../../../component/about/mission-vision"
import TeamSection from "../../../component/about/team-section"
import CompanyCulture from "../../../component/about/company-culture"
import Achievements from "../../../component/about/achievements"
import Partners from "../../../component/about/partners"
import AboutCTA from "../../../component/about/about-cta"

export const metadata = {
    title: "About Us | BlueTech",
    description: "Learn about our company, our mission, and the team behind BlueTech.",
  }
  
  export default function AboutPage() {
    return (
      <main>
        <AboutHero />
        <CompanyStory />
        <MissionVision />
        <TeamSection />
        <CompanyCulture />
        <Achievements />
        <Partners />
        <AboutCTA />
      </main>
    )
  }
  