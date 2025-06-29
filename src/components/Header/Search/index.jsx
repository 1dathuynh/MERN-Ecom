import React from 'react'
import { Button } from "@/components/ui/button"
import { FaSearch } from "react-icons/fa";
import '../Search/style.css'
const Search = () => {
	return (
		<div className='searchBox w-full h-[50px] bg-[#e5e5e5] rounded-sm relative shadow-sm'>
			<input type='text' placeholder='Search for products...' className='mt-1 w-full h-[45px] focus:outline-none bg-inherit p-2.5 text-[15px]' />
				
			<Button  variant="outline" size="icon" className="absolute top-2 right-2 z-50 flex items-center bg-[#e5e5e5]">
				<FaSearch className='text-[#4e4e4e] text-xl' />
			</Button>
		</div>
	)
}

export default Search
