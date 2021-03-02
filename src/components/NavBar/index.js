import React from 'react';
import NavBarWrapper from './styles/NavBarWrapper';
import { Text } from '../Text';

export default function NavBar() {
  return (
    <NavBarWrapper>
      <NavBarWrapper.CentralSide as="ul">
        {' '}
        {[
          { url: '/', name: 'Sobre mim' },
          { url: '/faq', name: 'Contato' },
        ].map((link) => (
          <li key={link.url}>
            <Text variant="smallestException" tag="a" href={link.url}>
              {link.name}
            </Text>
          </li>
        ))}
      </NavBarWrapper.CentralSide>
    </NavBarWrapper>
  );
}
