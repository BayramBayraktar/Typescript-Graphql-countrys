import React, { useState } from 'react'
import { useAllCountries } from '../hooks/graphql'
import { FilteredCountrys } from '../utils/filterCountries'
import Input from '../components/input'
import Group from '../components/group'
import Table from '../components/Table'
import Spiner from '../components/spiner'

const Home: React.FC = () => {
  const { loading, error, data } = useAllCountries()
  const CountrysData = data?.countries || []
  const [InputValue, setInputValue] = useState<string>("")
  const [GroupType, setGroupType] = useState<string>("name")

  if (loading) return <Spiner />
  if (error) return <p>{error.message}</p>
  if (!data) {
    return <p>No data available</p>;
  }

  const filteredCountries = FilteredCountrys(CountrysData, InputValue, GroupType);

  return (
    <div className='container'>
      <div style={{ zIndex: 10, }} className='d-flex justify-content-center p-4  position-sticky top-0 bg-white animate__animated animate__slideInDown'>
        <Input setInputValue={setInputValue} />
        <Group setGroupType={setGroupType} />
      </div>
      <Table filteredCountries={filteredCountries} />
    </div>
  )
}

export default Home