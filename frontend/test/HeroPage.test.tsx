import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HeroPage } from '../src/pages/HeroPage';
import { test, expect, describe } from 'vitest';
import '@testing-library/jest-dom';

describe('HeroPage Page', () => {
    test('renders', () => {
        render(
            <MemoryRouter>
                <HeroPage />
            </MemoryRouter>
        );

        const heroElement = screen.getByTestId('hero-page');
        expect(heroElement).toBeInTheDocument();

        screen.debug();
    });
});
