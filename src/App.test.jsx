import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import App from './App'

test('Should render the header', async () => {
  render(<App />)

  //   const profile = screen.getByRole('paragraph', {
  //     name: /meet/i,
  //   })

  const profile = screen.getByText(/meet/i)
  expect(profile).toBeInTheDocument()

  const logo = await screen.findByAltText(/alchemy logo/i)
  expect(logo).toBeInTheDocument()

  const name = await screen.findByText(/vonta/i)
  expect(name).toBeInTheDocument()

  //   await waitForElementToBeRemoved(() => screen.getByTestId(/loading/i))
})
