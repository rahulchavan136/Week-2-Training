import { useState } from 'react';

const useTempConverter = () => {
    const [temperature, setTemperature] = useState('');
    const [unit, setUnit] = useState('celsius');

    const convertTemperature = (inputTemp, inputUnit) => {
        const temp = parseFloat(inputTemp);
        if (Number.isNaN(temp)) {
            return '';
        }

        if (inputUnit === 'celsius') {
            // Celsius to Fahrenheit
            const convertedTemp = (temp * 9/5) + 32;
            return `${temp}°C is ${convertedTemp.toFixed(2)}°F`;
            
        } else {
            // Fahrenheit to Celsius
            const convertedTemp = (temp - 32) * 5/9;
            return `${temp}°F is ${convertedTemp.toFixed(2)}°C`;
        }
    };

    return {
        temperature,
        unit,
        setTemperature,
        setUnit,
        convertTemperature,
    };
};

export default useTempConverter;
