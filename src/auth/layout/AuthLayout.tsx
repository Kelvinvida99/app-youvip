import { Grid, Typography } from "@mui/material";
import { ChildrenProps } from "../../interfaces/children.interface";

export const AuthLayout = ({ children, title }: ChildrenProps) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "secondary.main", padding: 4 }}
    >
      <Grid
        item
        sx={{
          width: { sm: 400 },
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
          maxWidth: 400,
        }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          {title}
        </Typography>

        {children}
      </Grid>
    </Grid>
  );
};
