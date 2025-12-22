interface ExperienceProps {
  payload: {
    title: string
    list: Array<{
      title: string
      position: string
      startDate: string
      endDate: string
      achievements: string[]
      skillKeywords?: string[]
    }>
  }
}

export default function Experience({ payload }: ExperienceProps) {
  return (
    <div className="container list-container">
      <h3 id="company">{payload.title}</h3>
      {payload.list.map((exp, index) => (
        <div key={index} className="row clearfix layout layout-left border-no">
          <div className="col-xs-12 col-sm-4 col-md-3 col-print-12 details">
            <h4 id={exp.title.toLowerCase().replace(/\s+/g, '-')}>{exp.title}</h4>
            <p><b>{exp.position}</b></p>
            <p>{exp.startDate} ~ {exp.endDate}</p>
          </div>
          <div className="col-xs-12 col-sm-8 col-md-9 col-print-12 content">
            <p><strong>주요 업무</strong></p>
            <ul>
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
            {exp.skillKeywords && exp.skillKeywords.length > 0 && (
              <p><strong>Skill Keywords</strong><br />{exp.skillKeywords.join('')}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
