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
    <div className="bg-[#1a1a1a] rounded-lg px-4 py-6 divide-y-[0.5px] divide-slate-500">
      <div className="w-full flex mb-4 flex-start justify-between items-center">
        <div className="bg-red-900 h-max px-2 py-[0.5px] rounded-full">
          <span className="animate-pulse font-bold text-sm">Live</span>
        </div>
        <div className="text-sm flex items-center hover:font-bold hover:cursor-pointer">
          Live Stream
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#fafaff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M17 10h4v4" />
            <path d="M3 12c.887 -1.284 2.48 -2.033 4 -2c1.52 -.033 3.113 .716 4 2s2.48 2.033 4 2c1.52 .033 3 -1 4 -2l2 -2" />
          </svg>
        </div>
      </div>
      <div className="flex justify-evenly">
        <div className="flex gap-4 items-center flex-col mt-4">
          <img alt="" className="h-28" src={fakeTeamA.imageUrl} />
          <h1 className="text-lg font-bold">{fakeTeamA.name}</h1>
          <p className="font-bold text-xl">{fakeTeamA.score}</p>
        </div>
        <h3 className="font-bold text-lg font-mono italic flex items-center text-white">
          VS
        </h3>
        <div className="flex gap-4 items-center flex-col mt-4">
          <img alt="" className="h-28" src={fakeTeamB.imageUrl} />
          <h1 className="text-lg font-bold">{fakeTeamB.name}</h1>
          <p className="font-bold text-xl">{fakeTeamB.score}</p>
        </div>
      </div>
    </div>
  );
};

export default Game;
