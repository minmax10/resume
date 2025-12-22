interface ProjectProps {
  payload: {
    title: string
    list: Array<{
      title: string
      startDate: string
      endDate: string
      description: string
      skillKeywords: string[]
      achievements: string[]
    }>
  }
}

export default function Project({ payload }: ProjectProps) {
  return (
    <div className="container list-container">
      <h3 id="experience">{payload.title}</h3>
      {payload.list.map((project, index) => (
        <div key={index} className="row clearfix layout layout-left border-no">
          <div className="col-xs-12 col-sm-4 col-md-3 col-print-12 details">
            <h4 id={project.title.toLowerCase().replace(/\s+/g, '-')}>{project.title}</h4>
            <p><b>{project.startDate} ~ {project.endDate}</b></p>
          </div>
          <div className="col-xs-12 col-sm-8 col-md-9 col-print-12 content">
            <p>{project.description}</p>
            <ul>
              {project.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
            {project.skillKeywords && project.skillKeywords.length > 0 && (
              <p><strong>사용 기술</strong><br />{project.skillKeywords.join(', ')}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
