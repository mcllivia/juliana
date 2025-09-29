'use client';

import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import ScienceIcon from '@mui/icons-material/Science';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PublicIcon from '@mui/icons-material/Public';
import './sobrevacinas.css';

const sections = [
  {
    title: 'Instituto Butantan',
    icon: <LocalHospitalIcon fontSize="large" />,
    text: 'O Instituto Butantan é referência nacional em pesquisa e produção de vacinas, garantindo fornecimento seguro para o SUS desde 1901.',
  },
  {
    title: 'Formulação das Vacinas',
    icon: <ScienceIcon fontSize="large" />,
    text: 'As vacinas podem conter vírus inativados, vírus atenuados, proteínas específicas ou RNA mensageiro, todos testados rigorosamente.',
  },
  {
    title: 'Tipos de Vacinas',
    icon: <VaccinesIcon fontSize="large" />,
    text: '• Inativadas: vírus mortos (ex.: Hepatite A)\n• Atenuadas: vírus vivos enfraquecidos (ex.: tríplice viral)\n• RNA mensageiro: resposta imune sem vírus vivo (ex.: COVID-19)',
  },
  {
    title: 'Segurança e Eficácia',
    icon: <PublicIcon fontSize="large" />,
    text: 'Todas as vacinas passam por testes rigorosos. Reações graves são raras, e os benefícios superam os riscos, protegendo toda a comunidade.',
  },
];

export default function SobreVacina() {
  return (
    <Container maxWidth="md" className="sobre-vacina-container">
      <Typography variant="h3" className="sobre-vacina-title" gutterBottom>
        Informações sobre a Vacina
      </Typography>
      <Typography variant="h6" className="sobre-vacina-subtitle" gutterBottom>
        Descubra como as vacinas são formuladas, produzidas e distribuídas pelo SUS e pelo Instituto Butantan.
      </Typography>

      {sections.map((section, idx) => (
        <Paper elevation={6} className="sobre-vacina-paper" key={idx}>
          <Box className="sobre-vacina-header">
            <Box className="sobre-vacina-icon">{section.icon}</Box>
            <Typography variant="h5" className="sobre-vacina-section-title">
              {section.title}
            </Typography>
          </Box>
          <Divider sx={{ marginBottom: 2, backgroundColor: '#2e7d32' }} />
          <Typography variant="body1" className="sobre-vacina-item">
            {section.text.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </Typography>
        </Paper>
      ))}
    </Container>
  );
}
