export default function Panel({ title, children }) {
  return (
    <section className="Panel__container">
      <h2>{title}</h2>
      {children}
    </section>
  )
}
