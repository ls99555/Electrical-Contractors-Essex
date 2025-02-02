import React, { useState, useEffect } from 'react';
import './EstimatesList.scss';

const servicesData = {
    domestic: [
        { name: 'New cooker or oven supply', price: 80 },
        { name: 'Cooker hood supply', price: 50 },
        { name: 'Double or single socket', price: 50 },
        { name: 'USB sockets', price: 75 },
        { name: 'Outside socket', price: 60 },
        { name: 'Downlights', price: 60 },
        { name: 'Ceiling pendant', price: 45 },
        { name: 'Lighting supply no fitting supplied', price: 40 },
        { name: 'Outside lights', price: 50 },
        { name: 'Bathroom fans', price: 160 },
        { name: 'Consumer unit and testing', price: 350 },
        { name: 'Electric shower supply', price: 200 },
        { name: 'Electric car charger', price: 350 },
        { name: 'Home Battery Installation', price: 500 }, 
        { name: 'Solar Panel Installation', price: 1000 }
    ],
    commercial: [
        { name: 'Office rewiring', price: 4000 },
        { name: 'Installing new electrical sockets', price: 150 },
        { name: 'Installing new lighting fixtures', price: 200 },
        { name: 'Electrical safety certificate', price: 250 },
        { name: 'Consumer unit replacement', price: 800 },
        { name: 'Emergency lighting installation', price: 500 },
        { name: 'Security system installation', price: 1000 },
        { name: 'Data cabling installation', price: 300 },
        { name: 'Fire alarm system installation', price: 1200 },
        { name: 'HVAC control wiring', price: 600 },
        { name: 'Generator Installation', price: 2000 }, 
        { name: 'CCTV Installation', price: 1500 }
    ],
    testing: [
        { name: 'Periodic inspection report', price: 150 },
        { name: 'Portable appliance testing (PAT)', price: 2 },
        { name: 'Electrical installation condition report (EICR)', price: 150 },
        { name: 'Landlord safety certificate', price: 120 },
        { name: 'Electrical Load Testing', price: 250 }, 
        { name: 'Emergency Lighting Testing', price: 100 }
    ]
};

export const allServices = [
    ...servicesData.domestic,
    ...servicesData.commercial,
    ...servicesData.testing
];

const EstimatesList = ({ headingText, serviceType, setTotal }) => {
    const services = servicesData[serviceType];

    const [serviceValues, setServiceValues] = useState(
        services.reduce((acc, service) => {
            acc[service.name] = 0;
            return acc;
        }, {})
    );

    useEffect(() => {
        const total = Object.keys(serviceValues).reduce((acc, key) => {
            const service = services.find(s => s.name === key);
            return acc + (serviceValues[key] * service.price);
        }, 0);
        setTotal(total);
    }, [serviceValues, services, setTotal]);

    const handleChange = (e, service) => {
        const { value } = e.target;
        setServiceValues({
            ...serviceValues,
            [service.name]: parseInt(value, 10) || 0
        });
    };

    const totalEstimate = Object.keys(serviceValues).reduce((acc, key) => {
        const service = services.find(s => s.name === key);
        return acc + (serviceValues[key] * service.price);
    }, 0);

    return (
        <div className="estimate-form">
            <h2>{headingText}</h2>
            <form>
                {services.map(service => (
                    <div key={service.name}>
                        <label>
                            {service.name} (£{service.price} each):
                            <input
                                type="number"
                                min="0"
                                value={serviceValues[service.name]}
                                onChange={(e) => handleChange(e, service)}
                            />
                        </label>
                    </div>
                ))}
            </form>
            <h4>Total estimate: £{totalEstimate.toFixed(2)}</h4>
        </div>
    );
};

export default EstimatesList;