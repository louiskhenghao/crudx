# `useVideoUploader`

A React hook for uploading videos to Tencent Cloud Video-On-Demand (VOD) service with real-time progress tracking.

## Usage

```TypeScript
import { useVideoUploader } from 'your-package-name';

const Demo = () => {
  const { uploadVideo, isUploading, progress, result, error } = useVideoUploader({
    appId: 123456, // Replace with your App ID
    secretId: 'your-secret-id', // Replace with your Secret ID
    secretKey: 'your-secret-key', // Replace with your Secret Key
  });

  const handleUpload = (file: File) => {
    uploadVideo(file);
  };

  return (
    <div>
      <input type="file" onChange={(e) => e.target.files && handleUpload(e.target.files[0])} />
      {isUploading && <p>Uploading: {progress?.message}</p>}
      {result && <p>Upload Successful: <a href={result.url} target="_blank">View Video</a></p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
    </div>
  );
};
```

## Reference

```TypeScript
useVideoUploader(config: VideoUploaderConfig): VideoUploaderState;

export interface VideoUploaderConfig {
  appId: number;
  secretId: string;
  secretKey: string;
  expireTime?: number;
}

export interface VideoUploaderState {
  uploadVideo: (file: File) => void;
  isUploading: boolean;
  progress: { percent: number; message: string } | null;
  result: { mediaId: string; url: string } | null;
  error: string | null;
}
```

