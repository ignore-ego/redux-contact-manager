import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [name, setName] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/profile').then((response) => {
      const { data } = response;

      setName(data.name);
    });
  }, []);

  return (
    <h1 className="text-3xl font-bold underline">
      {name.trim().length <= 0 ? '...loading' : name}
    </h1>
  );
}

export default App;
