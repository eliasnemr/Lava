import "./App.css";
import Game from "./components/Game/Game";
import Profile from "./components/Profile/Profile";
import Timeline from "./components/Timeline/Timeline";
import Vote from "./components/Vote/Vote";

function App() {
  return (
    <>
      <div className="grid grid-cols-1 grid-rows-1">
        <header className="w-full flex justify-between items-center">
          <div>
            <div className="rounded-full p-1 bg-red-900 flex gap-1 items-center">
              <svg
                className="fill-red-900"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#1a1a1a"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 8v-1a2 2 0 1 0 -4 0" />
                <path d="M15 8v-1a2 2 0 1 1 4 0" />
                <path d="M4 20l3.472 -7.812a2 2 0 0 1 1.828 -1.188h5.4a2 2 0 0 1 1.828 1.188l3.472 7.812" />
                <path d="M6.192 15.064a2.14 2.14 0 0 1 .475 -.064c.527 -.009 1.026 .178 1.333 .5c.307 .32 .806 .507 1.333 .5c.527 .007 1.026 -.18 1.334 -.5c.307 -.322 .806 -.509 1.333 -.5c.527 -.009 1.026 .178 1.333 .5c.308 .32 .807 .507 1.334 .5c.527 .007 1.026 -.18 1.333 -.5c.307 -.322 .806 -.509 1.333 -.5c.161 .003 .32 .025 .472 .064" />
                <path d="M12 8v-4" />
              </svg>
              <h1 className="text-lg pr-2 font-bold text-[#1a1a1a]">
                Lava Bets
              </h1>
            </div>
          </div>
          <Profile />
        </header>
        <main className="pt-8 grid grid-cols-[1fr_minmax(0,_800px)_1fr] grid-rows-1">
          <div />
          <div>
            <Game />
            <Vote />
            <Timeline />
          </div>
          <div />
        </main>
      </div>
    </>
  );
}

export default App;
