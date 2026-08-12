import Button from "../Button";

const Card = ({character}) => {
  return (
    <div
      className="card"
      style={{
        background: `linear-gradient(${character.color}, #000000)`,
      }}
    >
      <img src={character.imgUrl} alt={character.name} />

      <h1>{character.name}</h1>

      <p>{character.role}</p>
      <Button color={character.color} status={character.status} />
    </div>
  );
};

export default Card;
