import Head from 'next/head'
import Profile from '@/component/Profile'
import Introduce from '@/component/Introduce'
import Skill from '@/component/Skill'
import Experience from '@/component/Experience'
import Project from '@/component/Project'
import Education from '@/component/Education'
import Footer from '@/component/Footer'

import globalPayload from '@/payload/_global'
import profilePayload from '@/payload/profile'
import introducePayload from '@/payload/introduce'
import skillPayload from '@/payload/skill'
import experiencePayload from '@/payload/experience'
import projectPayload from '@/payload/project'
import educationPayload from '@/payload/education'
import footerPayload from '@/payload/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>{globalPayload.title}</title>
        <meta name="description" content={globalPayload.description} />
        <meta name="author" content={globalPayload.author} />
        <link rel="icon" href={globalPayload.favicon} />
      </Head>

      <div className="resume-container">
        <div className="resume-sidebar">
          <Profile payload={profilePayload} />
        </div>
        <div className="resume-content">
          {!introducePayload.disable && <Introduce payload={introducePayload} />}
          {!skillPayload.disable && <Skill payload={skillPayload} />}
          {!experiencePayload.disable && <Experience payload={experiencePayload} />}
          {!projectPayload.disable && <Project payload={projectPayload} />}
          {!educationPayload.disable && <Education payload={educationPayload} />}
          <Footer payload={footerPayload} />
        </div>
      </div>
    </>
  )
}

