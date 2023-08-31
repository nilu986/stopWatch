import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './features/components/router_components/Auth';
//import About from './features/components/router_components/About';
import { Contact } from './features/components/router_components/Contact';
import { Home } from './features/components/router_components/Home';
import { Login } from './features/components/router_components/Login';
import { Navigation } from './features/components/router_components/Navigation';
import { NoPageFound } from './features/components/router_components/NoPageFound';
import { Products } from './features/components/router_components/Products';
import { Featured } from './features/components/router_components/product_feature/Featured';
import { News } from './features/components/router_components/product_feature/New';
import { Profile } from './features/components/router_components/Profile';
import { Stopwatch } from './features/components/Stopwatch';
import './style.css';
const LazyAbout = React.lazy(() =>
  import('./features/components/router_components/About')
);

export default function App() {
  return (
    <div>
      <AuthProvider>
        <Navigation />
        <Routes>
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route
            path="/about"
            element={
              <React.Suspense fallback="Loading........">
                <LazyAbout />
              </React.Suspense>
            }
          />
          {/*<Route path="/about" element={<About />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Products />}>
            <Route path="featured" element={<Featured />} />
            <Route path="new" element={<News />} />
          </Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}
