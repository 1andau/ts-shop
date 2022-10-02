import React from 'react'


type CategoriesProps = {
  value: number;
  onChangeCategory: (idx: number) => void; 
}
export const Categories: React.FC<CategoriesProps> = React.memo(({ value, onChangeCategory }) => {
  const category = ["all", "dystopia", "novel", "fantasy"]; 

  return (
<div className="category">
    <ul>
        {category.map((categoryName, i) => (
  <li key={i} onClick={()=> onChangeCategory(i)} className={value === i ? 'active' : ''}>
      {categoryName}
  </li>          
        ))}
    </ul>
</div>
  )
})

