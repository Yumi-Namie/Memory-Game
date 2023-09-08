import React from 'react';

import { render, screen } from '@testing-library/react';
import { ThemeSelector } from '../src/components/molecules/ThemeSelector';
import { test, expect, describe } from 'vitest';
import '@testing-library/jest-dom';

describe('ThemeSelector Component', () => {
    test('renders', () => {
        render(<ThemeSelector/>);

        const themeElement = screen.getByTestId('theme');
        expect(themeElement).toBeInTheDocument();

        screen.debug();
    });
});