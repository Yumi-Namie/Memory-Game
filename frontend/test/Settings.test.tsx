import React from 'react';
import { render, screen } from '@testing-library/react';
import Settings from '../src/components/organisms/Settings';
import { test, expect, describe } from 'vitest';
import '@testing-library/jest-dom';

describe('Settings Page', () => {
    test('renders', () => {
        // Define mock props
        const mockProps = {
            onClose: () => {}, 
            onApply: () => {}, 
            selectedThemes: [], 
        };

        // Render the Settings component 
        render(<Settings {...mockProps} />);

        const settingsElement = screen.getByTestId('settings');
        
     
        expect(settingsElement).toBeTruthy(); 

        screen.debug();
    });
});
