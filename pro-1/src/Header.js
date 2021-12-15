const Header = ({ logo, navItems }) => {
  return (
    <header className='header'>
      <nav className='nav'>
        <img src={logo} width='100px' className='logo' alt='logo' />
        <ul className='nav-items'>
          {navItems.map((value, index) => {
            return (
              <li key={index} className='nav-item'>
                {value}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
