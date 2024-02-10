import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './button'; 

describe('Button Component', () => {
  test('deve exibir "Mostrar menos" quando showFullList é verdadeiro', () => {
    const { getByText } = render(<Button showFullList={true} toggleList={() => {}} />);
    const buttonElement = getByText('Mostrar menos');
    expect(buttonElement).toBeInTheDocument();
  });

  test('deve exibir "Mostrar mais" quando showFullList é falso', () => {
    const { getByText } = render(<Button showFullList={false} toggleList={() => {}} />);
    const buttonElement = getByText('Mostrar mais');
    expect(buttonElement).toBeInTheDocument();
  });

  test('deve chamar a função toggleList ao clicar no botão', () => {
    const toggleListMock = jest.fn();
    const { getByText } = render(<Button showFullList={false} toggleList={toggleListMock} />);
    const buttonElement = getByText('Mostrar mais');
    
    fireEvent.click(buttonElement);
    expect(toggleListMock).toHaveBeenCalledTimes(1);
  });
});
