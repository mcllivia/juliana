'use client';
import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import './Sidebar.css';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const menuItems = [
    { text: 'Início', link: '/inicio' },
    { text: 'Sobre as Vacinas', link: '/sobreVacinas' },
    { text: 'Calendário de Vacinação', link: '/calendarioVacinacao' },
    { text: 'Mitos e Verdades', link: '/mitosVerdades' },
    { text: 'Notícias e Atualizações', link: '/noticias' },
  ];

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{ className: 'sidebar-paper' }}
    >
      <List className="sidebar-list">
        {menuItems.map((item, idx) => (
          <Link href={item.link} key={idx} passHref legacyBehavior>
            <ListItemButton onClick={onClose} className="sidebar-item">
              <ListItemText
                primary={item.text}
                classes={{ primary: 'sidebar-item-text' }}
              />
            </ListItemButton>
          </Link>
        ))}
      </List>
    </Drawer>
  );
}
