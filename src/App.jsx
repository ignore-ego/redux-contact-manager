import { useEffect, useState } from 'react';
import { client } from './api/test';
import { Button } from './components/ui/Button';

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    client
      .get('/profile')
      .then((response) => {
        const { data } = response;

        setName(data.name);
      })
      .catch((response) => {
        const { code } = response;

        if (code === 'ERR_NETWORK') {
          setMessage('Could not fetch data');
        }
      });
  }, []);

  if (message.trim().length > 0) {
    return <div>{message}</div>;
  }

  return (
    <h1 className="text-3xl font-bold underline">
      {name.trim().length <= 0 ? '...loading' : name}

      <Button>aici se proiecteaza children elements</Button>
    </h1>
  );
}

export default App;
