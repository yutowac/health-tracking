import React from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { Card } from '../atoms';
import type { MedicalInfo } from '../../types';

interface MedicalInfoEditScreenProps {
  medicalInfo: MedicalInfo;
  onBackClick: () => void;
  onSaveClick?: () => void;
}

export const MedicalInfoEditScreen: React.FC<MedicalInfoEditScreenProps> = ({
  medicalInfo,
  onBackClick,
  onSaveClick = () => {},
}) => {
  return (
    <div className="min-h-screen bg-neutral-background">
      {/* Header with back and done buttons */}
      <header className="bg-neutral-background px-4 pt-12 pb-4">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="flex items-center gap-2">
            <button type="button" onClick={onBackClick} className="p-1">
              <ArrowLeft size={24} className="text-primary-dark" />
            </button>
            <h1 className="text-2xl font-extrabold text-primary-dark">Edit Medical Info</h1>
          </div>
          <button
            type="button"
            onClick={onSaveClick}
            className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center"
          >
            <Check size={20} className="text-white" />
          </button>
        </div>
      </header>

      {/* Edit form */}
      <main className="max-w-md mx-auto px-4 pb-24">
        <Card className="rounded-[24px]">
          {/* Basic Info */}
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm text-gray-500 mb-1">Name</label>
              <input
                type="text"
                defaultValue={medicalInfo.name}
                className="w-full px-4 py-3 bg-gray-50 rounded-xl text-primary-dark font-medium focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Gender</label>
              <select
                defaultValue={medicalInfo.gender}
                className="w-full px-4 py-3 bg-gray-50 rounded-xl text-primary-dark font-medium focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Birthday</label>
              <input
                type="text"
                defaultValue={medicalInfo.birthday}
                className="w-full px-4 py-3 bg-gray-50 rounded-xl text-primary-dark font-medium focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-500 mb-1">Height</label>
                <input
                  type="text"
                  defaultValue={medicalInfo.height}
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl text-primary-dark font-medium focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">Weight</label>
                <input
                  type="text"
                  defaultValue={medicalInfo.weight}
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl text-primary-dark font-medium focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Blood Group</label>
              <select
                defaultValue={medicalInfo.bloodGroup}
                className="w-full px-4 py-3 bg-gray-50 rounded-xl text-primary-dark font-medium focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
          </div>

          {/* Allergies */}
          <div className="mb-6">
            <label className="block text-base font-semibold text-primary mb-2">Allergies</label>
            <input
              type="text"
              defaultValue={medicalInfo.allergies.join(', ')}
              placeholder="Enter allergies separated by commas"
              className="w-full px-4 py-3 bg-gray-50 rounded-xl text-primary-dark font-medium focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Emergency Contact */}
          <div>
            <label className="block text-base font-semibold text-primary mb-2">Emergency Contact</label>
            {medicalInfo.emergencyContacts.map((contact, index) => (
              <div key={index} className="space-y-3 p-4 bg-gray-50 rounded-xl">
                <input
                  type="text"
                  defaultValue={contact.name}
                  placeholder="Name"
                  className="w-full px-4 py-2 bg-white rounded-lg text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  defaultValue={contact.phone}
                  placeholder="Phone"
                  className="w-full px-4 py-2 bg-white rounded-lg text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  defaultValue={contact.address}
                  placeholder="Address"
                  className="w-full px-4 py-2 bg-white rounded-lg text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  defaultValue={contact.email}
                  placeholder="Email"
                  className="w-full px-4 py-2 bg-white rounded-lg text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            ))}
          </div>
        </Card>
      </main>
    </div>
  );
};

export default MedicalInfoEditScreen;
