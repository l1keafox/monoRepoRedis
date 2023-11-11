import { createClient } from "redis";

const MAX_RETRIES = 2;

const redis = createClient({
  url: "redis://:eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81@localhost:6379",
  socket: {
    reconnectStrategy: (times) => {
      if (times >= MAX_RETRIES) {
        return new Error(`Reached max retries (${MAX_RETRIES}) while attempting to connect`);
      }
      return times;
    },
  },
});

(async () => {
  try {
    await redis.connect();
  } catch (err) {
  }
})();
export { redis };