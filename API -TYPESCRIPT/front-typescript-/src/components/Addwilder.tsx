/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';

function AddWilder(): React.ReactElement {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [skill, setSkill] = useState('');
  const [error, setError] = useState('');

  return (
    <form
      onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // pour empecher le rechargement de la page
        try {
          const response: AxiosResponse = await axios.post(
            'http://localhost:3001/wilders',
            {
              name,
              city,
              skill: [{ title: skill, votes: 0 }],
            }
          );
          // eslint-disable-next-line no-console
          console.log(response.data);
          setName('');
          setCity('');
          setSkill('');
          setError('');
        } catch (error) {
          setError(error.response.data.error);
        }
      }}
    >
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
      </div>
      <div className="form-group">
        <label htmlFor="city">City</label>
        <input
          type="text"
          className="form-control"
          id="city"
          value={city}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCity(e.target.value)
          }
        />
      </div>
      <div className="form-group">
        <label htmlFor="skill">Skill</label>
        <input
          type="text"
          className="form-control"
          id="skill"
          value={skill}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSkill(e.target.value)
          }
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default AddWilder;
