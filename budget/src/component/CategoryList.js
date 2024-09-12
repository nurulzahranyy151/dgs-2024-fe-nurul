import React, { useEffect, useState } from 'react';
import { listCategories, createCategory, deleteCategory } from '../services/categoryService';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await listCategories();
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleCreateCategory = async () => {
    try {
      const newCategory = await createCategory('66a74498b9fc9213e2c70899', 'rumah');
      setCategories([...categories, newCategory.data]);
    } catch (error) {
      console.error('Error creating category:', error);
    }
  };

  const handleDeleteCategory = async (categoryId) => {
    try {
      await deleteCategory(categoryId);
      setCategories(categories.filter((category) => category._id !== categoryId));
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  return (
    <div>
      <h2>Categories</h2>
      <button onClick={handleCreateCategory}>Add Category</button>
      <ul>
        {categories.map((category) => (
          <li key={category._id}>
            {category.name}
            <button onClick={() => handleDeleteCategory(category._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
