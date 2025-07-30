// src/pages/Profile.jsx
import { useSelector } from 'react-redux';

export default function Profile() {
    const reservedRockets = useSelector((state) =>
        state.rockets.rockets.filter((rocket) => rocket.reserved)
    );

    const reservedMissions = useSelector((state) =>
        state.missions.missions.filter((mission) => mission.reserved)
    );

    return (
        <div className="flex flex-col md:flex-row gap-4 p-6 max-w-6xl mx-auto">
            {/* Reserved Missions */}
            <div className="w-full md:w-1/2">
                <h2 className="text-xl font-bold mb-4">My Missions</h2>
                {reservedMissions.length > 0 ? (
                    <ul className="space-y-2 border rounded p-4">
                        {reservedMissions.map((mission) => (
                            <li
                                key={mission.mission_id}
                                className="border p-2 rounded shadow text-sm font-medium"
                            >
                                {mission.mission_name}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500 italic">No missions joined.</p>
                )}
            </div>

            {/* Reserved Rockets */}
            <div className="w-full md:w-1/2">
                <h2 className="text-xl font-bold mb-4">My Rockets</h2>
                {reservedRockets.length > 0 ? (
                    <ul className="space-y-2 border rounded p-4">
                        {reservedRockets.map((rocket) => (
                            <li
                                key={rocket.id}
                                className="border p-2 rounded shadow text-sm font-medium"
                            >
                                {rocket.name}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500 italic">No rockets reserved.</p>
                )}
            </div>
        </div>
    );
}
