import { Outlet, useNavigate, useLocation } from 'react-router';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      Header
      {useLocation().pathname !== '/' && (
        <button onClick={() => navigate('/')}>Back to home</button>
      )}{' '}
      <Outlet />
    </div>
  );
};

export default Header;
