import { Outlet } from 'react-router-dom';
import Navigation from './Navigation.tsx';

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed top-0 right-0 left-0 z-10 bg-[#282c34]">
        <Navigation />
      </header>
      <main className="min-w-[100vw] flex-1 bg-gray-200/60 pt-16">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
