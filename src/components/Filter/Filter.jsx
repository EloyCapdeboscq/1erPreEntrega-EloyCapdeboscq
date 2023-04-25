import { useState } from "react"

const Filter = ({children}) => {
  
    const [filterState, setFilteState] = useState('')
  
    const handleFilterChange = (evt) => {
        setFilteState(evt.target.value)
    }

    return children({filterState, handleFilterChange})
}

export default Filter