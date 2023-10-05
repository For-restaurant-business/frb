import PocketBase from "pocketbase";

export const pb = new PocketBase(process.env.POCKETBASE_HOST);

export default pb;
