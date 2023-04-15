import * as React from "react";
import {render, screen} from '@testing-library/react';
import App from './App';

jest.mock('mf-todoAdd/TodoAdd', () => {
  return () => <div className="test" data-testid="todoadd"/>
}, {
  virtual: true
})

jest.mock('mf-todoList/TodoList', () => {
  return () => <div className="test" data-testid="todolist"/>
}, {
  virtual: true
})


describe('App', () => {
  it('should render home page with distributed apps', async () => {
    render(<App />);
  
    expect(await screen.findByTestId('todoadd')).toBeInTheDocument();
    expect(screen.getByTestId('todolist')).toBeInTheDocument();
    screen.debug();
  });

  
});