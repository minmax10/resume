import Image from 'next/image'

interface ProfileProps {
  payload: {
    image: string
    name: string
    contact: Array<{
      type: string
      text: string
      href: string
    }>
    notice?: {
      title: string
      disables: string[]
    }
  }
}

export default function Profile({ payload }: ProfileProps) {
  return (
    <div className="container header-container">
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-8 header-left">
          <h1>{payload.name}</h1>
          <h2>AML/STR Specialist</h2>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 header-right">
          <ul className="icons no-print">
            {payload.contact.map((item, index) => {
              if (item.type === 'github' && item.href && item.href !== '[선택]') {
                return (
                  <li key={index}>
                    <a target="_blank" href={item.href} className="button button--sacnite button--round-l">
                      <i className="fab fa-github" title="Github link"></i>
                    </a>
                  </li>
                )
              }
              if (item.type === 'blog' && item.href && item.href !== '[선택]') {
                return (
                  <li key={index}>
                    <a href={item.href} target="_blank" className="button button--sacnite button--round-l">
                      <i className="fas fa-blog" title="Blog"></i>
                    </a>
                  </li>
                )
              }
              return null
            })}
          </ul>
          {payload.contact.map((item, index) => {
            if (item.type === 'email') {
              return (
                <p key={index}>
                  Email: <a href={item.href} target="_blank">{item.text}</a>
                </p>
              )
            }
            if (item.type === 'github' || item.type === 'blog') {
              return (
                <p key={index}>
                  {item.type === 'github' ? 'Web' : 'Blog'}:{' '}
                  <a href={item.href} target="_blank" className="">
                    {item.text}
                  </a>
                </p>
              )
            }
            return null
          })}
        </div>
      </div>
    </div>
  )
}
