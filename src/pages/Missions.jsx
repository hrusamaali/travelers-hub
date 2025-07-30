// src/pages/Missions.jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, toggleMission } from '../redux/missions/missionsSlice';

export default function Missions() {
    const dispatch = useDispatch();
    const { missions, isLoading, error } = useSelector((state) => state.missions);

    useEffect(() => {
        dispatch(fetchMissions());
    }, [dispatch]);

    if (isLoading) return <p>Loading missions...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="p-4 max-w-5xl mx-auto">
            <table className="w-full border border-gray-300">
                <thead>
                    <tr className="bg-gray-100 text-left">
                        <th className="p-2 border">Mission</th>
                        <th className="p-2 border">Description</th>
                        <th className="p-2 border">Status</th>
                        <th className="p-2 border">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {missions.map((mission) => (
                        <tr key={mission.mission_id} className="border-t">
                            <td className="p-2 border font-semibold">{mission.mission_name}</td>
                            <td className="p-2 border">{mission.description}</td>
                            <td className="p-2 border">
                                {mission.reserved ? (
                                    <span className="inline-block min-w-[100px] text-center text-xs bg-green-500 text-white px-2 py-1 rounded">
                                        Active Member
                                    </span>
                                ) : (
                                    <span className="inline-block min-w-[100px] text-center text-xs bg-gray-400 text-white px-2 py-1 rounded">
                                        Not a Member
                                    </span>
                                )}

                            </td>
                            <td className="p-2 border">
                                <button
                                    onClick={() => dispatch(toggleMission(mission.mission_id))}
                                    className={`px-3 py-1 text-sm rounded ${mission.reserved
                                        ? 'border border-red-500 text-red-500 hover:bg-red-100'
                                        : 'bg-blue-500 text-white hover:bg-blue-600'
                                        }`}
                                >
                                    {mission.reserved ? 'Leave Mission' : 'Join Mission'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
