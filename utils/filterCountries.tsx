import { CountryData } from '../types/Types'

export const FilteredCountrys = (CountrysData: CountryData['countriesType'], InputValue: string, GroupType: string) => {
    const filteredData = CountrysData.filter((country) => {
        if (GroupType === "name") {
            return country.name?.toLowerCase().includes(InputValue.toLowerCase());
        }
        if (GroupType === "code") {
            return country.code?.toLowerCase().includes(InputValue.toLowerCase());
        }
        if (GroupType === "native") {
            return country.native?.toLowerCase().includes(InputValue.toLowerCase());
        }
        if (GroupType === "capital") {
            return country.capital?.toLowerCase().includes(InputValue.toLowerCase());
        }
        if (GroupType === "emoji") {
            return country.emoji?.toLowerCase().includes(InputValue.toLowerCase());
        }
        if (GroupType === "currency") {
            return country.currency?.toLowerCase().includes(InputValue.toLowerCase());
        }
        if (GroupType === "namelanguage") {
            return country.languages.some((language) => { return language.name?.toLocaleLowerCase().includes(InputValue.toLocaleLowerCase()) })
        }
        if (GroupType === "codelanguage") {
            return country.languages.some((language) => { return language.code?.toLocaleLowerCase().includes(InputValue.toLocaleLowerCase()) })
        }
    });
    return filteredData
} 