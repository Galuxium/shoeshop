import React, { useState } from 'react';
import { useClerkUser } from '@clerk/react';

interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

interface SettingsPageProps {
  onUpdateProfile: (profile: UserProfile) => void;
}

const SettingsPage: React.FC<SettingsPageProps> = ({ onUpdateProfile }) => {
  const { user } = useClerkUser();
  const [formFields, setFormFields] = useState<UserProfile | null>({
    id: user?.id || '',
    name: user?.name || '',
    email: user?.email || '',
    avatarUrl: user?.avatarUrl || '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formFields) return;
    
    try {
      await fetch('/api/clerk/update-profile', {
        method: 'POST',
        body: JSON.stringify(formFields),
      });
      onUpdateProfile(formFields);
    } catch (error) {
      console.error('Profile update failed:', error);
    }
  };

  return (
    <div className="settings-page">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formFields?.name || ''}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formFields?.email || ''}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Avatar:
          <input
            type="text"
            name="avatarUrl"
            value={formFields?.avatarUrl || ''}
            onChange={handleAvatarChange}
          />
        </label>
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default SettingsPage;