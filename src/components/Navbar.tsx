import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { auth } from '../lib/firebase';
import { motion } from 'motion/react';
import { LogIn, User, LogOut, Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

export default function Navbar() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    await auth.signOut();
    navigate('/');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
            {/* <motion.img
              whileHover={{ scale: 1.03 }}
              src="/logo.jpeg"
              alt="NexBora Logo"
              className="h-14 w-auto max-w-[160px] object-contain"
            /> */}
            <div className="hidden sm:block">
              <p className="text-lg font-black leading-none text-slate-950">NexBora</p>
              <p className="mt-1 text-xs font-semibold text-slate-500">Technologies</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-bold text-slate-600 transition hover:text-sky-600"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                <Link to="/dashboard">
                  <Button variant="outline" className="h-11 rounded-md border-slate-300 px-5 font-bold hover:border-sky-500 hover:text-sky-700">
                    <User size={17} />
                    Dashboard
                  </Button>
                </Link>
                <Button onClick={handleLogout} variant="ghost" size="icon" className="rounded-md text-slate-500 hover:text-slate-950">
                  <LogOut size={20} />
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" className="h-11 rounded-md px-5 font-bold text-slate-600 hover:text-slate-950">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="h-11 rounded-md bg-slate-950 px-5 font-bold text-white hover:bg-sky-600">
                    Join Now
                    <ArrowRight size={17} />
                  </Button>
                </Link>
              </>
            )}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 text-slate-700"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-slate-200 bg-white px-4 py-5"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-3 text-base font-bold text-slate-700 hover:bg-slate-50"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 border-t border-slate-100 pt-5">
            {user ? (
              <>
                <Link to="/dashboard" onClick={() => setIsOpen(false)} className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-slate-950 font-bold text-white">
                  <User size={18} />
                  Dashboard
                </Link>
                <button onClick={handleLogout} className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-slate-200 font-bold text-slate-700">
                  <LogOut size={18} />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setIsOpen(false)} className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-slate-200 font-bold text-slate-700">
                  <LogIn size={18} />
                  Login
                </Link>
                <Link to="/register" onClick={() => setIsOpen(false)} className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-sky-600 font-bold text-white">
                  Register
                  <ArrowRight size={18} />
                </Link>
              </>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
