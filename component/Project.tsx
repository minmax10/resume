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
    <section className="section">
      <h2>{payload.title}</h2>
      {payload.list.map((project, index) => (
        <div key={index} style={{ marginBottom: '30px' }}>
          <h3>{project.title}</h3>
          <p><strong>{project.startDate} ~ {project.endDate}</strong></p>
          <p>{project.description}</p>
          <ul>
            {project.achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
          {project.skillKeywords.length > 0 && (
            <p style={{ marginTop: '10px' }}>
              사용 기술: {project.skillKeywords.map((keyword, i) => (
                <span key={i}>
                  <mark>{keyword}</mark>
                  {i < project.skillKeywords.length - 1 && ', '}
                </span>
              ))}
            </p>
          )}
        </div>
      ))}
    </section>
  )
}

