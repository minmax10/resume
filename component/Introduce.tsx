import Image from 'next/image'
import profilePayload from '@/payload/profile'

interface IntroduceProps {
  payload: {
    title: string
    contents: string
  }
}

export default function Introduce({ payload }: IntroduceProps) {
  return (
    <div className="container intro-container">
      <h3 id="about-me">{payload.title}</h3>
      <div className="row clearfix">
        <div className="col-xs-12 col-sm-4 col-md-3 no-print">
          <span className="profile-img" style={{ backgroundImage: `url(${profilePayload.image})` }}></span>
        </div>
        <div className="col-xs-12 col-sm-8 col-md-9 col-print-12">
          {payload.contents.split('\n\n').map((paragraph, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: paragraph.replace(/\n/g, '<br />') }} />
          ))}
        </div>
      </div>
    </div>
  )
}
