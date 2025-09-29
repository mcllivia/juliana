'use client';

import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './Calendario.css';

const calendarioSUS = {
  Crianças: [
    { vacina: 'BCG', idade: 'Ao nascer', publico: 'Recém-nascidos' },
    { vacina: 'Hepatite B', idade: 'Ao nascer, 1 mês, 6 meses', publico: 'Recém-nascidos e lactentes' },
    { vacina: 'Pentavalente (DTP/Hib/HepB)', idade: '2, 4, 6 meses', publico: 'Bebês' },
    { vacina: 'Rotavírus', idade: '2 e 4 meses', publico: 'Bebês' },
    { vacina: 'Pneumocócica 10-valente', idade: '2, 4, 12 meses', publico: 'Bebês' },
    { vacina: 'Meningocócica C', idade: '3, 5 meses e 12 meses', publico: 'Bebês e crianças' },
    { vacina: 'Tríplice Viral (sarampo, caxumba e rubéola)', idade: '12 meses e 15 meses', publico: 'Crianças' },
    { vacina: 'Varicela', idade: '15 meses', publico: 'Crianças' },
    { vacina: 'DTP', idade: '4–6 anos', publico: 'Crianças' },
    { vacina: 'Poliomielite (VIP/VOP)', idade: '4–6 anos', publico: 'Crianças' },
  ],
  Adolescentes: [
    { vacina: 'HPV', idade: '9–14 anos (meninas) e 11–14 anos (meninos)', publico: 'Adolescentes' },
    { vacina: 'Meningocócica ACWY', idade: '11–12 anos', publico: 'Adolescentes' },
    { vacina: 'dT (difteria e tétano)', idade: '11–12 anos', publico: 'Adolescentes' },
  ],
  Idosos: [
    { vacina: 'Influenza', idade: 'Anualmente a partir de 60 anos', publico: 'Idosos' },
    { vacina: 'Pneumocócica 23-valente', idade: '60 anos ou mais', publico: 'Idosos' },
    { vacina: 'Herpes Zoster', idade: '50 anos ou mais', publico: 'Idosos' },
  ],
};

export default function Calendario() {
  return (
    <Container maxWidth="md" className="calendario-container">
      <Typography variant="h3" className="calendario-title" gutterBottom>
        Calendário Oficial de Vacinação - SUS
      </Typography>
      <Typography variant="h6" className="calendario-subtitle" gutterBottom>
        Consulte as vacinas recomendadas por faixa etária conforme o PNI.
      </Typography>

      {Object.entries(calendarioSUS).map(([faixa, vacinas], idx) => (
        <Paper key={idx} className="calendario-paper" elevation={4}>
          <Typography variant="h5" className="faixa-title" gutterBottom>
            {faixa}
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className="table-header">Vacina</TableCell>
                  <TableCell className="table-header">Idade / Frequência</TableCell>
                  <TableCell className="table-header">Público-alvo</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {vacinas.map((v, i) => (
                  <TableRow key={i} className="table-row">
                    <TableCell className="table-cell">{v.vacina}</TableCell>
                    <TableCell className="table-cell">{v.idade}</TableCell>
                    <TableCell className="table-cell">{v.publico}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      ))}
    </Container>
  );
}
