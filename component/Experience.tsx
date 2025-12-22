interface ExperienceProps {
  payload: {
    title: string
    list: Array<{
      title: string
      position: string
      startDate: string
      endDate: string
      achievements: string[]
    }>
  }
}

export default function Experience({ payload }: ExperienceProps) {
  return (
    <section className="section">
      <h2>{payload.title}</h2>
      {payload.list.map((exp, index) => (
        <div key={index} style={{ marginBottom: '30px' }}>
          <h3>{exp.title}</h3>
          <p><strong>{exp.position}</strong></p>
          <p>{exp.startDate} ~ {exp.endDate}</p>
          <p><strong>주요 업무</strong></p>
          <ul>
            {exp.achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

