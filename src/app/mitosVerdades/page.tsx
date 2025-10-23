'use client';

import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import InfoIcon from '@mui/icons-material/Info';
import './mitos.css';

const mitosVerdades = [
  {
    mito: 'Vacinas causam autismo',
    verdade:
      'Não há qualquer evidência científica de que vacinas causam autismo. Estudos rigorosos envolvendo milhões de crianças comprovam que vacinas são completamente seguras.',
    detalhes:
      'O estudo que originou esse mito foi desacreditado e retirado da literatura científica. O autor perdeu sua licença médica por fraude.',
  },
  {
    mito: 'Vacinas podem causar a doença que previnem',
    verdade:
      'As vacinas contêm vírus ou bactérias inativados ou partes deles, que não causam a doença, apenas estimulam a imunidade.',
    detalhes:
      'Alguns sintomas leves podem aparecer como resposta imunológica, mas isso não é a doença em si, e sim o corpo construindo proteção.',
  },
  {
    mito: 'Vacinas têm muitos efeitos colaterais perigosos',
    verdade:
      'A maioria das vacinas causa efeitos leves e temporários, como dor no local ou febre baixa. Reações graves são extremamente raras.',
    detalhes:
      'Os benefícios das vacinas superam largamente os riscos. Complicações sérias ocorrem em menos de 1 em 1 milhão de doses.',
  },
  {
    mito: 'Se todo mundo está vacinado, não preciso vacinar',
    verdade:
      'A vacinação individual protege você e ajuda a criar imunidade coletiva, protegendo aqueles que não podem se vacinar.',
    detalhes:
      'Pessoas com imunidade comprometida, bebês e gestantes dependem da vacinação em massa para ficarem protegidas.',
  },
  {
    mito: 'Vacinas naturais são melhores que vacinas sintéticas',
    verdade:
      'Vacinas são baseadas em ciência rigorosa e garantem imunidade sem risco da doença. Remédios "naturais" não substituem vacinas.',
    detalhes:
      'Contrair a doença naturalmente pode causar complicações graves e morte. A vacina oferece proteção sem esses riscos.',
  },
  {
    mito: 'Vacinas contêm substâncias tóxicas perigosas',
    verdade:
      'Os componentes das vacinas estão em quantidades seguras e são essenciais para sua eficácia e conservação.',
    detalhes:
      'Substâncias como mercúrio (timerosal) foram amplamente estudadas e são seguras nas doses utilizadas, menores que as encontradas naturalmente em alimentos.',
  },
];

export default function MitosVerdades() {
  return (
    <Box className="mitos-background">
      <Container maxWidth="md" className="mitos-container">
        <Box className="mitos-header">
          <InfoIcon className="mitos-header-icon" />
          <Typography variant="h3" component="h1" className="mitos-title">
            Mitos e Verdades sobre Vacinas
          </Typography>
         
        </Box>


        <Stack spacing={3}>
          {mitosVerdades.map((item, idx) => (
            <Paper key={idx} className="mitos-card" elevation={3}>
              <Box className="mitos-card-header">
                <Box className="mito-section">
                  <CancelIcon className="mito-icon" />
                  <Box className="mito-content">
                    <Chip label="MITO" size="small" className="mito-chip" />
                    <Typography variant="h6" className="mito-text">
                      {item.mito}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box className="verdade-section">
                <CheckCircleIcon className="verdade-icon" />
                <Box className="verdade-content">
                  <Chip label="VERDADE" size="small" className="verdade-chip" />
                  <Typography variant="body1" className="verdade-text">
                    {item.verdade}
                  </Typography>
                </Box>
              </Box>

              <Box className="detalhes-section-fixa">
                <Typography variant="body2" className="detalhes-texto">
                  💡 {item.detalhes}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Stack>

        
      </Container>
    </Box>
  );
}