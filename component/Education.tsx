interface EducationProps {
  payload: {
    title: string
    list: Array<{
      title: string
      subTitle: string
      startedAt: string
      endedAt: string
      descriptions: string[]
    }>
  }
}

export default function Education({ payload }: EducationProps) {
  return (
    <section className="section">
      <h2>{payload.title}</h2>
      <ul>
        {payload.list.map((edu, index) => (
          <li key={index}>{edu.title}</li>
        ))}
      </ul>
    </section>
  )
}

