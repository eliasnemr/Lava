import { format, subMinutes } from "date-fns";
const fakeVotes = [
  {
    id: "0x01",
    time: format(subMinutes(new Date(), 10), "hh:mm:ss"),
    name: "Bob",
    vote: "Apollon",
    lava: "0.112435",
  },
  {
    id: "0x02",
    time: format(subMinutes(new Date(), 9), "hh:mm:ss"),

    name: "Alice",
    vote: "AEL",
    lava: "0.01212",
  },
  {
    id: "0x03",
    time: format(subMinutes(new Date(), 8), "hh:mm:ss"),

    name: "Jim",
    vote: "AEL",
    lava: "0.21212",
  },
  {
    id: "0x04",
    time: format(subMinutes(new Date(), 5), "hh:mm:ss"),
    name: "Vitalik",
    vote: "AEL",
    lava: "1.41212",
  },
];

const Timeline = () => {
  return (
    <div className="bg-[#1a1a1a] mt-8 rounded-lg p-4">
      <header className="grid grid-rows-1 grid-cols-[1fr_1fr_1fr_1fr] font-bold">
        <div>Time</div>
        <div>Name</div>
        <div>Vote</div>
        <div>$LAVA</div>
      </header>
      <main className="flex justify-evenly pt-8">
        <ul className="w-full grid grid-rows-1 grid-cols-1 text-center gap-2">
          {fakeVotes.map((v) => (
            <li className="grid grid-rows-1 grid-cols-[1fr_1fr_1fr_1fr] w-full text-center">
              <div>{v.name}</div>
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
