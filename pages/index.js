import styled from 'styled-components';
import db from '../db.json';
import IndexPage from '../src/components/Header';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';

/*const BackgroundImage = styled.div`// tag function
  display: flex;
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`;*/

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (      
      <QuizBackground backgroundImage={db.bg}>
        <IndexPage/>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>The legend of Zelda</h1>
            </Widget.Header>
            <Widget.Content>
              <p>lorem ipsun</p>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Header>
                <h1>Quizes da Galera</h1>
            </Widget.Header>
            <Widget.Content>
              <p>lorem ipsun</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/SauloJCF/aluraquiz-base"/>
      </QuizBackground>
  );
}
