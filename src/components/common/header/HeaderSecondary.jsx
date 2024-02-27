import { useSelector } from 'react-redux';
import { Button } from '../../ui';

export const HeaderSecondary = () => {
  const authenticated = useSelector(({ auth }) => {
    return auth.authenticated;
  });

  return (
    <section className="bg-gray-200 py-2 border-b border-b-gray-500 ">
      <div className="container mx-auto px-4 min-h-10">
        {authenticated ? (
          <Button title="Add Contact" skin="success">
            Add Contact
          </Button>
        ) : (
          <>google</>
        )}
      </div>
    </section>
  );
};
