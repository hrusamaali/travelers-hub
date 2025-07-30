import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, toggleReservation } from '../redux/rockets/rocketsSlice';

const Rockets = () => {
    const dispatch = useDispatch();
    const { rockets, isLoading, error } = useSelector((state) => state.rockets);

    useEffect(() => {
        if (rockets.length === 0) {
            dispatch(fetchRockets());
        }
    }, [dispatch, rockets]);

    if (isLoading) {
        return <div className="text-center p-6 text-blue-600">Loading...</div>;
    }

    if (error) {
        return <div className="text-center p-6 text-red-500">Error: {error}</div>;
    }

    return (
        <div className="px-4 sm:px-6 md:px-8 lg:px-10 py-6 max-w-6xl mx-auto">
            {rockets.map((rocket) => (
                <div
                    key={rocket.id}
                    className="flex flex-col md:flex-row gap-6 border border-gray-200 rounded-xl p-4 mb-6 shadow-sm hover:shadow-md transition"
                >
                    <img
                        src={rocket.flickr_images[0]}
                        alt={rocket.name}
                        className="w-full md:w-60 h-60 object-cover rounded-md"
                    // src="https://imgur.com/DaCfMsj.jpg" alt="Falcon 1" class="w-full md:w-60 h-60 object-cover rounded-md"
                    />
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-2 text-gray-900">{rocket.name}</h2>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            {rocket.reserved && (
                                <span className="inline-block text-xs font-medium text-white bg-green-600 px-2 py-1 rounded mr-2">
                                    Reserved
                                </span>
                            )}
                            {rocket.description}
                        </p>
                        <button
                            onClick={() => dispatch(toggleReservation(rocket.id))}
                            className={`px-4 py-2 text-sm font-semibold rounded-md text-white transition 
                ${rocket.reserved
                                    ? 'bg-gray-600 hover:bg-gray-700'
                                    : 'bg-blue-600 hover:bg-blue-700'
                                }`}
                        >
                            {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Rockets;
