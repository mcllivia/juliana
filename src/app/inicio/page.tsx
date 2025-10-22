'use client';

import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './Inicio.css';

export default function Inicio() {
  return (
    <Box className="inicio-background">
      <Container maxWidth="md" className="inicio-container">
        {/* Zé Gotinha Animado */}
        <Box className="ze-gotinha-container">
          <Box className="ze-gotinha-wrapper">
            <img 
              src="ze gotinha.gif"
              alt="Zé Gotinha"
              className="ze-gotinha-image"
            />
            <Box className="ze-gotinha-indicator"></Box>
          </Box>
        </Box>

        <Typography variant="h3" component="h1" gutterBottom className="inicio-title">
          Bem-vindo à Campanha de Vacinação
        </Typography>
        
        <Typography variant="h6" component="p" gutterBottom className="inicio-subtitle">
          Informações sobre vacinas disponíveis pelo SUS, calendário de vacinação e notícias atualizadas para manter você e sua família protegidos.
        </Typography>

        {/* CAIXA PRINCIPAL - IMPORTÂNCIA DA VACINAÇÃO */}
        <Paper elevation={4} className="inicio-info-paper destaque-principal">
          <Box className="paper-header">
            <Box className="icon-wrapper icon-shield">
              <svg className="header-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </Box>
            <Typography variant="h5" className="inicio-info-title-main">
              Por que a vacinação é essencial?
            </Typography>
          </Box>
          
          <Typography variant="body1" className="texto-destaque">
            A vacinação é reconhecida como <strong>uma das mais eficazes estratégias para preservar a saúde da população</strong> e fortalecer uma sociedade saudável e resistente. Além de prevenir doenças graves, a imunização contribui para reduzir a disseminação desses agentes infecciosos na comunidade, <strong>protegendo aqueles que não podem ser vacinados por motivos de saúde</strong>.
          </Typography>

          <Box className="beneficios-grid">
            <Box className="beneficio-item">
              <Box className="checkmark">✓</Box>
              <Typography variant="body1" className="beneficio-texto">
                <strong>Proteção individual:</strong> Previne doenças graves e potencialmente fatais.
              </Typography>
            </Box>

            <Box className="beneficio-item">
              <Box className="checkmark">✓</Box>
              <Typography variant="body1" className="beneficio-texto">
                <strong>Imunidade coletiva:</strong> Protege toda a comunidade, especialmente os mais vulneráveis.
              </Typography>
            </Box>

            <Box className="beneficio-item">
              <Box className="checkmark">✓</Box>
              <Typography variant="body1" className="beneficio-texto">
                <strong>Responsabilidade social:</strong> Contribui para a saúde pública e o bem-estar coletivo.
              </Typography>
            </Box>

            <Box className="beneficio-item">
              <Box className="checkmark">✓</Box>
              <Typography variant="body1" className="beneficio-texto">
                <strong>Redução de custos:</strong> Diminui internações e gastos com tratamentos médicos.
              </Typography>
            </Box>
          </Box>
        </Paper>

        {/* CAIXA SECUNDÁRIA - COMO FUNCIONA PELO SUS */}
        <Paper elevation={3} className="inicio-info-paper sus-info">
          <Box className="paper-header">
            <Box className="icon-wrapper icon-hospital">
              <svg className="header-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </Box>
            <Typography variant="h5" className="inicio-info-title">
              Como funciona pelo SUS
            </Typography>
          </Box>

          <Box className="sus-items">
            <Typography variant="body1" className="inicio-info-item sus-item">
              <span className="emoji-icon">💉</span>
              O SUS oferece <strong>vacinas gratuitamente</strong> para toda a população brasileira.
            </Typography>
            
            <Typography variant="body1" className="inicio-info-item sus-item">
              <span className="emoji-icon">📅</span>
              O calendário de vacinação segue as <strong>recomendações do Ministério da Saúde</strong>.
            </Typography>
            
            <Typography variant="body1" className="inicio-info-item sus-item">
              <span className="emoji-icon">🏥</span>
              As unidades de saúde aplicam as vacinas e <strong>registram no sistema do SUS</strong>.
            </Typography>
            
            <Typography variant="body1" className="inicio-info-item sus-item">
              <span className="emoji-icon">📋</span>
              É importante <strong>manter a caderneta de vacinação atualizada</strong>.
            </Typography>
          </Box>
        </Paper>

        {/* CALL TO ACTION */}
        <Box className="call-to-action">
          <Typography variant="h6" className="cta-text">
            🩺 Procure a unidade de saúde mais próxima e mantenha suas vacinas em dia!
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}