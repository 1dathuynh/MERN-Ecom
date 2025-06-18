// components/CategoryMenu.tsx
import CategoryItem from "./CategoryItem";
import { categories } from "../Navigation/data/category-data";

export const CategoryMenu = () => {
  return (
    <ul className="w-full">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </ul>
  );
};
