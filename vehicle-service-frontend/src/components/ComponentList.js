import React, { useEffect, useState } from 'react';
import api from '../api/api';  // Import Axios instance

const ComponentList = () => {
    const [components, setComponents] = useState([]);

    useEffect(() => {
        const fetchComponents = async () => {
            try {
                const response = await api.get('components/');
                setComponents(response.data);  // Store components in state
            } catch (error) {
                console.error("There was an error fetching the components:", error);
            }
        };

        fetchComponents();  // Call the function on component mount
    }, []);

    return (
        <div>
            <h2>Components</h2>
            <ul>
                {components.map(component => (
                    <li key={component.id}>{component.name} - ${component.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default ComponentList;
