/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import axios from 'axios';

function CreateWilder(): React.ReactElement {
  const url = 'http://localhost:5000/api/wilders/create';

  const [wilder, setWilder] = useState({
    name: '',
    city: '',
    title: '',
  });

  const createWilder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post(url, {
      name: wilder.name,
      city: wilder.city,
      skills: [{ title: wilder.title, votes: 0 }],
    });
  };
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    // const newWilder = { ...wilder };
    setWilder({ ...wilder, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <h2>Add Wilder</h2>
      <form onSubmit={createWilder}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>Wilder name</label>
        <input
          id="name"
          onChange={(e) => handleInputChange(e)}
          value={wilder.name}
          name="name"
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>Wilder city</label>
        <input
          id="city"
          onChange={(e) => handleInputChange(e)}
          value={wilder.city}
          name="city"
        />
        <label>Wilder skill(s)</label>
        <input
          id="title"
          onChange={(e) => handleInputChange(e)}
          value={wilder.title}
          name="title"
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

export default CreateWilder;
