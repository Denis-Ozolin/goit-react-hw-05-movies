import { DEFAULT_PHOTO } from 'services/apiSettings';

export const ImageNotFound = () => (
  <img
    src={DEFAULT_PHOTO}
    alt="no_photo"
    style={{ padding: '25% 0', border: '1px solid #8dd83d' }}
  />
);
