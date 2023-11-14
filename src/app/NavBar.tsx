'use client'
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import RadarIcon from '@mui/icons-material/Radar'
import Link from 'next/link'
import { Slide, useScrollTrigger } from '@mui/material'

const pages = ['/', 'radar', 'skills', 'chart']
function pageToTitle (page: string): string {
  if (page === '/') {
    return 'home'
  } else {
    return page
  }
}
function HideOnScroll ({
  children
}: {
  children: React.ReactElement
}): JSX.Element {
  const trigger = useScrollTrigger()
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export default function NavBar (): JSX.Element {
  const [menuVisible, setMenuVisible] = React.useState(false)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setMenuVisible(true)
  }

  const handleCloseNavMenu = (): void => {
    setMenuVisible(false)
  }

  const logoStyle = {
    mr: 2,
    display: { xs: 'flex', md: 'none' },
    flexGrow: 1,
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: 'inherit',
    textDecoration: 'none'
  }

  return (
    <HideOnScroll>
      <AppBar color="inherit" elevation={0}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <RadarIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                keepMounted
                open={menuVisible}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link href={page}>{pageToTitle(page)}</Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <RadarIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={logoStyle}
            >
              devradar
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    display: 'block',
                    color: 'primary.main',
                    fontSize: '1.4em',
                    fontWeight: 'lighter'
                  }}
                  href={page}
                >
                  {pageToTitle(page)}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  )
}
