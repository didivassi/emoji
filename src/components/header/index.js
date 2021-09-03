import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img
          src="/logo.png"
          alt=""
        />
      </div>
      <div className="header__title">
        <h1>Welcome to EmojiStars</h1>
      </div>
    </header>
  );
};

export default Header;
