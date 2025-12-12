import React from 'react';
import { Upload, FileText, Image, File } from 'lucide-react';
import { Card } from '../atoms';
import { ScreenContainer, ScreenHeader } from '../layout';

interface UploadScreenProps {
  onBackClick: () => void;
  onUploadClick?: () => void;
}

export const UploadScreen: React.FC<UploadScreenProps> = ({
  onBackClick,
  onUploadClick = () => {},
}) => {
  return (
    <ScreenContainer>
      <ScreenHeader title="Upload" onBackClick={onBackClick} />

      {/* Upload area */}
      <main className="max-w-md mx-auto px-[26px] pt-6 pb-[140px]">
        <Card className="rounded-[24px]" padding="xl">
          <div className="flex flex-col items-center py-10">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Upload size={44} className="text-primary" />
            </div>
            <h2 className="text-xl font-bold text-primary-dark mb-4">Upload Documents</h2>
            <p className="text-sm text-neutral-dark text-center mb-10">
              Upload your medical records, prescriptions, or test results
            </p>
            <button
              type="button"
              onClick={onUploadClick}
              className="px-10 py-4 bg-primary text-white font-semibold rounded-2xl hover:bg-primary/90 transition-colors"
            >
              Choose File
            </button>
          </div>
        </Card>

        {/* Supported formats */}
        <div className="mt-10">
          <h3 className="text-sm font-semibold text-neutral-dark mb-6">Supported Formats</h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] p-6 flex flex-col items-center shadow-card">
              <FileText size={28} className="text-primary mb-4" />
              <span className="text-xs text-neutral-dark">PDF</span>
            </div>
            <div className="bg-white rounded-[20px] p-6 flex flex-col items-center shadow-card">
              <Image size={28} className="text-primary mb-4" />
              <span className="text-xs text-neutral-dark">Images</span>
            </div>
            <div className="bg-white rounded-[20px] p-6 flex flex-col items-center shadow-card">
              <File size={28} className="text-primary mb-4" />
              <span className="text-xs text-neutral-dark">Documents</span>
            </div>
          </div>
        </div>

        {/* Recent uploads */}
        <div className="mt-10">
          <h3 className="text-sm font-semibold text-neutral-dark mb-6">Recent Uploads</h3>
          <Card className="rounded-[24px]" padding="xl">
            <p className="text-center text-text-muted py-6">No recent uploads</p>
          </Card>
        </div>
      </main>
    </ScreenContainer>
  );
};

export default UploadScreen;
