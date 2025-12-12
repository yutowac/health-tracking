import React from 'react';
import { Check } from 'lucide-react';
import { Card } from '../atoms';
import { ScreenContainer, ScreenHeader } from '../layout';
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
  const saveButton = (
    <button
      type="button"
      onClick={onSaveClick}
      className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center"
    >
      <Check size={22} className="text-white" />
    </button>
  );

  return (
    <ScreenContainer>
      <ScreenHeader
        title="Edit Medical Info"
        onBackClick={onBackClick}
        rightSlot={saveButton}
      />

      {/* Edit form */}
      <main className="max-w-md mx-auto px-[26px] pb-[120px]">
        <Card className="rounded-[24px]" padding="xl">
          {/* Basic Info */}
          <div className="space-y-6 mb-8">
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
          <div className="mb-8">
            <label className="block text-base font-semibold text-primary mb-3">Allergies</label>
            <input
              type="text"
              defaultValue={medicalInfo.allergies.join(', ')}
              placeholder="Enter allergies separated by commas"
              className="w-full px-5 py-4 bg-gray-50 rounded-xl text-primary-dark font-medium focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Emergency Contact */}
          <div>
            <label className="block text-base font-semibold text-primary mb-3">Emergency Contact</label>
            {medicalInfo.emergencyContacts.map((contact, index) => (
              <div key={index} className="space-y-4 p-5 bg-gray-50 rounded-xl">
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
    </ScreenContainer>
  );
};

export default MedicalInfoEditScreen;
