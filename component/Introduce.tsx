interface IntroduceProps {
  payload: {
    title: string
    contents: string
  }
}

export default function Introduce({ payload }: IntroduceProps) {
  return (
    <section className="section">
      <h2>{payload.title}</h2>
      <div>
        {payload.contents.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}

