'use client';

import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './Inicio.css';

export default function Inicio() {
  return (
    <Box className="inicio-background">
      <Container maxWidth="md" className="inicio-container">
        <Typography variant="h3" component="h1" gutterBottom className="inicio-title">
          Bem-vindo à Campanha de Vacinação
        </Typography>

        <Typography variant="h6" component="p" gutterBottom className="inicio-subtitle">
          Informações sobre vacinas disponíveis pelo SUS, calendário de vacinação e notícias atualizadas para manter você e sua família protegidos.
        </Typography>

        <Box className="inicio-button-box">
     
        </Box>

        <Paper elevation={3} className="inicio-info-paper">
          <Typography variant="h5" className="inicio-info-title">Como funciona pelo SUS:</Typography>
          <Typography variant="body1" className="inicio-info-item">• O SUS oferece vacinas gratuitamente para toda a população.</Typography>
          <Typography variant="body1" className="inicio-info-item">• O calendário de vacinação segue as recomendações do Ministério da Saúde.</Typography>
          <Typography variant="body1" className="inicio-info-item">• As unidades de saúde aplicam as vacinas e registram no sistema do SUS.</Typography>
          <Typography variant="body1" className="inicio-info-item">• É importante manter a caderneta de vacinação atualizada.</Typography>
        </Paper>
      </Container>
    </Box>
  );
}
