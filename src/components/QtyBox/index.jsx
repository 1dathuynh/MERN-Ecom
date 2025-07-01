import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import {Button} from "@/components/ui/button"
import { useState } from "react";
const QtyBox = () => {
	const [qtyVal, setQtyVal] = useState(1);
	const plusQty = () => {
		setQtyVal(qtyVal + 1)
	}
	const minusQty = () => {
		if(qtyVal === 1){
			setQtyVal(1)
		}
		else{
			setQtyVal(qtyVal - 1)
		}
		
	}
	return (
			<div className='QtyBox flex items-center justify-center relative '>
				<input type='number' className='w-full h-[40px] pl-5 text-[15px] pr-8 p-2 focus:outline-none border-1 border-[#222]' value={qtyVal} defaultValue={1} />
				<div className="flex items-center h-full flex-col justify-between absolute top-0 right-0 z-20 border-l-1 border-gray-500 ">
					<Button onClick = {plusQty} variant="custom3" className="min-w-[30px]  h-[20px]" ><FaAngleUp className="text-[5px] opacity-50 " /></Button>

					<Button onClick = {minusQty} variant="custom3" className="min-w-[30px] h-[20px]"><FaAngleDown className="text-[5px] opacity-50 " /></Button>
				</div>
			</div>
		
	)
}

export default QtyBox
