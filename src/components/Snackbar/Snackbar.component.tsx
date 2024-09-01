import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { SnackbarKey, SnackbarProvider, closeSnackbar } from "notistack";

// Componente de SnackbarProvider personalizado
export const CustomSnackbarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const theme = createTheme({
    components: {
      MuiSnackbar: {
        styleOverrides: {
          root: {
            // Personaliza el estilo de la alerta aquí
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        preventDuplicate
        maxSnack={3} // Número máximo de notificaciones visibles
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        autoHideDuration={3000} // Duración automática
        action={(snackbarId) => (
          <IconButton onClick={() => closeSnackbar(snackbarId)}>
            <CloseIcon />
          </IconButton>
        )}
      >
        {children}
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default CustomSnackbarProvider;
