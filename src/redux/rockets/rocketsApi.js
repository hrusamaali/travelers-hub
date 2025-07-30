const API_URL = 'https://api.spacexdata.com/v4/rockets';

export const fetchRockets = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
};
