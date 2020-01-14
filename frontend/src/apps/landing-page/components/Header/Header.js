import React from 'react';
import NavHeaderConfig from '../../../../config/NavHeader.config';
import ItemHeader from './ItemHeader';
import { ContainerHeader, ContainerNav, Logo } from './Styles';

export default function Header() {
  return (
    <ContainerHeader>
      <Logo>logo</Logo>
      <ContainerNav>
        {NavHeaderConfig.map(item => (<ItemHeader item={item} />))}
      </ContainerNav>
    </ContainerHeader>
  );
}