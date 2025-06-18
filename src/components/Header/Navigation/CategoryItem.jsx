import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaRegSquarePlus, FaRegSquareMinus } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

const CategoryItem = ({category}) => {
	const [isOpen, setIsOpen] = useState(false);
  const hasChildren = category.children && category.children.length > 0;
	return (
		<li className='list-none relative text-[16px] font-semibold text-[rgba(0, 0, 0, 0.8)]'>
			<Link to={category.path}>
        <Button variant="custom" className="w-full justify-start px-3 text-md" onClick={() => setIsOpen(true)}>
          {category.name}
        </Button>
      </Link>
			{hasChildren && (
				<>
					{isOpen ? (
						<FaRegSquareMinus
              className="absolute top-3 right-5 text-xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FaRegSquarePlus
              className="absolute top-3 right-5 text-xl cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
					)}
					{isOpen && (
						<ul className="submenu w-full pl-3">
              {category.children.map((child) => (
                <CategoryItem key={child.id} category={child} />
              ))}
            </ul>
					)}
				</>
			)}
		</li>
	)
}

export default CategoryItem
