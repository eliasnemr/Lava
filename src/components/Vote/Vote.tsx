import { useAccount } from "wagmi";
import { fakeTeamA } from "../Game/Game";
import { fakeTeamB } from "../Game/Game";

const Vote = () => {
  const { isConnected } = useAccount();

  console.log("Is user connected?", isConnected);

  return (
    <>
      {!isConnected && (
        <div className="bg-[#1a1a1a] mt-8 grid grid-rows-1 p-4 gap-4 text-center">
          <h3 className="text-center text-slate-400">Connect wallet to play</h3>
        </div>
      )}
      {isConnected && (
        <div className="bg-[#1a1a1a] mt-8 grid grid-cols-[1fr_1fr] grid-rows-1 p-4 gap-4">
          <div className="w-full flex flex-col gap-2">
            <h3 className="font-semibold text-2xl text-slate-400">
              {fakeTeamA.name}
            </h3>
            <button
              disabled={!isConnected}
              className="bg-white text-xl text-black font-mono disabled:bg-slate-400 disabled:cursor-not-allowed disabled:text-slate-800"
            >
              Vote
            </button>
            <div className="flex justify-center">
              <span className="text-purple-600 font-mono">0.20</span>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <h3 className="font-semibold text-2xl text-slate-400">
              {fakeTeamB.name}
            </h3>

            <button
              disabled={!isConnected}
              className="bg-white text-xl text-black font-mono disabled:bg-slate-400 disabled:cursor-not-allowed disabled:text-slate-800"
            >
              Vote
            </button>
            <div className="flex justify-center">
              <span className="text-purple-600 font-mono">0.1012</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Vote;
