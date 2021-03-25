import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import Input from '../src/components/Input';
import QuizLogo from '../src/components/QuizLogo';

/* const BackgroundImage = styled.div`// tag function
  display: flex;
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`; */

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
  const router = useRouter();
  const [name, setName] = React.useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>The legend of Zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(infosDoEvento) => {
              router.push(`/quiz?name=${name}`);
              infosDoEvento.preventDefault();
              // console.log('Fazendo uma submissão por meio do react.');
              // router manda para a próxima página
            }}
            >
              <Input
                onChange={(infosDoEvento) => {
                  setName(infosDoEvento.target.value);
                  // console.log(name);
                }}
                placeholder="Diz aí seu nome"
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar
                {name}
              </button>
            </form>
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
      <GitHubCorner projectUrl="https://github.com/SauloJCF/aluraquiz-base" />
    </QuizBackground>
  );
}
