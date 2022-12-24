import { Outlet, useNavigate } from 'react-router';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      Header
      <Outlet />
    </div>
  );
};

export default Header;
