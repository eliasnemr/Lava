import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

const Profile = () => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  if (isConnected)
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm rounded-full bg-[#1a1a1a] text-[#fafafa] px-4 py-2 flex gap-2">
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
            <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
            <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
          </svg>
          {`${address?.substring(0, 7)}...${address?.substring(
            address.length - 4,
            address.length
          )}`}
        </span>

        <button onClick={() => disconnect()}>Disconnect</button>
      </div>
    );
  return <button onClick={() => connect()}>Connect Wallet</button>;
};

export default Profile;
