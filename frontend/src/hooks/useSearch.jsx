import React, { useCallback, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const useSearch = (searchAttr) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredArray, setFilteredArray] = useState([])

  let originalArray;
  const setOriginalArray = useCallback((arr) => {
    originalArray = arr;
    setFilteredArray(arr);
    filterArray(searchParams.get('search'))
  }, [])

  const deleteSearchParam = useCallback(() => {
    searchParams.delete('search')
    setSearchParams(searchParams);
  }, [])

  const setSearchParam = useCallback((searchValue) => {
    if (searchValue === '') {
      deleteSearchParam();
      setFilteredArray(originalArray)
      return;
    }

    setSearchParams({search: searchValue});
  }, [])

  const filterArray = useCallback((searchValue) => {
    if(searchValue !== null) {
      setSearchParam(searchValue);
      setFilteredArray(originalArray.filter(element => element[searchAttr].toLowerCase().includes(searchValue.toLowerCase())))
    } else {
      setFilteredArray(originalArray)
    }
  }, [])

  const inputValue = searchParams.get('search') ? searchParams.get('search') : '';

  return {setOriginalArray, filterArray, filteredArray, inputValue}
}

export default useSearch