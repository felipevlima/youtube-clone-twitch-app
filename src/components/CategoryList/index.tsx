import React from 'react';

import { List, CategoryContainer, CategoryName, CategoryImage, CategoryStatus, RedCircle, Info } from './styles';
import data from './data';

interface ItemProps {
  item: typeof data[0];
}

const CategoryList: React.FC = () => {
  const CategoryItem: React.FC<ItemProps> = ({ item }) => {
    return (
      <CategoryContainer>
        <CategoryImage source={item.source} />
        <CategoryName numberOfLines={1}>{item.name}</CategoryName>
        <CategoryStatus>
          <RedCircle />
          <Info>{item.views}k</Info>
        </CategoryStatus>
      </CategoryContainer>
    );
  };
  return (
    <List>
      {data.map((item) => (
        <CategoryItem key={item.name} item={item} />
      ))}
    </List>
  );
};

export default CategoryList;
