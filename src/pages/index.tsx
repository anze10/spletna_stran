import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

import Navbar from 'src/components/Navbar';
import { Box, Paper, TextField, Typography } from "@mui/material";

function App() {
    return (
        <Box sx={{ height: '100%', width: '100%' }} >

            <Navbar></Navbar>
            <Box>
                <Typography sx={{ height: '30%', width: '30%' }} textAlign="left">
                    Spoštovani,
                </Typography >
            </Box>
            <Box >

                <Typography sx={{ height: '30%', width: '40%' }} textAlign="left">
                    Društvo je prostovoljno združenje strokovnjakov varnosti in zdravja pri delu,
                    strokovnjakov področja varstva pred požarom, varstva okolja ter ostalih, predvsem iz naše regije,
                    z dolžnostjo, da spoštujejo določbe statuta društva, kodeks stroke in varujejo ugled društva.
                    Društvo je povezano z ostalimi društvi v ZVIS Slovenije.
                </Typography >
            </Box>
            <br />
            <Box>
                <Typography sx={{ height: '30%', width: '30%' }} textAlign="left">
                    Namen in cilji so:
                </Typography >
            </Box>

        </Box>

    )
}
export default App 