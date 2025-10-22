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
import FactoryIcon from '@mui/icons-material/Factory';
import VerifiedIcon from '@mui/icons-material/Verified';
import './sobrevacinas.css';


const sections = [
  {
    title: 'Instituto Butantan',
    icon: <LocalHospitalIcon fontSize="large" />,
    text: 'Fundado em 1901, o Instituto Butantan é um dos maiores centros de pesquisa biomédica do mundo e referência nacional em pesquisa e produção de vacinas e soros. Localizado em São Paulo, o instituto é responsável por fornecer cerca de 80% das vacinas e 100% dos soros utilizados pelo Programa Nacional de Imunizações (PNI) do SUS.',
    highlights: [
      'Mais de 120 anos de história na saúde pública brasileira',
      'Produção anual de mais de 100 milhões de doses de vacinas',
      'Centro de pesquisa reconhecido internacionalmente',
      'Desenvolvimento de vacinas contra COVID-19, gripe, dengue e outras doenças'
    ]
  },
  {
    title: 'Pesquisa e Inovação no Butantan',
    icon: <ScienceIcon fontSize="large" />,
    text: 'O Instituto Butantan investe constantemente em pesquisa e desenvolvimento de novas vacinas e tratamentos. Possui laboratórios de ponta e parcerias internacionais para desenvolver soluções inovadoras em saúde pública.',
    highlights: [
      'Desenvolvimento da ButanVac: vacina brasileira contra COVID-19',
      'Pesquisa de vacina contra dengue em estágio avançado',
      'Produção de soros antiofídicos e antivenenos',
      'Estudos em biotecnologia e imunologia aplicada'
    ]
  },
  {
    title: 'Produção e Qualidade',
    icon: <FactoryIcon fontSize="large" />,
    text: 'O processo de produção de vacinas no Butantan segue rigorosos padrões internacionais de qualidade. Desde a pesquisa inicial até a distribuição final, cada etapa é cuidadosamente monitorada e controlada.',
    highlights: [
      'Certificação internacional de Boas Práticas de Fabricação (BPF)',
      'Controle de qualidade em todas as etapas da produção',
      'Rastreabilidade completa de todos os lotes produzidos',
      'Infraestrutura moderna e tecnologia de ponta'
    ]
  },
  {
    title: 'Tipos de Vacinas',
    icon: <VaccinesIcon fontSize="large" />,
    text: 'As vacinas podem ser classificadas de acordo com sua composição e método de ação. Cada tipo oferece proteção específica contra diferentes doenças.',
    highlights: [
      'Inativadas: contêm vírus mortos (ex.: Hepatite A, gripe)',
      'Atenuadas: vírus vivos enfraquecidos (ex.: tríplice viral, febre amarela)',
      'Subunidades proteicas: fragmentos do vírus (ex.: Hepatite B)',
      'RNA mensageiro: resposta imune sem vírus vivo (ex.: COVID-19)'
    ]
  },
  {
    title: 'Segurança e Eficácia',
    icon: <VerifiedIcon fontSize="large" />,
    text: 'Todas as vacinas produzidas pelo Butantan e distribuídas pelo SUS passam por rigorosos testes de segurança e eficácia antes de serem aprovadas para uso público.',
    highlights: [
      'Testes em três fases clínicas antes da aprovação',
      'Monitoramento contínuo após liberação para uso',
      'Reações graves são extremamente raras',
      'Benefícios da vacinação superam amplamente os riscos'
    ]
  },
  {
    title: 'Impacto na Saúde Pública',
    icon: <PublicIcon fontSize="large" />,
    text: 'As vacinas produzidas pelo Instituto Butantan têm papel fundamental na proteção da população brasileira, contribuindo para a erradicação e controle de diversas doenças.',
    highlights: [
      'Erradicação da poliomielite no Brasil',
      'Controle de doenças como sarampo, rubéola e tétano',
      'Redução drástica de mortalidade infantil',
      'Proteção coletiva através da imunidade de rebanho'
    ]
  }
];

export default function SobreVacina() {
  return (
    <Box className="sobre-vacina-background">
      <Container maxWidth="lg" className="sobre-vacina-container">
        {/* Ícone de Vacina Animado */}
       

        <Typography variant="h3" className="sobre-vacina-title" gutterBottom>
          Informações sobre Vacinas
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
            
            <Typography variant="body1" className="sobre-vacina-text">
              {section.text}
            </Typography>

            {section.highlights && (
              <Box className="sobre-vacina-highlights">
                {section.highlights.map((highlight, i) => (
                  <Box key={i} className="highlight-item">
                    <Box className="highlight-bullet">✓</Box>
                    <Typography variant="body2" className="highlight-text">
                      {highlight}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}
          </Paper>
        ))}

        
      </Container>
    </Box>
  );
}