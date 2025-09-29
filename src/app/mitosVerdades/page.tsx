'use client';

import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import './mitos.css';

const mitosVerdades = [
  {
    mito: 'Vacinas causam autismo',
    verdade:
      'Não há qualquer evidência científica de que vacinas causam autismo. Estudos rigorosos comprovam que vacinas são seguras.',
  },
  {
    mito: 'Vacinas podem causar a doença que previnem',
    verdade:
      'As vacinas contêm vírus ou bactérias inativados ou partes deles, que não causam a doença, apenas estimulam a imunidade.',
  },
  {
    mito: 'Vacinas têm muitos efeitos colaterais perigosos',
    verdade:
      'A maioria das vacinas causa efeitos leves e temporários. Reações graves são extremamente raras.',
  },
  {
    mito: 'Se todo mundo está vacinado, não preciso vacinar',
    verdade:
      'A vacinação individual protege você e ajuda a criar imunidade coletiva, protegendo aqueles que não podem se vacinar.',
  },
  {
    mito: 'Vacinas naturais são melhores que vacinas sintéticas',
    verdade:
      'Vacinas são baseadas em ciência e garantem imunidade sem risco da doença. Remédios “naturais” não substituem vacinas.',
  },
];

export default function MitosVerdades() {
  return (
    <Container maxWidth="md" className="mitos-container">
      <Typography variant="h3" className="mitos-title" gutterBottom>
        Mitos e Verdades sobre Vacinas
      </Typography>
      <Typography variant="h6" className="mitos-subtitle" gutterBottom>
        Esclareça dúvidas comuns e saiba o que é verdade sobre a vacinação.
      </Typography>

      <Stack spacing={3}>
        {mitosVerdades.map((item, idx) => (
          <Paper key={idx} className="mitos-card" elevation={4}>
            <Typography variant="subtitle1" className="mito-text">
              ❌ {item.mito}
            </Typography>
            <Typography variant="body1" className="verdade-text">
              ✅ {item.verdade}
            </Typography>
          </Paper>
        ))}
      </Stack>
    </Container>
  );
}
