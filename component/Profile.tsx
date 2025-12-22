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
  }
}

export default function Profile({ payload }: ProfileProps) {
  return (
    <>
      <Image
        src={payload.image}
        alt={payload.name}
        width={200}
        height={200}
        className="profile-image"
      />
      <h1 className="sidebar-name">{payload.name}</h1>
      <h2 className="sidebar-title">AML/STR Specialist</h2>
      
      {payload.contact.map((item, index) => (
        <div key={index} className="sidebar-info">
          <p>
            <strong>{item.type.charAt(0).toUpperCase() + item.type.slice(1)}:</strong><br />
            {item.href && item.href !== '[선택]' ? (
              <a href={item.href} target={item.type === 'email' ? '_self' : '_blank'} rel="noopener noreferrer">
                {item.text}
              </a>
            ) : (
              item.text
            )}
          </p>
        </div>
      ))}
    </>
  )
}

