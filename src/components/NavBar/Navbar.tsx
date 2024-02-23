import React, { FC, ReactElement } from 'react'
import { Expert, ExpertLogo, TextBox } from '../../styles/globalStyles'
import {
    Container,
    ExpertText,
    FlagLogoBox,
    LineThrough,
    RightLogosBox,
    SecureLogBox,
} from './navBarStyle'
// import {
//     Box,
//     Link,
//     Container,
//     IconButton,
//     Menu,
//     MenuItem,
//     Toolbar,
//     Typography,
// } from '@mui/material'
// import MenuIcon from '@mui/icons-material/Menu'
// import GitHubIcon from '@mui/icons-material/GitHub'
// import { routes } from '../routes'
// import { NavLink } from 'react-router-dom'

const Navbar: FC = (): ReactElement => {
    // const [anchorElNav, setAnchorElNav] = React.useState(null)

    // const handleOpenNavMenu = (event: any) => {
    //     setAnchorElNav(event.currentTarget)
    // }

    // const handleCloseNavMenu = () => {
    //     setAnchorElNav(null)
    // }

    return (
        // <Box
        //     sx={{
        //         width: "100%",
        //         height: "auto",
        //         backgroundColor: "secondary.main",
        //     }}
        // >
        //     <Container maxWidth="xl">
        //         <Toolbar disableGutters>
        //             <Typography
        //                 variant="h6"
        //                 noWrap
        //                 sx={{
        //                     mr: 2,
        //                     display: { xs: "none", md: "flex" },
        //                 }}
        //             >
        //                 Starter App
        //             </Typography>
        //             <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        //                 <IconButton
        //                     size="large"
        //                     aria-label="account of current user"
        //                     aria-controls="menu-appbar"
        //                     aria-haspopup="true"
        //                     onClick={handleOpenNavMenu}
        //                     color="inherit"
        //                 >
        //                     <MenuIcon />
        //                 </IconButton>
        //                 <Menu
        //                     id="menu-appbar"
        //                     anchorEl={anchorElNav}
        //                     anchorOrigin={{
        //                         vertical: "bottom",
        //                         horizontal: "left",
        //                     }}
        //                     keepMounted
        //                     transformOrigin={{
        //                         vertical: "top",
        //                         horizontal: "left",
        //                     }}
        //                     open={Boolean(anchorElNav)}
        //                     onClose={handleCloseNavMenu}
        //                     sx={{
        //                         display: { xs: "block", md: "none" },
        //                     }}
        //                 >
        //                     {routes.map((page) => (
        //                         <Link
        //                             key={page.key}
        //                             component={NavLink}
        //                             to={page.path}
        //                             color="black"
        //                             underline="none"
        //                             variant="button"
        //                         >
        //                             <MenuItem onClick={handleCloseNavMenu}>
        //                                 <Typography textAlign="center">{page.title}</Typography>
        //                             </MenuItem>
        //                         </Link>
        //                     ))}
        //                 </Menu>
        //             </Box>
        //             <Typography
        //                 variant="h6"
        //                 noWrap
        //                 component="div"
        //                 sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
        //             >
        //                 React Starter App
        //             </Typography>
        //             <IconButton
        //                 size="large"
        //                 aria-label="account of current user"
        //                 href="https://github.com/theWhiteFox/Vite-React-TS-Redux-boilerplate"
        //                 color="inherit"
        //             >
        //                 <GitHubIcon />
        //             </IconButton>
        //             <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        //                 <Box
        //                     sx={{
        //                         display: "flex",
        //                         flexDirection: "row",
        //                         justifyContent: "flex-start",
        //                         alignItems: "center",
        //                         marginLeft: "1rem",
        //                     }}
        //                 >
        //                     {routes.map((page) => (
        //                         <Link
        //                             key={page.key}
        //                             component={NavLink}
        //                             to={page.path}
        //                             color="black"
        //                             underline="none"
        //                             variant="button"
        //                             sx={{ fontSize: "large", marginLeft: "2rem" }}
        //                         >
        //                             {page.title}
        //                         </Link>
        //                     ))}
        //                 </Box>
        //             </Box>
        //         </Toolbar>
        //     </Container>
        // </Box>
        <Container>
            <ExpertLogo>
                <img src="/global-tick.svg" alt="Tick Icon" />

                <TextBox>
                    <Expert>Expert</Expert>
                    <h1>PlevinClaims</h1>
                </TextBox>
            </ExpertLogo>
            <LineThrough></LineThrough>
            <RightLogosBox>
                <SecureLogBox>
                    <div>
                        <img
                            src="/navBar-secure-logo.svg"
                            alt="Secure SSL Encryption Icon"
                        />
                    </div>
                    <div>
                        <h1>Secure</h1>
                        <h1>SSL ENCRYPTION</h1>
                    </div>
                </SecureLogBox>

                <FlagLogoBox>
                    <div>
                        <img src="/navBar-flag.svg" alt="Union Jack Icon" />
                    </div>
                    <div>
                        <h1>100% Secure</h1>
                        <h1>UK Website</h1>
                    </div>
                </FlagLogoBox>
            </RightLogosBox>
        </Container>
    )
}

export default Navbar
