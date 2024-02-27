import { Button } from '../components/ui';
import { Layout } from '../layouts/Layout';
import { useDispatch, useSelector } from 'react-redux';

export const Home = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(({ auth }) => {
    return auth.authenticated;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 text-center pt-40">
        {authenticated ? (
          <Button
            skin="danger"
            onClick={() => {
              dispatch({
                type: 'auth/unsetUser',
              });
            }}
          >
            Logout
          </Button>
        ) : (
          <Button
            onClick={() => {
              dispatch({
                type: 'auth/setUser',
              });
            }}
          >
            Login
          </Button>
        )}
      </div>
    </Layout>
  );
};
