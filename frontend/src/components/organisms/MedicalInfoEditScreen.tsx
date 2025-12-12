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

const inputClassName = "w-full px-4 py-3.5 bg-primary-light/30 border border-primary-light rounded-2xl text-[14px] text-primary-dark font-medium placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all";
const labelClassName = "block text-[11px] uppercase tracking-wide text-text-muted mb-2";
const sectionLabelClassName = "block text-[15px] font-semibold text-primary-dark mb-3";

export const MedicalInfoEditScreen: React.FC<MedicalInfoEditScreenProps> = ({
  medicalInfo,
  onBackClick,
  onSaveClick = () => {},
}) => {
  const saveButton = (
    <button
      type="button"
      onClick={onSaveClick}
      className="w-12 h-12 bg-gradient-to-br from-primary to-[#0066d6] rounded-2xl flex items-center justify-center shadow-[0_4px_12px_rgba(0,122,255,0.3)] active:scale-95 transition-transform"
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
        variant="secondary"
      />

      <main className="max-w-md mx-auto px-[26px] pt-6 pb-[140px]">
        <Card padding="xl">
          <div className="space-y-6 mb-10">
            <div>
              <label className={labelClassName}>Name</label>
              <input
                type="text"
                defaultValue={medicalInfo.name}
                className={inputClassName}
              />
            </div>
            <div>
              <label className={labelClassName}>Gender</label>
              <select
                defaultValue={medicalInfo.gender}
                className={inputClassName}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className={labelClassName}>Birthday</label>
              <input
                type="text"
                defaultValue={medicalInfo.birthday}
                className={inputClassName}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClassName}>Height</label>
                <input
                  type="text"
                  defaultValue={medicalInfo.height}
                  className={inputClassName}
                />
              </div>
              <div>
                <label className={labelClassName}>Weight</label>
                <input
                  type="text"
                  defaultValue={medicalInfo.weight}
                  className={inputClassName}
                />
              </div>
            </div>
            <div>
              <label className={labelClassName}>Blood Group</label>
              <select
                defaultValue={medicalInfo.bloodGroup}
                className={inputClassName}
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

          <div className="mb-10">
            <label className={sectionLabelClassName}>Allergies</label>
            <input
              type="text"
              defaultValue={medicalInfo.allergies.join(', ')}
              placeholder="Enter allergies separated by commas"
              className={inputClassName}
            />
          </div>

          <div>
            <label className={sectionLabelClassName}>Emergency Contact</label>
            {medicalInfo.emergencyContacts.map((contact, index) => (
              <div key={index} className="space-y-4 p-6 bg-primary-light/20 rounded-2xl border border-primary-light">
                <input
                  type="text"
                  defaultValue={contact.name}
                  placeholder="Name"
                  className="w-full px-4 py-3 bg-white rounded-xl text-[14px] text-primary-dark font-medium focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
                <input
                  type="text"
                  defaultValue={contact.phone}
                  placeholder="Phone"
                  className="w-full px-4 py-3 bg-white rounded-xl text-[14px] text-primary-dark font-medium focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
                <input
                  type="text"
                  defaultValue={contact.address}
                  placeholder="Address"
                  className="w-full px-4 py-3 bg-white rounded-xl text-[14px] text-primary-dark font-medium focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
                <input
                  type="email"
                  defaultValue={contact.email}
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-white rounded-xl text-[14px] text-primary-dark font-medium focus:outline-none focus:ring-2 focus:ring-primary transition-all"
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
