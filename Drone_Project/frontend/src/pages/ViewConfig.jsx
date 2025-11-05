import { useEffect, useState } from 'react';
import { getDroneConfig } from '../api';
import { TbDrone } from "react-icons/tb";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa6";
import { FaCity } from "react-icons/fa";

export default function ViewConfig({ droneId }) {
  const [config, setConfig] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!droneId) return;
    getDroneConfig(droneId)
      .then(setConfig)
      .catch(err => setError(err.message));
  }, [droneId]);

  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!config) return <p>Loading drone config...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Drone Configuration</h1>
      <div className="grid grid-cols-2 gap-4 text-lg">
        <article className="flex items-center justify-between rounded-lg shadow-sm bg-theme bg-accent p-4">
          <div>
            <p className="text-sm text-gray-500 text-theme">Drone ID</p>
            <p className="text-2xl font-medium text-gray-900 text-theme">{config.drone_id}</p>
          </div>
          <TbDrone className='text-3xl text-theme'/>
        </article>
        <article className="flex items-center justify-between rounded-lg shadow-sm bg-theme bg-accent p-4">
          <div>
            <p className="text-sm text-gray-500 text-theme">Drone Name</p>
            <p className="text-2xl font-medium text-gray-900 text-theme">{config.drone_name}</p>
          </div>
          <MdDriveFileRenameOutline className='text-3xl text-theme'/>
        </article>
        <article className="flex items-center justify-between rounded-lg shadow-sm bg-theme bg-accent p-4">
          <div>
            <p className="text-sm text-gray-500 text-theme">Light</p>
            <p className="text-2xl font-medium text-gray-900 text-theme">{config.light}</p>
          </div>
          <FaRegLightbulb className='text-3xl text-theme'/>
        </article>
        <article className="flex items-center justify-between rounded-lg shadow-sm bg-theme bg-accent p-4">
          <div>
            <p className="text-sm text-gray-500 text-theme">Country</p>
            <p className="text-2xl font-medium text-gray-900 text-theme">{config.country}</p>
          </div>
          <FaCity className='text-3xl text-theme'/>
        </article>
      </div>
    </div>
  );
}