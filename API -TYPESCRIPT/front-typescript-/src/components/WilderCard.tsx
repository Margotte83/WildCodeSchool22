import React from 'react';

interface Props {
  wilder: WilderProps;
}

function WilderCard({ wilder }: Props): React.ReactElement {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{wilder.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{wilder.city}</h6>
          <p className="card-text">{wilder.skills}</p>
        </div>
      </div>

      <img
        src="https://chaire-eti.org/wp-content/uploads/2018/01/avatar-homme.png"
        alt="wilder"
      />
      <h3 className="card-title">{wilder.name}</h3>
      <p className="card-text">{wilder.city}</p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
        exercitationem qui ab laudantium ex molestias voluptates alias, numquam
        repellendus voluptatum.
      </p>
      <h3>Wild Skills</h3>
      {wilder.skills.map(({ title, votes, _id }) => (
        <div key={_id}>
          <span>{title}</span>
          <span>{votes}</span>
        </div>
      ))}
    </>
  );
}

export default WilderCard;

