import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import { useSelector } from 'react-redux';

export default function UserLayout() {
  const { currentUser } = useSelector((state) => state.user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalView, setModalView] = useState('signin'); // 'signin' or 'signup'

  const openModal = (view) => {
    setModalView(view);
    setIsModalOpen(true);
  };

  if (currentUser && isModalOpen) {
    setIsModalOpen(false);
  }

  return (
    <div>
      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="rounded shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            {modalView === 'signin' ? (
              <SignIn
                onClose={() => setIsModalOpen(false)}
                onSwitchToSignUp={() => openModal('signup')}
              />
            ) : (
              <SignUp
                onClose={() => setIsModalOpen(false)}
                onSwitchToSignIn={() => openModal('signin')}
              />
            )}
          </div>
        </div>
      )}

      {/* Layout Content */}
      <div className={`relative ${isModalOpen ? 'blur-sm' : ''}`}>
        <Header onSigninClick={() => openModal('signin')} />
        <main className="max-w-7xl mx-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
