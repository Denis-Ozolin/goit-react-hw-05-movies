import { DEFAULT_PHOTO } from 'services/apiSettings';

export const ImageNotFound = () => (
  <img src={DEFAULT_PHOTO} alt="no_photo" style={{ width: '200px', height: '300px' }} />
);
