import Loader from 'react-loader-spinner';

export const Spinner = () => (
  <div style={{ textAlign: 'center' }}>
    <Loader
      type="ThreeDots"
      color="tomato"
      height={200}
      width={200}
      // timeout={3000}
    />
  </div>
);
