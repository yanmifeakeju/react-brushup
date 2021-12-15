export default function Navbar({ logo }) {
  return (
    <nav className='navbar'>
      <img src={logo} width='100px' className='logo' alt='logo' />
      <h3 className='navbar-heading'>ReactFacts</h3>
      <h4 className='color-white'>React Course - Project 1</h4>
    </nav>
  );
}
