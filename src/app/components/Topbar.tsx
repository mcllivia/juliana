'use client';
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Sidebar';
import './Topbar.css';

export default function Topbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
    <AppBar
  position="static" // ou 'relative' se quiser que role junto com a página
  elevation={0}     // remove sombra (aquela barra preta embaixo do AppBar)
  sx={{ backgroundColor: '#2e7d32' }} 
  className="topbar-appbar"
></AppBar>
      <AppBar position="static" sx={{ backgroundColor: '#2e7d32' }}>
        <Toolbar className="topbar-toolbar">
          <IconButton edge="start" size="large" onClick={toggleSidebar}>
            <MenuIcon sx={{ color: '#fff' }} />
          </IconButton>

          <Typography variant="h6" className="topbar-title">
            Campanha de Vacinação
          </Typography>
          <div className="topbar-spacer" />
        </Toolbar>
      </AppBar>

      <Sidebar open={sidebarOpen} onClose={toggleSidebar} />
    </>
  );

}
