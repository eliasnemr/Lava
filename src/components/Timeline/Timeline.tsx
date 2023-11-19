import { useContext } from "react";
import { appContext } from "../../AppContext";

const Timeline = () => {
  const { queue } = useContext(appContext);

  return (
    <div className="bg-[#1a1a1a] mt-8 rounded-lg">
      <header className="grid grid-rows-1 grid-cols-[1fr_1fr_1fr_1fr] font-bold p-4 bg-black bg-opacity-50 text-white">
        <div>Address</div>
        <div>Time</div>
        <div>Vote</div>
        <div>$LAVA</div>
      </header>
      <main className="flex justify-evenly pt-8 py-4">
        <ul className="w-full grid grid-rows-1 grid-cols-1 text-center gap-2">
          {queue.map((v) => (
            <li className="grid grid-rows-1 grid-cols-[1fr_1fr_1fr_1fr] w-full text-center font-light bg-black bg-opacity-50 p-4">
              <div className="text-slate-600">{`${v.id.substring(
                0,
                6
              )}...${v.id.substring(v.id.length - 4, v.id.length)}`}</div>
              <div>{v.time}</div>
              <div>{v.vote}</div>
              <div>{v.lava}</div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Timeline;
