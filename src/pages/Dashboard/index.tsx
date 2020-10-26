import React, { useEffect, useState } from 'react';

import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Characters } from './styles';

import api from '../../services/api';

import auth from '../../services/auth';

interface Character {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const Dashboard: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    api
      .get('/characters', {
        params: {
          ts: auth.ts,
          apikey: auth.apikey,
          hash: auth.hash,
        },
      })
      .then((response) => {
        setCharacters(response.data.data.results);
      });
  }, []);

  return (
    <>
      <Title>Encontre seu personagem favorito da Marvel</Title>
      <Form>
        <input
          type="text"
          placeholder="Digite o nome do seu personagem favorito aqui"
        />
        <button type="submit">Buscar</button>
      </Form>
      <Characters>
        {characters.map((character) => {
          return (
            <a key={character.id} href="/">
              <img
                src={`${character.thumbnail.path.replace(
                  'http',
                  'https',
                )}/standard_amazing.${character.thumbnail.extension}`}
                alt={character.name}
              />
              <div>
                <strong>{character.name}</strong>
              </div>
              <FiChevronRight size={30} />
            </a>
          );
        })}
      </Characters>
    </>
  );
};

export default Dashboard;
