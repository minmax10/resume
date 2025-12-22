interface FooterProps {
  payload: {
    text: string
  }
}

export default function Footer({ payload }: FooterProps) {
  return (
    <footer style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #ddd', textAlign: 'center', color: '#666' }}>
      <p>{payload.text}</p>
    </footer>
  )
}

