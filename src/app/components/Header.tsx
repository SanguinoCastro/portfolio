const Header = () => {
  return (
    <header className='content shadow w-full h-[5.2rem] flex justify-between items-center px-7  border-rad'>
      <div className='flex items-center gap-10'>
        <h3>ES</h3>
        <p>
          <span className='capital font-bold'>E</span>ncuentra{' '}
          <span className='capital font-bold'>S</span>olución a tus proyectos
          web
        </p>
      </div>

      <nav>
        <ul className='flex justify-between gap-10 text-[1.8rem]'>
          <li>
            <a href='#'>Trabajos</a>
          </li>
          <li>
            <a href='#'>Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
