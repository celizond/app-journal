import { AppBar, Toolbar, IconButton } from '@mui/material';
import { MenuOutlined , LogoutOutlined} from '@mui/icons-material';
import { Grid, Typography } from "@mui/material";

export const NavBar = ({ drawerWidth }) => {
    return (
        <AppBar
            position='fixed'
            sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge='start'
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuOutlined />
                </IconButton>
                <Grid container direction='row' justifyContent='space-between' alignItems='center' >
                    <Typography> Journal App</Typography>
                    <IconButton
                        color='error'
                    >
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
