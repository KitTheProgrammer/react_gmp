import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchBar from './'
import { searchBarPlaceholder } from '../../GlobalConstants'
import { BrowserRouter } from 'react-router-dom'

const testString = 'TestString'

describe('SearchBar', () => {
  test('should match snapshot', () => {
    expect(render(React.createElement(SearchBar), { wrapper: BrowserRouter })).toMatchSnapshot()
  })

  test('input should be rendered', () => {
    const { getByPlaceholderText } = render(React.createElement(SearchBar), { wrapper: BrowserRouter })
    expect(getByPlaceholderText(searchBarPlaceholder)).toBeInTheDocument()
  })

  test('should handle input change', () => {
    const { getByPlaceholderText, getByDisplayValue } = render(React.createElement(SearchBar), { wrapper: BrowserRouter })
    const input = getByPlaceholderText(searchBarPlaceholder)
    fireEvent.change(input, { target: { value: testString } })
    expect(getByDisplayValue(testString)).toBeInTheDocument()
  })

  test('should redirect to the proper url', () => {
    const { getByPlaceholderText, getByText } = render(React.createElement(SearchBar), { wrapper: BrowserRouter })
    const input = getByPlaceholderText(searchBarPlaceholder)
    const button = getByText('SEARCH')
    fireEvent.change(input, { target: { value: testString } })
    fireEvent.click(button)
    expect(window.location.pathname).toBe(`/search/${testString}`)
  })
})
