import Navbar from 'src/components/Navbar';
import { Box, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import style from 'styled-jsx/style';

function App() {
    return <>
        <Navbar />
        <Box sx={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center' }} >
            <Box sx={{ height: '100%', width: '1200px' }}  >

                <br />
                <Typography  >
                    Predsednik društva: M.Škufca
                </Typography >


                <Typography >
                    podpredsednik : Košir Branko,
                </Typography >

                <Typography >
                    tajnik : Tadej Cindrič
                </Typography >

                <Typography >
                    blagajnik : Marjan Šmalc
                </Typography >

                <br />
                <Typography>
                    Člani Izvršilnega odbora: Marjan Šmalc, Anton Fabjan, Marjan Kozan, Ivan Škvarč, Ivan Vogrinc, Milan Rifelj, Rudin Ivančič, Andrej Škulj, Rudi Janežič, Branko Košir, Urška Pirnar
                </Typography >
                <br />
                <Typography>
                    Nadzorni odbor: Italo Morosini, Jože Žagar, Simo Vrlinič
                </Typography >
                <br />
                <Typography >
                    Disciplinska komisija: Tomaž Šavelj, Alojz Cerjak, Igor Šenica
                </Typography >




            </Box>
        </Box>


    </>
}
export default App 