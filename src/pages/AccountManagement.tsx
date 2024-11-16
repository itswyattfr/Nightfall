import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const AccountManagement = () => {
  const { user } = useAuth();
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleChangePassword = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      if (!response.ok) {
        throw new Error('Failed to change password');
      }

      setIsChangePasswordModalOpen(false);
      setCurrentPassword('');
      setNewPassword('');
    } catch (error) {
      console.error('Error changing password:', error);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/delete-account', {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete account');
      }

      window.location.href = '/';
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto relative">
        <button className="absolute right-0 top-0 px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-md hover:from-yellow-500 hover:to-yellow-700 transition-colors duration-200 font-semibold">
          UPGRADE
        </button>

        <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Account Management
        </h1>
        
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <div className="space-y-6">
            <section className="border-b border-gray-700 pb-6">
              <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-400 mb-1">Username</label>
                  <div className="text-white">{user?.username}</div>
                </div>
                <div>
                  <label className="block text-gray-400 mb-1">Email</label>
                  <div className="text-white">{user?.email}</div>
                </div>
              </div>
            </section>
            
            <section className="border-b border-gray-700 pb-6">
              <h2 className="text-xl font-semibold mb-4">Security Settings</h2>
              <button 
                onClick={() => setIsChangePasswordModalOpen(true)}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-md hover:from-purple-600 hover:to-indigo-600 transition-colors duration-200"
              >
                Change Password
              </button>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-4">Account Actions</h2>
              <button 
                onClick={() => setIsDeleteModalOpen(true)}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-md transition-colors duration-200"
              >
                Delete Account
              </button>
            </section>
          </div>
        </div>
      </div>

      {/* Change Password Modal */}
      {isChangePasswordModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsChangePasswordModalOpen(false)
            }
          }}
        >
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Change Password</h2>
            <input
              type="password"
              placeholder="Current Password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full p-2 mb-4 bg-gray-700 rounded-md"
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-2 mb-4 bg-gray-700 rounded-md"
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsChangePasswordModalOpen(false)}
                className="px-4 py-2 bg-gray-600 rounded-md hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleChangePassword}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-md hover:from-purple-600 hover:to-indigo-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Account Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Delete Account</h2>
            <p className="mb-4">Are you sure you want to delete your account? This action cannot be undone.</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="px-4 py-2 bg-gray-600 rounded-md hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAccount}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-md"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountManagement;