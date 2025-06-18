import React, { useState } from 'react'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { IoCloseSharp } from "react-icons/io5";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FaRegSquareMinus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import "./style.css"
import { CategoryMenu } from './category-menu';
const CategoryPanel = ({ open, setOpen }) => {
	const [openSubMenu, setOpenSubMenu] = useState(null);
	const [openInnerSubMenu, setOpenInnerSubMenu] = useState(null);

	return (
		<Drawer open={open} onOpenChange={setOpen} direction="left">
			<DrawerContent>
				<DrawerHeader>
					<div className='flex items-center justify-between'>
						<DrawerTitle className="p-3 text-[18px] font-semibold">Shop By Categories</DrawerTitle>
						<IoCloseSharp className='cursor-pointer text-[25px]' onClick={() => setOpen(false)} />
					</div>
					<div className='scroll relative'>
						<CategoryMenu />
					</div>
					

				</DrawerHeader>
				<DrawerFooter>
					<DrawerClose>
						<Button variant="secondary">Close</Button>
					</DrawerClose>
				</DrawerFooter>

			</DrawerContent>
		</Drawer>
	)
}

export default CategoryPanel
