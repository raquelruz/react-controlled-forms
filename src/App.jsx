import './App.css'
import { AgeCheckForm } from './components/AgeCheckForm/AgeCheckForm'
import { CharacterCountForm } from './components/CharacterCountForm/CharacterCountForm'
import { ContactForm } from './components/ContactForm/ContactForm'
import { NameGreetingForm } from './components/NameGreetingForm/NameGreetingForm'
import { LoginForm } from './components/LoginForm/LoginForm'
import { FavoriteColorForm } from './components/FavoriteColorForm/FavoriteColorForm'
import { FeedbackForm } from './components/FeedbackForm/FeedbackForm'
import { RatingForm } from './components/RatingForm/RatingForm'

function App() {
  return (
    <>
      <ContactForm />

      <NameGreetingForm />

      <CharacterCountForm />

      <AgeCheckForm />

      <LoginForm /> 

      <FavoriteColorForm />

      <FeedbackForm />

      <RatingForm />
    </>
  )
}

export default App
