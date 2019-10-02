import React from "react";
import Dashboard from "../../components/Dashboard";
import {render, fireEvent, waitForElement, within} from '@testing-library/react'
import { BrowserRouter as Router, Route } from "react-router-dom";

test('renders my-wishlist-button', async() => {
    const { getByTestId } = render(
    <Router>
        <Dashboard />
    </Router>)
  const whishNode = await waitForElement(() => getByTestId('my-wishlist'))
  console.log(whishNode.textContent);
  
  expect(whishNode.textContent).toBe('My Wish List')
        
})