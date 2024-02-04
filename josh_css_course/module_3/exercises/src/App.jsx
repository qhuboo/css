import GlobalStyles from "./components/GlobalStyles/GlobalStyles";
import "./components/FrequentlyAskedQuestion/FrequentlyAskedQuestion";
import FrequentlyAskedQuestion from "./components/FrequentlyAskedQuestion/FrequentlyAskedQuestion";
import LoginForm from "./components/LoginForm/LoginForm";
import ContactCard from "./components/ContactCard/ContactCard";
import BreadCrumb from "./components/Breadcrumbs/Breadcrumbs";
import ButtonTable from "./components/Button/ButtonTable";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 50px;
  border: solid;

  & > * {
    margin-bottom: 100px;
  }
`;

function App() {
  return (
    <Wrapper>
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

      <BreadCrumb />
      <ButtonTable />
    </Wrapper>
  );
}

export default App;
