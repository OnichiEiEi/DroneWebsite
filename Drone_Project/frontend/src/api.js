const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getDroneConfig(droneId) {
  const res = await fetch(`${BASE_URL}/configs/${droneId}`);
  if (!res.ok) throw new Error('Failed to fetch config');
  return res.json();
}

export async function postLog(data) {
  const res = await fetch(`${BASE_URL}/logs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to submit log');
  return res.json();
}

export async function getLogs(droneId, page = 1, perPage = 12) {
  const url = `${BASE_URL}/logs/${droneId}?page=${page}&perPage=${perPage}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch logs');

  const data = await res.json();

  return {
    items: data.items,
    hasMore: data.items.length === perPage,
    totalItems: data.totalItems
  };
}