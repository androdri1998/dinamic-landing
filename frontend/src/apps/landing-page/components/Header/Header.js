import React from 'react';
import NavHeaderConfig from '../../../../config/NavHeader.config';
import ItemHeader from './ItemHeader';

export default function Header() {
  return (
    <>
      {NavHeaderConfig.map( item => (<ItemHeader item={item} />))}
    </>
  );
}