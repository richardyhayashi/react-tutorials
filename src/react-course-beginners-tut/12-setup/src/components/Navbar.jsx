import reactLogo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav>
      <div className="nav--left">
        <img src={reactLogo} alt="logo" className="nav--icon" />
        <h3 className="nav--logo_text">ReacrFacts</h3>
      </div>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
};

export default Navbar;
