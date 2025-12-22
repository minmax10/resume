interface SkillProps {
  payload: {
    title: string
    list: Array<{
      title: string
      items: Array<{
        title: string
        level?: number
      }>
    }>
  }
}

export default function Skill({ payload }: SkillProps) {
  return (
    <div className="container list-container">
      <h3 id="skill">{payload.title}</h3>
      {payload.list.map((category, catIndex) => (
        <div key={catIndex}>
          <h4>{category.title}</h4>
          <ul>
            {category.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                {item.level && `${item.level} `}
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
