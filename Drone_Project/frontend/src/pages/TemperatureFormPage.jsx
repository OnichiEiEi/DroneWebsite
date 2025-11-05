import { useState } from 'react';
import { getDroneConfig, postLog } from '../api';

export default function TemperatureFormPage({ setDroneId }) {
  const [inputId, setInputId] = useState('');
  const [config, setConfig] = useState(null);
  const [celsius, setCelsius] = useState('');
  const [status, setStatus] = useState('');

  const handleGetConfig = async (e) => {
    e.preventDefault();
    try {
      const result = await getDroneConfig(inputId);
      setConfig(result);
      setDroneId(inputId);
      setStatus('Drone config loaded');
    } catch {
      setStatus('Failed to load drone config');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!config || celsius === '') {
      setStatus('Please enter temperature and load config first');
      return;
    }

    const payload = {
      drone_id: config.drone_id,
      drone_name: config.drone_name,
      country: config.country,
      celsius: parseFloat(celsius),
    };

    try {
      await postLog(payload);
      setStatus('Log submitted successfully!');
      setCelsius('');
    } catch (err) {
      console.error("Error submitting temperature:", err);
      setStatus('Failed to submit log');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-2">Temperature Log Form</h1>

      <form onSubmit={handleGetConfig} className="grid grid-cols-2 gap-2">
        <input
          type="text"
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
          placeholder="Enter Drone ID"
          className="border p-2 rounded-md text-theme bg-theme"
        />
        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded-md shadow-sm hover:bg-green-700"
        >
          Load Config
        </button>
      </form>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-2">
        <input
          type="number"
          value={celsius}
          onChange={(e) => setCelsius(e.target.value)}
          placeholder="Temperature in Celsius"
          className="border p-2 rounded-md text-theme bg-theme"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md shadow-sm hover:bg-blue-700"
        >
          Submit Data
        </button>
      </form>

      {status && <p className="mt-2 text-sm text-theme">{status}</p>}
    </div>
  );
}