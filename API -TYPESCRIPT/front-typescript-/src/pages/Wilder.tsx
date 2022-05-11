/* eslint-disable react/react-in-jsx-scope */
import axios, { AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';
import WilderCard from '../components/WilderCard';
import CreateWilder from '../components/createWilder';

function Wilder(): React.ReactElement {
  const [wilders, setWilders] = useState<WilderProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data }: AxiosResponse = await axios.get(
          'http://localhost:5000/api/wilders'
        );
        setWilders(data.result);
        setLoading(false);
      } catch (error) {
        console.error(error); // eslint-disable-line no-console
      }
    };
    fetchData();
  }, []);
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <>
      {loading ? (
        <p> Loading </p>
      ) : (
        <>
          <div>
            {wilders.map((wilder) => (
              <div key={wilder.name}>
                <WilderCard wilder={wilder} />
              </div>
            ))}
          </div>
          <CreateWilder />
        </>
      )}
    </>
  );
}

export default Wilder;
