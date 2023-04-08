import React, { useState } from 'react'
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css'
import './form.css'



const SelectValue = ({options}) => {
    const [selectValue, setSelectValue] = useState('orange')
    return (
        <SelectSearch
        search={true}
        placeholder='Profession'
        defaultValue={selectValue}
        name="language"
        options={options}
        onChange={(e) => setSelectValue(e)}
      />
    );
}

export default SelectValue;
