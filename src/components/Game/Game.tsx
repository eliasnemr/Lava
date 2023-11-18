const fakeTeamA = {
  imageUrl: "./assets/ael.svg",
  name: "AEL",
  score: 2,
};
const fakeTeamB = {
  imageUrl: "./assets/apollon.svg",
  name: "Apollon",
  score: 3,
};

const Game = () => {
  return (
    <div className="flex justify-evenly">
      <div className="flex gap-1 items-center">
        <img alt="" className="h-28" src={fakeTeamA.imageUrl} />
        <h1 className="text-md">{fakeTeamA.name}</h1>
      </div>
      <h3 className="font-bold text-lg italic">VS</h3>
      <div>
        <img alt="" className="h-28" src={fakeTeamB.imageUrl} />
        <h1 className="text-md">{fakeTeamB.name}</h1>
      </div>
    </div>
  );
};

export default Game;
