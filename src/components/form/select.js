import React from 'react'
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css'
import './form.css'



const SelectValue = ({options , setSelectValue,selectValue,placeholder}) => {
  // console.log(options)
    
    return (
        <SelectSearch
        search={true}
        placeholder={placeholder?placeholder:'Placeholder'}
        defaultValue={selectValue}
        name="language"
        options={options}
        onChange={(e) => {
          setSelectValue(e)
        }}
      />
    );
}

export default SelectValue;
