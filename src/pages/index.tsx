import Navbar from 'src/components/Navbar';
import { Box, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import style from 'styled-jsx/style';

function App() {
    return <>
        <Navbar />
        <Box sx={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center' }} >
            <Box sx={{ height: '100%', width: '1200px' }}  >
                <h1>Dobrodošli!</h1>

                <br />
                <Typography  >
                    Spoštovani,
                </Typography >


                <Typography >
                    Društvo je prostovoljno združenje strokovnjakov varnosti in zdravja pri delu,
                    strokovnjakov področja varstva pred požarom, varstva okolja ter ostalih, predvsem iz naše regije,
                    z dolžnostjo, da spoštujejo določbe statuta društva, kodeks stroke in varujejo ugled društva.
                    Društvo je povezano z ostalimi društvi v ZVIS Slovenije.
                </Typography >

                <br />

                <Typography >
                    Namen in cilji so:
                </Typography >
                <ListItem component="div" disablePadding>
                    <ListItemText primary={`Informiranje, usposabljanje in povezovanje strokovnjakov v obliki posvetov, seminarjev in strokovnih ekskurzij, `} />
                </ListItem>
                <ListItem component="div" disablePadding>
                    <ListItemText primary={`Sodelovanje pri pripravi zakonov in podzakonskih aktov,  `} />
                </ListItem>
                <ListItem component="div" disablePadding>
                    <ListItemText primary={`Nudenje pomoči članom,`} />
                </ListItem>
                <ListItem component="div" disablePadding>
                    <ListItemText primary={`Povezovanje s podobnimi asociacijami, `} />
                </ListItem>
                <br />
                <Typography >
                    Organi društva so:
                </Typography >
                <ListItem component="div" disablePadding>
                    <ListItemText primary={`Občni zbor,  `} />
                </ListItem>
                <ListItem component="div" disablePadding>
                    <ListItemText primary={`Izvršilni odbor,`} />
                </ListItem>
                <ListItem component="div" disablePadding>
                    <ListItemText primary={`Nadzorni odbor `} />
                </ListItem>
                <ListItem component="div" disablePadding>
                    <ListItemText primary={`Disciplinska komisija  `} />
                </ListItem>
                <br />
                <Typography>
                    S članstvom v Evropski uniji nas čakajo novi izzivi, saj varnost in zdravje, kakor tudi ekologija postajata vse pomembnejši vrednoti, ki vplivata na kakovost življenja in dela, na uspešnost poslo vanja podjetij in vseh ljudi.
                </Typography >
                <br />
                <Typography>
                    MDVI Novo mesto
                </Typography >
                <Typography >
                    Predsednik:
                </Typography >
                <Typography >
                    Miro ŠKUFCA, univ. dipl. inž.
                </Typography >




            </Box>
        </Box>


    </>
}
export default App 