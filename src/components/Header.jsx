import { Outlet, useNavigate } from 'react-router';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      Header
      <Outlet />
    </div>
  );
};

export default Header;
