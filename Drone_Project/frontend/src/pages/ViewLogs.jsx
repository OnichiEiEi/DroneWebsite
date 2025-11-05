import { useEffect, useState } from 'react';
import { getLogs } from '../api';

export default function ViewLogs({ droneId }) {
  const [logs, setLogs] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!droneId) return;

    const fetchLogs = async () => {
      setIsLoading(true);
      try {
        const res = await getLogs(droneId, page);
        setLogs(res.items);
        setHasMore(res.hasMore);
      } catch (err) {
        console.error('Failed to fetch logs:', err);
        setLogs([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLogs();
  }, [droneId, page]);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-2">Logs for Drone ID: {droneId || '—'}</h2>

      {isLoading ? (
        <p className="text-gray-500">Loading logs...</p>
      ) : (
        <>
          <table className="w-full rounded-lg overflow-hidden shadow-sm">
            <thead className="bg-blue-200 text-blue-700">
              <tr>
                <th className="px-4 py-2 text-left">Created</th>
                <th className="px-4 py-2 text-left">Country</th>
                <th className="px-4 py-2 text-left">Drone ID</th>
                <th className="px-4 py-2 text-left">Drone Name</th>
                <th className="px-4 py-2 text-left">Celsius</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log, index) => (
                <tr key={index} className="border-t hover:bg-slate-500 hover:text-slate-400">
                  <td className="px-4 py-2">{new Date(log.created).toLocaleString()}</td>
                  <td className="px-4 py-2">{log.country}</td>
                  <td className="px-4 py-2">{log.drone_id}</td>
                  <td className="px-4 py-2">{log.drone_name}</td>
                  <td className="px-4 py-2">{log.celsius}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='max-w-lg flex flex-col items-center mx-auto'>
            <div className="mt-4 space-x-4 ">
              <button
                disabled={page === 1}
                onClick={() => setPage(1)}
                className="px-4 py-2 bg-blue-500 rounded-md shadow-md hover:bg-blue-700 hover:text-white disabled:opacity-50"
              >
                First
              </button>
              <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className="px-4 py-2 bg-blue-500 rounded-md shadow-md hover:bg-blue-700 hover:text-white disabled:opacity-50"
              >
                Previous
              </button>
              <span className="text-sm text-gray-600">Page {page}</span>
              <button
                disabled={!hasMore}
                onClick={() => setPage(page + 1)} // หรือใช้ totalPages ถ้ามี
                className="px-4 py-2 bg-blue-500 rounded-md shadow-md hover:bg-blue-700 hover:text-white disabled:opacity-50"
              >
                Last
              </button>
              <button
                disabled={!hasMore}
                onClick={() => setPage(page + 1)}
                className="px-4 py-2 bg-blue-500 rounded-md shadow-md hover:bg-blue-700 hover:text-white disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}