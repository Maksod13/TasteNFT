import { useState , ChangeEvent , FormEvent , KeyboardEvent } from "react"
import "./input.scss"
import { SearchIcon } from "../../shared/assets/icons/searchIcon"

interface Props {
    onSearch: (term:string) => void
}

export const SearchInput:React.FC<Props> = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState('')
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
       setSearchTerm(event.target.value)                
    }

   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSearch(searchTerm)
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.preventDefault()
            onSearch(searchTerm)
        }
    }
    
    return (
        <form className="SearchInputForm" onSubmit={handleSubmit}>
                 <SearchIcon className="SearchIcon" />
            <input
                className="SearchInput"
                type="text"      
                placeholder="Search for ..."
                value={searchTerm}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                />
        </form>
    )
}

