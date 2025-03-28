import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Grid, TextField, Typography, Button, Link } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      

          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  label="Correo"
                  type="email"
                  placeholder="ejemplo@gmail.com"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  label="Contraseña"
                  type="password"
                  placeholder="Contraseña"
                  fullWidth
                />
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant="outlined" fullWidth>
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="end" sx={{ mt: 1 }}>
              <Link component={RouterLink} color="inherit" to="/auth/register">
                Crear Admin
              </Link>
            </Grid>
          </form>
    </AuthLayout>
  );
};
