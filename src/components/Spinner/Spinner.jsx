import Loader from 'react-loader-spinner';
import { theme } from 'constants/theme';

export const Spinner = () => (
  <div style={{ textAlign: 'center' }}>
    <Loader
      type="ThreeDots"
      color={theme.accentColor}
      height={100}
      width={100}
      // timeout={3000}
    />
  </div>
);
