import { baseUrl } from "./apiKeyAndHost.js"; 
import { apiKey } from "../config.js";

const API_KEY_HEADER = 'X-API-KEY';

export async function getData (path, query = {}) {
  const url = new URL (`${baseUrl}${path}`);
  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      url.searchParams.set(key, String(value));
    }
  });
  const getDataResponse = await fetch (url.toString(), {
    method: "GET",
    headers: {
      [API_KEY_HEADER]: apiKey,
      Accept: "application/json",
    }
  });
  if (!getDataResponse.ok) {
    const text = await getDataResponse.text().catch(() => "");
    throw new Error(`HTTP ${getDataResponse.status}: ${text}`)
  }

  return getDataResponse.json();
}

// export function getData() {

//   fetch (`${baseUrl}/v1.5/movie`, {
//     headers: {
//       'X-API-KEY': `${apiKey}`,

//     }
//   })
//     .then(response => response.json())
//     .then(jsonResult => console.log(jsonResult))
// }
