import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchBar from './'
import { searchBarPlaceholder } from '../../GlobalConstants'
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom'

const testString = 'TestString'

const renderComponent = (searchText: string) => render(
  <MemoryRouter initialEntries={[`/search/${searchText}`]}>
    <Routes>
      <Route path={'/search/:searchQuery'} element={<SearchBar />} />
    </Routes>
  </MemoryRouter>,
)

describe('SearchBar', () => {
  test('should match snapshot', () => {
    expect(render(<SearchBar/>, { wrapper: BrowserRouter })).toMatchSnapshot()
  })

  test('input should be rendered', () => {
    const { getByPlaceholderText } = render(<SearchBar/>, { wrapper: BrowserRouter })
    expect(getByPlaceholderText(searchBarPlaceholder)).toBeInTheDocument()
  })

  test('should handle input change', () => {
    const { getByPlaceholderText, getByDisplayValue } = render(<SearchBar/>, { wrapper: BrowserRouter })
    const input = getByPlaceholderText(searchBarPlaceholder)
    fireEvent.change(input, { target: { value: testString } })
    expect(getByDisplayValue(testString)).toBeInTheDocument()
  })

  test('should redirect to the proper url', () => {
    const { getByPlaceholderText, getByText } = render(<SearchBar/>, { wrapper: BrowserRouter })
    const input = getByPlaceholderText(searchBarPlaceholder)
    const button = getByText('SEARCH')
    fireEvent.change(input, { target: { value: testString } })
    fireEvent.click(button)
    expect(window.location.pathname).toBe(`/search/${testString}`)
  })

  test('should react to url change', () => {
    const { getByPlaceholderText, getByDisplayValue } = renderComponent(testString)
    const input = getByPlaceholderText(searchBarPlaceholder)
    expect(input).toBeEmptyDOMElement()
    window.location.pathname = `search/${testString}`
    console.log(window.location.toString())
    expect(getByDisplayValue(testString)).toBeInTheDocument()
  })
})
