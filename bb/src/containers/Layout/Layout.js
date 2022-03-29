import { Suspense, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { useThemeContext } from '../../store/ThemeContext';

const Layout = () => {
  let navigate = useNavigate();
  let location = useLocation();

  const { themeValue } = useThemeContext();

  useEffect(() => {
    if (location.pathname === "/")
      navigate("/history");
  }, [])

  return (
    <>
      <div className={`layout ${themeValue && themeValue}`}>
        <Header />
        <div className='layout_body'>
          <Suspense fallback={<div>loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </>
  );
};


export default Layout;