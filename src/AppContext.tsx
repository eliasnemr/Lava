import { format, subMinutes } from "date-fns";
import { createContext, useEffect, useState } from "react";

export const appContext = createContext({} as any);

interface IProps {
  children: any;
}

const AppProvider = ({ children }: IProps) => {
  const [queue, setQueue] = useState<
    { id: string; time: string; vote: string; lava: string }[]
  >([]);

  const [game, setCurrentGame] = useState<{
    id: string;
    timeStarted: string;
    timeLeft: string;
  }>();

  useEffect(() => {
    generateFakeQueue();
  }, []);

  const generateFakeQueue = () => {
    const fakeUsersInQueue = [
      {
        id: "0xc0ffee254729296a45a3885639AC7E10F9d54979",
        time: format(subMinutes(new Date(), 10), "hh:mm:ss"),
        vote: "Apollon",
        lava: "0.112435",
      },
      {
        id: "0xAF91fFc72f48B8A0Cd4230aC7C4F0D0875C3b809",
        time: format(subMinutes(new Date(), 9), "hh:mm:ss"),

        vote: "AEL",
        lava: "0.01212",
      },
      {
        id: "0xEFD0CB6f2D98Ae89eDA29e419BB138C4B2D76404",
        time: format(subMinutes(new Date(), 8), "hh:mm:ss"),
        vote: "AEL",
        lava: "0.21212",
      },
      {
        id: "0xAD9628087CaC599b0b11dAa83964aA64e2E208b0",
        time: format(subMinutes(new Date(), 5), "hh:mm:ss"),
        vote: "AEL",
        lava: "1.41212",
      },
    ];

    setQueue(fakeUsersInQueue);
  };

  return (
    <appContext.Provider
      value={{
        queue,
        setQueue,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default AppProvider;
