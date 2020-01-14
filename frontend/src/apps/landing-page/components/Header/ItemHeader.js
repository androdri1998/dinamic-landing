import React from 'react';
import { ContainerItemHeader } from './Styles';

export default function ItemHeader({item}) {
  return (
    <ContainerItemHeader>{item.name}</ContainerItemHeader>
  );
}