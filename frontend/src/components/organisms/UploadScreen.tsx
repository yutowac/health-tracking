import React from 'react';
import { ArrowLeft, Upload, FileText, Image, File } from 'lucide-react';
import { Card } from '../atoms';

interface UploadScreenProps {
  onBackClick: () => void;
  onUploadClick?: () => void;
}

export const UploadScreen: React.FC<UploadScreenProps> = ({
  onBackClick,
  onUploadClick = () => {},
}) => {
  return (
    <div className="min-h-screen bg-neutral-background">
      {/* Header with back button */}
      <header className="bg-neutral-background px-[26px] pt-[20px] pb-5">
        <div className="flex items-center gap-4 max-w-md mx-auto">
          <button type="button" onClick={onBackClick} className="p-1.5">
            <ArrowLeft size={26} className="text-primary-dark" />
          </button>
          <h1 className="text-2xl font-bold text-primary-dark">Upload</h1>
        </div>
      </header>

      {/* Upload area */}
      <main className="max-w-md mx-auto px-[26px] pb-[120px]">
        <Card className="rounded-[24px]" padding="xl">
          <div className="flex flex-col items-center py-8">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-5">
              <Upload size={44} className="text-primary" />
            </div>
            <h2 className="text-xl font-bold text-primary-dark mb-3">Upload Documents</h2>
            <p className="text-sm text-neutral-dark text-center mb-8">
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
        <div className="mt-8">
          <h3 className="text-sm font-semibold text-neutral-dark mb-5">Supported Formats</h3>
          <div className="grid grid-cols-3 gap-5">
            <div className="bg-white rounded-[20px] p-5 flex flex-col items-center shadow-card">
              <FileText size={28} className="text-primary mb-3" />
              <span className="text-xs text-neutral-dark">PDF</span>
            </div>
            <div className="bg-white rounded-[20px] p-5 flex flex-col items-center shadow-card">
              <Image size={28} className="text-primary mb-3" />
              <span className="text-xs text-neutral-dark">Images</span>
            </div>
            <div className="bg-white rounded-[20px] p-5 flex flex-col items-center shadow-card">
              <File size={28} className="text-primary mb-3" />
              <span className="text-xs text-neutral-dark">Documents</span>
            </div>
          </div>
        </div>

        {/* Recent uploads */}
        <div className="mt-8">
          <h3 className="text-sm font-semibold text-neutral-dark mb-5">Recent Uploads</h3>
          <Card className="rounded-[24px]" padding="xl">
            <p className="text-center text-text-muted py-5">No recent uploads</p>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default UploadScreen;
