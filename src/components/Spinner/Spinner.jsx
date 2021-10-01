import Loader from 'react-loader-spinner';

export const Spinner = () => (
  <div style={{ textAlign: 'center' }}>
    <Loader
      type="ThreeDots"
      color="#8DD83D"
      height={100}
      width={100}
      // timeout={3000}
    />
  </div>
);
