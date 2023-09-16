import React from 'react'

interface GroupProps {
    setGroupType: React.Dispatch<React.SetStateAction<string>>
}

const Group: React.FC<GroupProps> = ({ setGroupType }) => {
    return (
        <select className=' btn btn-secondary dropdown-toggle' onChange={(e) => setGroupType(e.target.value)}>
            <option value="name">Name</option>
            <option value="code">Code</option>
            <option value="native">Native</option>
            <option value="capital">Capital</option>
            <option value="emoji">Emoji</option>
            <option value="currency">Currency</option>
            <option value="namelanguage">name(language)</option>
            <option value="codelanguage">code(language)</option>
        </select>
    )
}

export default Group