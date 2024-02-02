import GlobalStyles from "./components/GlobalStyles/GlobalStyles";
import "./components/FrequentlyAskedQuestion/FrequentlyAskedQuestion";
import FrequentlyAskedQuestion from "./components/FrequentlyAskedQuestion/FrequentlyAskedQuestion";
import LoginForm from "./components/LoginForm/LoginForm";
import ContactCard from "./components/ContactCard/ContactCard";

function App() {
  return (
    <>
      <GlobalStyles />
      <FrequentlyAskedQuestion
        question="What does “CSS” stand for?"
        answer="Cool Styling Strategy"
      />
      <LoginForm />
      <ContactCard
        avatarSrc="https://courses.joshwcomeau.com/cfj-mats/cat-300px.jpg"
        name="Mittens"
        email="meow@gmail.com"
      />
    </>
  );
}

export default App;
