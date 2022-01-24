import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import App from '../../App'

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

test('Should render name,motto, interests heading, avatar, header image, list of user likes.', async () => {
  render(<App />)
  //   name
  const name = await screen.findByRole('heading', { name: /vonta/i })
  expect(name).toBeInTheDocument()

  // motto
  const motto = await screen.findByLabelText(/motto/i)
  expect(motto).toBeInTheDocument()

  // // interest header
  const profileHeader = await screen.findByText(/interests/i)
  expect(profileHeader).toBeInTheDocument()

  // //   //   avatar
  const avatar = await screen.findByAltText(/avatar/i)
  expect(avatar).toBeInTheDocument()

  // //   //header image
  const header = await screen.findByAltText(/header/i)
  expect(header).toBeInTheDocument()

  // //list of likes
  const interest = await screen.findByRole('list')
  expect(interest).toBeInTheDocument()
})
