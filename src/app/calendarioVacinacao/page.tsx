'use client';

import React, { useState } from 'react';
import styles from './calendario.module.css';

const CalendarioVacinacao = () => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('todas');

  const calendarioSUS = {
    'Criança (0 a 9 anos)': [
      { vacina: 'BCG', doses: '1 dose', idade: 'Ao nascer', doencas: 'Formas graves de tuberculose e hanseníase' },
      { vacina: 'Hepatite B', doses: '1 dose', idade: 'Ao nascer', doencas: 'Hepatite B e hepatite D' },
      { vacina: 'Penta (DTP+Hib+HB)', doses: '3 doses', idade: '2, 4 e 6 meses', doencas: 'Difteria, tétano, coqueluche, H. influenzae tipo b, hepatite B' },
      { vacina: 'Poliomielite VIP', doses: '3 doses + reforço', idade: '2, 4, 6 e 15 meses', doencas: 'Poliomielite ou paralisia infantil' },
      { vacina: 'Pneumocócica 10-valente', doses: '2 doses + reforço', idade: '2, 4 e 12 meses', doencas: 'Doenças pneumocócicas invasivas' },
      { vacina: 'Rotavírus', doses: '2 doses', idade: '2 e 4 meses', doencas: 'Gastrenterite viral (diarreia, vômito)' },
      { vacina: 'Meningocócica C', doses: '2 doses', idade: '3 e 5 meses', doencas: 'Meningite, encefalite pelo meningococo tipo C' },
      { vacina: 'Meningocócica ACWY', doses: '1 dose', idade: '12 meses', doencas: 'Doenças meningocócicas tipos A, C, W, Y' },
      { vacina: 'Influenza', doses: 'Anual', idade: 'A partir de 6 meses', doencas: 'Influenza (gripe)' },
      { vacina: 'COVID-19', doses: '2 ou 3 doses', idade: 'A partir de 6 meses', doencas: 'Formas graves da COVID-19' },
      { vacina: 'Febre Amarela', doses: '1 dose + reforço', idade: '9 meses e 4 anos', doencas: 'Febre amarela' },
      { vacina: 'Tríplice Viral (SCR)', doses: '1 dose', idade: '12 meses', doencas: 'Sarampo, caxumba, rubéola' },
      { vacina: 'DTP', doses: '2 reforços', idade: '15 meses e 4 anos', doencas: 'Difteria, tétano, coqueluche' },
      { vacina: 'Tetraviral (SCRV)', doses: '1 dose', idade: '15 meses', doencas: 'Sarampo, caxumba, rubéola, varicela' },
      { vacina: 'Hepatite A', doses: '1 dose', idade: '15 meses', doencas: 'Hepatite A' },
      { vacina: 'Varicela', doses: '1 dose', idade: '4 anos', doencas: 'Varicela ou catapora' },
      { vacina: 'HPV4', doses: '1 dose', idade: '9 a 14 anos', doencas: 'Infecções pelo papilomavírus humano, cânceres' },
      { vacina: 'dT', doses: '3 doses', idade: 'A partir de 7 anos', doencas: 'Difteria, tétano' },
    ],
    'Adolescente e Jovem (10 a 24 anos)': [
      { vacina: 'HPV4', doses: '1 dose', idade: '9 a 14 anos', doencas: 'Infecções pelo papilomavírus, cânceres' },
      { vacina: 'Meningocócica ACWY', doses: '1 dose', idade: '11 a 14 anos', doencas: 'Meningite tipos A, C, W, Y' },
      { vacina: 'Hepatite B', doses: '3 doses', idade: '10 a 24 anos', doencas: 'Hepatite B e hepatite D' },
      { vacina: 'dT', doses: '3 doses + reforço 10/10 anos', idade: '10 a 24 anos', doencas: 'Difteria, tétano' },
      { vacina: 'Febre Amarela', doses: '1 dose', idade: '10 a 24 anos', doencas: 'Febre amarela' },
      { vacina: 'Tríplice Viral (SCR)', doses: '2 doses', idade: '10 a 24 anos', doencas: 'Sarampo, caxumba, rubéola' },
      { vacina: 'Pneumocócica 23-valente', doses: '2 doses (indígenas)', idade: '10 a 24 anos', doencas: 'Doenças pneumocócicas invasivas' },
      { vacina: 'Varicela', doses: '2 doses (indígenas e trabalhadores)', idade: '10 a 24 anos', doencas: 'Varicela ou catapora' },
    ],
    'Adulto (25 a 59 anos)': [
      { vacina: 'Hepatite B', doses: '3 doses', idade: '25 a 59 anos', doencas: 'Hepatite B e hepatite D' },
      { vacina: 'dT', doses: '3 doses + reforço 10/10 anos', idade: '25 a 59 anos', doencas: 'Difteria, tétano' },
      { vacina: 'Febre Amarela', doses: '1 dose', idade: '25 a 59 anos', doencas: 'Febre amarela' },
      { vacina: 'Tríplice Viral (SCR)', doses: 'Até 29 anos: 2 doses | 30-59 anos: 1 dose', idade: '25 a 59 anos', doencas: 'Sarampo, caxumba, rubéola' },
      { vacina: 'Pneumocócica 23-valente', doses: '2 doses (indígenas)', idade: '25 a 59 anos', doencas: 'Doenças pneumocócicas invasivas' },
      { vacina: 'Varicela', doses: '2 doses (indígenas e trabalhadores)', idade: '25 a 59 anos', doencas: 'Varicela ou catapora' },
    ],
    'Idoso (60+ anos)': [
      { vacina: 'Hepatite B', doses: '3 doses', idade: 'A partir de 60 anos', doencas: 'Hepatite B e hepatite D' },
      { vacina: 'dT', doses: '3 doses + reforço 10/10 anos', idade: 'A partir de 60 anos', doencas: 'Difteria, tétano' },
      { vacina: 'Febre Amarela', doses: '1 dose (casos excepcionais)', idade: 'A partir de 60 anos', doencas: 'Febre amarela' },
      { vacina: 'Tríplice Viral (SCR)', doses: '2 doses (trabalhadores de saúde)', idade: 'A partir de 60 anos', doencas: 'Sarampo, caxumba, rubéola' },
      { vacina: 'Pneumocócica 23-valente', doses: '2 doses (acamados/institucionalizados)', idade: 'A partir de 60 anos', doencas: 'Doenças pneumocócicas invasivas' },
      { vacina: 'Varicela', doses: '2 doses (indígenas e trabalhadores)', idade: 'A partir de 60 anos', doencas: 'Varicela ou catapora' },
      { vacina: 'Influenza', doses: '1 dose anual', idade: 'A partir de 60 anos', doencas: 'Influenza (gripe)' },
      { vacina: 'COVID-19', doses: '1 dose semestral', idade: 'A partir de 60 anos', doencas: 'Formas graves da COVID-19' },
    ],
    'Gestante': [
      { vacina: 'Hepatite B', doses: '3 doses', idade: 'Durante a gestação', doencas: 'Hepatite B e hepatite D' },
      { vacina: 'dT', doses: '3 doses', idade: 'Durante a gestação', doencas: 'Difteria, tétano' },
      { vacina: 'dTpa', doses: '1 dose a partir da 20ª semana', idade: 'Cada gestação', doencas: 'Difteria, tétano, coqueluche' },
      { vacina: 'Influenza', doses: '1 dose por temporada', idade: 'Durante a gestação', doencas: 'Influenza (gripe)' },
      { vacina: 'COVID-19', doses: '1 dose por gestação', idade: 'Durante a gestação', doencas: 'Formas graves da COVID-19' },
      { vacina: 'Febre Amarela', doses: '1 dose (casos excepcionais)', idade: 'Durante a gestação', doencas: 'Febre amarela' },
    ],
  };

  const categorias = ['todas', ...Object.keys(calendarioSUS)];

  const vacinasFiltradas = categoriaSelecionada === 'todas' 
    ? Object.entries(calendarioSUS)
    : [[categoriaSelecionada, calendarioSUS[categoriaSelecionada]]];

  return (
    <div className={styles.calendarioWrapper}>
      <div className={styles.calendarioMainContainer}>
        {/* Header */}
        <div className={styles.calendarioHeader}>
          <div className={styles.calendarioIconContainer}>
            <svg className={styles.calendarioIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h1 className={styles.calendarioMainTitle}>
            Calendário Nacional de Vacinação
          </h1>
          <p className={styles.calendarioSubtitleSus}>
            Sistema Único de Saúde - SUS
          </p>
          <p className={styles.calendarioDescription}>
            Consulte as vacinas recomendadas por faixa etária conforme o Programa Nacional de Imunizações (PNI) do Ministério da Saúde
          </p>
        </div>

        {/* Filtros */}
        <div className={styles.calendarioFiltros}>
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaSelecionada(cat)}
              className={`${styles.calendarioBtnFiltro} ${categoriaSelecionada === cat ? styles.active : ''}`}
            >
              {cat === 'todas' ? '📋 Todas as Faixas' : cat}
            </button>
          ))}
        </div>

        {/* Tabelas de Vacinas */}
        <div className={styles.calendarioTabelasContainer}>
          {vacinasFiltradas.map(([categoria, vacinas], catIdx) => (
            <div key={`categoria-${catIdx}`} className={styles.calendarioCard}>
              <div className={styles.calendarioCardHeader}>
                <h2 className={styles.calendarioCategoriaTitle}>
                  <span className={styles.calendarioEmoji}>
                    {categoria.includes('Criança') ? '👶' : 
                     categoria.includes('Adolescente') ? '🧒' :
                     categoria.includes('Adulto') ? '🧑' :
                     categoria.includes('Idoso') ? '👴' : '🤰'}
                  </span>
                  {categoria}
                </h2>
              </div>

              <div className={styles.calendarioTableWrapper}>
                <table className={styles.calendarioTable}>
                  <thead>
                    <tr className={styles.calendarioTableHeadRow}>
                      <th className={styles.calendarioTh}>Vacina</th>
                      <th className={styles.calendarioTh}>Doses</th>
                      <th className={styles.calendarioTh}>Idade / Frequência</th>
                      <th className={styles.calendarioTh}>Doenças Evitadas</th>
                    </tr>
                  </thead>
                  <tbody className={styles.calendarioTbody}>
                    {vacinas.map((vacina, idx) => (
                      <tr key={`${categoria}-${idx}`} className={styles.calendarioTr}>
                        <td className={styles.calendarioTd}>
                          <div className={styles.calendarioVacinaCell}>
                            <span className={styles.calendarioVacinaIcon}>💉</span>
                            <span className={styles.calendarioVacinaNome}>{vacina.vacina}</span>
                          </div>
                        </td>
                        <td className={styles.calendarioTd}>
                          <span className={styles.calendarioBadgeDoses}>{vacina.doses}</span>
                        </td>
                        <td className={`${styles.calendarioTd} ${styles.calendarioTdIdade}`}>{vacina.idade}</td>
                        <td className={`${styles.calendarioTd} ${styles.calendarioTdDoencas}`}>{vacina.doencas}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Informativo */}
        <div className={styles.calendarioFooterInfo}>
          <div className={styles.calendarioFooterContent}>
            <h3 className={styles.calendarioFooterTitle}>💚 Vacinas salvam vidas!</h3>
            <p className={styles.calendarioFooterText}>
              Mantenha sua carteira de vacinação sempre atualizada. Todas as vacinas do Calendário Nacional estão disponíveis gratuitamente no SUS.
            </p>
            <div className={styles.calendarioFooterLinks}>
              <div className={styles.calendarioFooterLinkItem}>
                <span className={styles.calendarioFooterEmoji}>🏥</span>
                <span>Procure a UBS mais próxima</span>
              </div>
              <div className={styles.calendarioFooterLinkItem}>
                <span className={styles.calendarioFooterEmoji}>📱</span>
                <span>Baixe o app Conecte SUS</span>
              </div>
              <div className={styles.calendarioFooterLinkItem}>
                <span className={styles.calendarioFooterEmoji}>🌐</span>
                <span>saude.gov.br</span>
              </div>
            </div>
          </div>
        </div>

        {/* Observações importantes */}
        
      </div>
    </div>
  );
};

export default CalendarioVacinacao;