interface SkillProps {
  payload: {
    title: string
    list: Array<{
      title: string
      items: string[]
    }>
  }
}

export default function Skill({ payload }: SkillProps) {
  return (
    <section className="section">
      <h2>{payload.title}</h2>
      <ul>
        {payload.list.map((skill, index) => (
          <li key={index}>
            <strong>{skill.title}</strong> - {skill.items.map((item, i) => (
              <span key={i}>
                <mark>{item}</mark>
                {i < skill.items.length - 1 && ', '}
              </span>
            ))}
          </li>
        ))}
      </ul>
    </section>
  )
}

