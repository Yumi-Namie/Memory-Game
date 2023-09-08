import { beforeEach, describe, expect, it } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Game from '../src/pages/Game';

describe('Game component', () => {
  beforeEach(async () => {
    render(
      <MemoryRouter initialEntries={['/game']}>
        <Game />
      </MemoryRouter>
    );
  });

  it("displays the hero image", () => {
    const heroImage = document.querySelector('.container .section'); // Adjust the selector based on your component structure
    expect(heroImage).toBeDefined();
  });
});
