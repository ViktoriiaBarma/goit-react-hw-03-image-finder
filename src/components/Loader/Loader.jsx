import { TailSpin } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <>
      <TailSpin
        justifyContent="center"
        height="80"
        width="80"
        color="#001b4c"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{ justifyContent: 'center' }}
        wrapperClass=""
        visible={true}
      />
    </>
  );
};
