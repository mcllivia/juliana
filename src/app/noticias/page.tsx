'use client';

import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const noticias = [
  {
    titulo: 'Nova vacina contra gripe disponível em todo o SUS',
    resumo:
      'O Ministério da Saúde anuncia que a nova vacina contra gripe está disponível gratuitamente em todas as unidades do SUS.',
    data: '10/09/2025',
    link: '#',
  },
  {
    titulo: 'Campanha de vacinação infantil começa em outubro',
    resumo:
      'Crianças de 6 meses a 5 anos poderão se vacinar contra doenças como sarampo, poliomielite e gripe. Confira o calendário completo.',
    data: '05/09/2025',
    link: '#',
  },
  {
    titulo: 'Importância da vacinação contra HPV',
    resumo:
      'Especialistas reforçam que a vacina contra HPV é fundamental para prevenir cânceres e deve ser aplicada em meninas e meninos a partir dos 9 anos.',
    data: '01/09/2025',
    link: '#',
  },
];

export default function Noticias() {
  return (
    <Container maxWidth="md" className="noticias-container">
      <Typography variant="h3" className="noticias-title" gutterBottom>
        Notícias e Atualizações sobre Vacinação
      </Typography>
      <Typography variant="h6" className="noticias-subtitle" gutterBottom>
        Fique por dentro das últimas informações sobre campanhas e vacinas.
      </Typography>

      <Stack spacing={3}>
        {noticias.map((item, idx) => (
          <Paper key={idx} className="noticia-card" elevation={4}>
            <Typography variant="h6" className="noticia-titulo">
              {item.titulo}
            </Typography>
            <Typography variant="body2" className="noticia-data">
              {item.data}
            </Typography>
            <Typography variant="body1" className="noticia-resumo" paragraph>
              {item.resumo}
            </Typography>
            <Button
  variant="contained"
  color="success"
  href="https://www.gov.br/saude/pt-br/campanhas/vacinacao"
  target="_blank" // abre em nova aba
  rel="noopener noreferrer" // segurança
  size="small"
>
  Saiba mais
</Button>

          </Paper>
        ))}
      </Stack>
    </Container>
  );
}
