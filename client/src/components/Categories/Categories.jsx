import React from 'react'
import CategoryItem from '../CategoryItem/CategoryItem';
import { categories } from '../../data';
import { Container } from './CategoriesStyles';


const Categories = () => {
    return (
        <Container>
          {categories.map(item=> (
              <CategoryItem key={item.id} item={item}/>
          ))
          }  
        </Container>
    )
}

export default Categories
