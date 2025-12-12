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
      <header className="bg-neutral-background px-6 pt-4 pb-4">
        <div className="flex items-center gap-3 max-w-md mx-auto">
          <button type="button" onClick={onBackClick} className="p-1">
            <ArrowLeft size={24} className="text-primary-dark" />
          </button>
          <h1 className="text-2xl font-bold text-primary-dark">Upload</h1>
        </div>
      </header>

      {/* Upload area */}
      <main className="max-w-md mx-auto px-6 pb-[100px]">
        <Card className="rounded-3xl" padding="lg">
          <div className="flex flex-col items-center py-6">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Upload size={40} className="text-primary" />
            </div>
            <h2 className="text-xl font-bold text-primary-dark mb-2">Upload Documents</h2>
            <p className="text-sm text-neutral-dark text-center mb-6">
              Upload your medical records, prescriptions, or test results
            </p>
            <button
              type="button"
              onClick={onUploadClick}
              className="px-8 py-3.5 bg-primary text-white font-semibold rounded-2xl hover:bg-primary/90 transition-colors"
            >
              Choose File
            </button>
          </div>
        </Card>

        {/* Supported formats */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-neutral-dark mb-4">Supported Formats</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-4 flex flex-col items-center shadow-card">
              <FileText size={24} className="text-primary mb-2" />
              <span className="text-xs text-neutral-dark">PDF</span>
            </div>
            <div className="bg-white rounded-2xl p-4 flex flex-col items-center shadow-card">
              <Image size={24} className="text-primary mb-2" />
              <span className="text-xs text-neutral-dark">Images</span>
            </div>
            <div className="bg-white rounded-2xl p-4 flex flex-col items-center shadow-card">
              <File size={24} className="text-primary mb-2" />
              <span className="text-xs text-neutral-dark">Documents</span>
            </div>
          </div>
        </div>

        {/* Recent uploads */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-neutral-dark mb-4">Recent Uploads</h3>
          <Card className="rounded-3xl" padding="lg">
            <p className="text-center text-text-muted py-4">No recent uploads</p>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default UploadScreen;
