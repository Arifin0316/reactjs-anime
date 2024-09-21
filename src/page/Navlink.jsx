const NavLink = ({ id, label, activeLink, onClick }) => {
    return (
      <a
        href='#'
        className={`block text-center md:my-0 my-6  cursor-pointer ${
          activeLink === id ? 'text-red-600' : ''
        }`}
        onClick={() => onClick(id)}
      >
        {label}
      </a>
    );
  };

  export default NavLink