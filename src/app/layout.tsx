import React from 'react';
import { Provider } from 'clerk-react';

interface PageProps {
  children: React.ReactNode;
}

const Layout: React.FC<PageProps> = ({ children }) => {
  return (
    <Provider>
      <div className="layout">
        <aside className="sidebar">
          <nav className="navbar">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Shoes</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </aside>
        <main className="content">{children}</main>
      </div>
    </Provider>
  );
};

export default Layout;