import Hedera from "./hw-app-hedera";
import type { Resolver } from "../../hw/getAddress/types";

const resolver: Resolver = async (transport, { path }) => {
  const hedera = new Hedera(transport);
  const publicKey = await hedera.getPublicKey(path);

  return {
    path,
    // NOTE: we do not have the address, it must be entered by the user
    address: "",
    publicKey,
  };
};

export default resolver;
