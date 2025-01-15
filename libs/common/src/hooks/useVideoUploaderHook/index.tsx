import { useState } from 'react';
import { createHmac } from 'crypto';
import TcVod from 'vod-js-sdk-v6';

interface VideoUploaderConfig {
  appId: number;
  secretId: string;
  secretKey: string;
  expireTime?: number;
}

interface UploadProgress {
  percent: number;
  message: string;
}

interface UploadResult {
  mediaId: string;
  url: string;
}

interface VideoUploaderState {
  uploadVideo: (file: File) => void;
  isUploading: boolean;
  progress: UploadProgress | null;
  result: UploadResult | null;
  error: string | null;
}

export const useVideoUploader = ({
  appId,
  secretId,
  secretKey,
  expireTime = 36000,
}: VideoUploaderConfig): VideoUploaderState => {
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState<UploadProgress | null>(null);
  const [result, setResult] = useState<UploadResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generateSignature = () => {
    const current = Math.floor(Date.now() / 1000);
    const expired = current + expireTime;

    const argList = {
      secretId,
      currentTimeStamp: current,
      expireTime: expired,
      random: Math.floor(Math.random() * 10000),
    };

    const original = Object.entries(argList)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    const hmac = createHmac('sha1', secretKey);
    hmac.update(original);
    const hash = hmac.digest();

    const combined = Buffer.concat([hash, Buffer.from(original)]);
    return combined.toString('base64');
  };

  const uploadVideo = (file: File) => {
    setIsUploading(true);
    setError(null);
    setProgress(null);
    setResult(null);

    const vod = new TcVod({
      getSignature: () => Promise.resolve(generateSignature()),
      appId,
      allowReport: false,
    });

    const uploader = vod.upload({ mediaFile: file });

    uploader.on('media_progress', (info) => {
      setProgress({
        percent: info.percent * 100,
        message: `Uploading: ${(info.percent * 100).toFixed(2)}%`,
      });
    });

    uploader
      .done()
      .then((doneResult) => {
        setResult({
          mediaId: doneResult.fileId,
          url: doneResult.video?.url,
        });
        setIsUploading(false);
      })
      .catch((err) => {
        setError(err.message || 'An error occurred during upload.');
        setIsUploading(false);
      });
  };

  return { uploadVideo, isUploading, progress, result, error };
};

export default useVideoUploader;
