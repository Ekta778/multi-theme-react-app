// components/Header.tsx
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

export const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header className="fixed top-0 w-full flex justify-between p-4 shadow-md bg-white z-50">
      <div className="font-bold text-lg">MyThemeApp</div>
      <select value={theme} onChange={e => setTheme(e.target.value as any)}>
        <option value="theme1">Theme 1</option>
        <option value="theme2">Theme 2</option>
        <option value="theme3">Theme 3</option>
      </select>
      <nav>
        <Link to="/" className="mx-2">Home</Link>
        <Link to="/about" className="mx-2">About</Link>
        <Link to="/contact" className="mx-2">Contact</Link>
      </nav>
    </header>
  );
};
