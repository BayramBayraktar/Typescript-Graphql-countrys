import React, { useState, useEffect } from 'react';
import { CountryType } from '../types/Types'
import { Table as BootstrapTable } from 'reactstrap';

interface TableProps {
    filteredCountries: CountryType["countriesType"]
}

const Table: React.FC<TableProps> = ({ filteredCountries }) => {

    const [selectList, setselectList] = useState<CountryType['countryType']>();
    const [selectedColor, setSelectedColor] = useState<string>();
    const colors = ['table-danger', 'table-warning', 'table-info', 'table-dark'];

    const generateRandomColor = () => {
        let randomColor
        do { randomColor = colors[Math.floor(Math.random() * colors.length)] }
        while (randomColor == selectedColor)
        setSelectedColor(randomColor)
    };

    useEffect(() => {
        generateRandomColor();
    }, [selectList]);

    const HandlerController = (country: {}, index: number) => {
        if (selectList === country) {
            return selectedColor
        }
        if (index == 9 || index == filteredCountries.length - 1) {
            return selectedColor
        }
    }

    return (
        <BootstrapTable>
            <thead >
                <tr>
                    <th scope='col'>Name</th>
                    <th scope='col'>Native</th>
                    <th scope='col'>Capital</th>
                    <th scope='col'>Code</th>
                    <th scope='col'>Language-name</th>
                    <th scope='col'>Language-code</th>
                    <th scope='col'>Currency</th>
                    <th scope='col'>Emoji</th>
                </tr>
            </thead>
            <tbody className='animate__animated animate__slideInUp'>
                {filteredCountries.map((country, index: number) => (
                    <tr
                        onClick={() => setselectList(country)}
                        className={HandlerController(country, index)}
                        key={country.code}>
                        <td>{country.name}</td>
                        <td>{country.native}</td>
                        <td>{country.capital}</td>
                        <td>{country.code}</td>
                        <td>{country.languages.map((i) => i.name + ' ')}</td>
                        <td>{country.languages.map((i) => i.code + ' ')}</td>
                        <td>{country.currency}</td>
                        <td>{country.emoji}</td>
                    </tr>
                ))}

            </tbody>
        </BootstrapTable >
    )
}

export default Table