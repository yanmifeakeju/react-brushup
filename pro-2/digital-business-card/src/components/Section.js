export default function Section({ title, content }) {
  return (
    <div className='content'>
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
}
