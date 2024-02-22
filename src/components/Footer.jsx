import { useDispatch, useSelector } from 'react-redux';

export const Footer = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => {
    const { counter } = state;

    return counter;
  });

  return (
    <footer className="mt-40 bg-red-950 text-white">
      {value}

      <button
        onClick={() => {
          dispatch({
            type: 'increment',
          });
        }}
      >
        +
      </button>
    </footer>
  );
};
