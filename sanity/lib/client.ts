import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "teyd33fw",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});

export default client;
