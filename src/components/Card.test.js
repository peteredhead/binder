import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

import { MemoryRouter } from 'react-router-dom';


describe('Card component', () => {
  it('returns nothing if no details have been loaded', () => {
    const props = { details: {} };
    const { container } = render(
      <MemoryRouter>
        <Card {...props} />
      </MemoryRouter>
    );
    expect(container.children.length).toBe(0);
  }),
  it('correctly displays the details', () => {
    const details = {
      id: 'ca083411-2600-451e-9f8b-ebd5a42e3f1a',
      name: 'Nyx Herald',
      image_uris: {
        small: 'https://img.scryfall.com/cards/small/front/c/a/ca083411-2600-451e-9f8b-ebd5a42e3f1a.jpg?1579772277',
        normal: 'https://img.scryfall.com/cards/normal/front/c/a/ca083411-2600-451e-9f8b-ebd5a42e3f1a.jpg?1579772277',
        large: 'https://img.scryfall.com/cards/large/front/c/a/ca083411-2600-451e-9f8b-ebd5a42e3f1a.jpg?1579772277',
      },
      oracle_text: 'At the beginning of combat on your turn, target enchanted creature or enchantment creature you control gets +1/+1 and gains trample until end of turn.',
      legalities: {
        standard: 'legal',
        future: 'legal',
        historic: 'legal',
        pioneer: 'legal',
        modern: 'legal',
        legacy: 'legal',
        pauper: 'not_legal',
        vintage: 'legal',
        penny: 'legal',
        commander: 'legal',
        brawl: 'legal',
        duel: 'legal',
        oldschool: 'not_legal'
      },
      set_name: 'Theros Beyond Death',
      collector_number: '189',
      rarity: 'uncommon',
      flavor_text: '\'Un richiamo penetrante e limpido come le stelle risuonò attraverso la valle, incitando la banda Feres alla guerra, al sangue e alla violenza.\'\n—Lufea di Setessa, *Storie*',
    };
    const props = { details: details };
    const { container } = render(
      <MemoryRouter>
        <Card {...props} />
      </MemoryRouter>
    );
    expect(
      container.getElementsByTagName('h1')[0].innerHTML
    ).toBe('Nyx Herald');
    expect(container.getElementsByTagName('li').length).toBe(13);
  });
});
