export default function Header({ image, alt }) {
  return (
    <div>
      <img src={image} alt={alt} width={100} className='header-image' />
    </div>
  );
}
