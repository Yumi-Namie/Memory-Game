import React from 'react';
import { render, screen } from '@testing-library/react';
import GameBoard from '../src/components/templates/GameBoard';
import { test, expect, describe } from 'vitest';
import '@testing-library/jest-dom';

describe('Game template', () => {
    test('renders', () => {
        render(<GameBoard />);

        const boardGameElement = screen.getByTestId('game-board');
        expect(boardGameElement).toBeInTheDocument();

        screen.debug();
    });
});
