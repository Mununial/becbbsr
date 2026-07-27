import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, User, Loader2, X, ShieldAlert, Eye, EyeOff, KeyRound } from 'lucide-react';
import axios from 'axios';
import { auth } from '../lib/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

interface LoginGateProps {
  children: React.ReactNode;
  onClose?: () => void;
}

export const LoginGate: React.FC<LoginGateProps> = ({ children, onClose }) => {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [checkingSession, setCheckingSession] = useState<boolean>(true);
  
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // Check session on mount
    const token = sessionStorage.getItem('bec_admin_token');
    if (token === 'bec_session_token_2026') {
      setIsAuthorized(true);
    }
    setCheckingSession(false);
  }, []);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setError('Please enter both ID and Password');
      return;
    }

    setLoading(true);
    setError(null);

    // 1. Attempt standard email/password login to Firebase Auth first to activate Firestore database write permissions
    try {
      const email = username.includes('@') ? username.trim() : `${username.trim()}@becbbsr.ac.in`;
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if (userCredential.user) {
        sessionStorage.setItem('bec_admin_token', 'bec_session_token_2026');
        setIsAuthorized(true);
        setLoading(false);
        return;
      }
    } catch (err: any) {
      console.warn('Firebase Auth standard login skipped or error occurred, using bypass fallback:', err);
      
      // Auto-provision default admin credentials in Firebase Auth if they don't exist yet
      const loginErrCode = err.code || '';
      if (loginErrCode.includes('auth/user-not-found') || loginErrCode.includes('auth/invalid-credential')) {
        try {
          const email = username.includes('@') ? username.trim() : `${username.trim()}@becbbsr.ac.in`;
          const normalizedUser = username.trim().toLowerCase();
          if ((normalizedUser === 'admin' || normalizedUser === 'admin@becbbsr.ac.in') && password === 'becadmin@2026') {
            console.log('Auto-provisioning default admin credentials in Firebase Auth...');
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            if (userCredential.user) {
              console.log('Firebase Auth admin credentials successfully auto-provisioned!');
              sessionStorage.setItem('bec_admin_token', 'bec_session_token_2026');
              setIsAuthorized(true);
              setLoading(false);
              return;
            }
          }
        } catch (regErr: any) {
          console.warn('Firebase Auth admin credentials auto-provision failed:', regErr);
        }
      }

      // 2. Client-side fallback check (instant bypass local credentials fallback)
      const normalizedUser = username.trim().toLowerCase();
      if ((normalizedUser === 'admin' || normalizedUser === 'admin@becbbsr.ac.in') && password === 'becadmin@2026') {
        sessionStorage.setItem('bec_admin_token', 'bec_session_token_2026');
        setIsAuthorized(true);
        setLoading(false);
        return;
      }

      // 3. Fallback to standard Express API check if Firebase Auth has issues or backend check is needed
      try {
        const res = await axios.post('/api/admin/login', { username, password });
        if (res.data.success && res.data.token) {
          sessionStorage.setItem('bec_admin_token', res.data.token);
          setIsAuthorized(true);
          setLoading(false);
          return;
        }
      } catch (backendErr) {}

      // Handle Firebase error messages clearly
      const errorCode = err.code || '';
      if (errorCode.includes('auth/invalid-credential') || errorCode.includes('auth/user-not-found') || errorCode.includes('auth/wrong-password')) {
        setError('Invalid ID or Password. Please check your credentials.');
      } else if (errorCode.includes('auth/network-request-failed')) {
        setError('Network error. Please check your internet connection.');
      } else {
        setError(err.message || 'Authentication failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    if (onClose) {
      onClose();
    } else {
      // Standalone page context, go back to home page
      window.location.href = '/';
    }
  };

  if (checkingSession) {
    return (
      <div className="fixed inset-0 z-[8000] bg-navy-950 flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-accent animate-spin" />
      </div>
    );
  }

  if (isAuthorized) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[8000] bg-navy-950 flex items-center justify-center p-4 overflow-y-auto font-inter selection:bg-accent selection:text-navy-950">
        {/* Decorative dynamic backgrounds */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[150px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent/5 blur-[150px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative w-full max-w-[500px] bg-navy-900/60 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl flex flex-col gap-8 overflow-hidden z-10"
        >
          {/* Close button */}
          <button 
            onClick={handleCancel}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/5 text-white/50 hover:text-white hover:bg-white/10 transition-all duration-300"
            title="Go Back"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Logo & Header */}
          <div className="flex flex-col items-center text-center gap-4 mt-2">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-md animate-pulse" />
              <img 
                src="https://res.cloudinary.com/dpogq7cbe/image/upload/v1776629472/becweb/logo.png" 
                alt="BEC Logo" 
                className="w-20 h-20 object-contain relative z-10 brightness-110 drop-shadow-lg"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <h2 className="text-xl md:text-2xl font-black tracking-tight text-white font-poppins uppercase">
                Bhubaneswar <span className="text-accent">Engineering</span> College (BEC)
              </h2>
              <span className="text-[14px] font-bold text-white/40 tracking-wider font-odia leading-none">ଭୁବନେଶ୍ୱର ଇଞ୍ଜିନିୟରିଂ କଲେଜ</span>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-bold text-accent uppercase tracking-widest mx-auto mt-2">
                <KeyRound className="w-3.5 h-3.5" /> ERP Portal Secure Gate
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 text-red-200 text-xs font-semibold rounded-2xl"
              >
                <ShieldAlert className="w-5 h-5 text-red-400 shrink-0" />
                <span>{error}</span>
              </motion.div>
            )}

            <div className="flex flex-col gap-5">
              {/* ID/Username */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 pl-2">ERP Login ID</label>
                <div className="relative flex items-center">
                  <User className="absolute left-5 w-5 h-5 text-white/30" />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your administrative ID"
                    disabled={loading}
                    className="w-full pl-13 pr-6 py-4.5 bg-navy-950/40 border border-white/5 rounded-2xl text-sm font-semibold text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/5 transition-all duration-300 disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 pl-2">Portal Password</label>
                <div className="relative flex items-center">
                  <Lock className="absolute left-5 w-5 h-5 text-white/30" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    disabled={loading}
                    className="w-full pl-13 pr-14 py-4.5 bg-navy-950/40 border border-white/5 rounded-2xl text-sm font-semibold text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/5 transition-all duration-300 disabled:opacity-50"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={loading}
                    className="absolute right-5 p-1 rounded-full text-white/30 hover:text-white/70 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3.5 mt-4">
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={loading}
                className="w-full py-4.5 bg-accent text-navy-950 text-xs font-black rounded-2xl uppercase tracking-widest hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-accent/15 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Verifying Credentials...
                  </>
                ) : (
                  'Authorize & Enter'
                )}
              </button>

              <button
                type="button"
                onClick={handleCancel}
                disabled={loading}
                className="w-full py-4 bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 text-white text-xs font-bold rounded-2xl uppercase tracking-widest transition-all duration-300 flex items-center justify-center cursor-pointer disabled:opacity-50"
              >
                Cancel / Exit
              </button>
            </div>
          </form>

          {/* Secure watermark */}
          <div className="text-center text-[9px] font-semibold text-white/20 uppercase tracking-widest mt-2">
            Secure Session • BEC ICT Department © 2026
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
