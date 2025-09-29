'use client';

import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import './Footer.css';

export default function Footer() {
  return (
    <Box component="footer" className="footer">
      <Container maxWidth="lg" className="footer-container">
        <Typography variant="body1" className="footer-text">
          © 2025 Campanha de Vacinação - Todos os direitos reservados
        </Typography>
        <Typography variant="body2" className="footer-text">
         
        </Typography>
      </Container>
    </Box>
  );
}
