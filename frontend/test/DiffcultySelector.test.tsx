import React from 'react';

import { render, screen } from '@testing-library/react';
import DifficultySelector from '../src/components/molecules/DifficultySelector';
import { test, expect, describe } from 'vitest';
import '@testing-library/jest-dom';

describe('DifficultySelector Component', () => {
    test('renders', () => {
        render(<DifficultySelector/>);

        const levelElement = screen.getByTestId('level');
        expect(levelElement).toBeInTheDocument();

        screen.debug();
    });
});