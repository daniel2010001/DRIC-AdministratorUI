import { Auth, LocalStorageKeys, inicialAuth } from "@/models";
import { getLocalStore, removeLocalStore, setLocalStore } from "@/utilities";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: LocalStorageKeys.AUTH,
  initialState: getLocalStore(LocalStorageKeys.AUTH) || inicialAuth,
  reducers: {
    /**
     * Crear un nuevo estado de autenticación
     * @param state Estado actual
     * @param action Acción de crear un nuevo estado de autenticación
     * @returns Nuevo estado de autenticación
     */
    createAuth: (state: Auth, action: PayloadAction<Auth>) => {
      setLocalStore(LocalStorageKeys.AUTH, action.payload);
      return action.payload;
    },
    /**
     * Actualizar un estado de autenticación
     * @param state Estado actual
     * @param action Acción de actualizar un estado de autenticación
     * @returns Nuevo estado de autenticación
     */
    updateAuth: (state: Auth, action: PayloadAction<Auth>) => {
      const result = { ...state, ...action.payload } as Auth;
      setLocalStore(LocalStorageKeys.AUTH, result);
      return result;
    },
    /**
     * Borrar un estado de autenticación
     * @param state Estado actual
     * @returns Nuevo estado de autenticación
     */
    resetAuth: () => {
      removeLocalStore(LocalStorageKeys.AUTH);
      return inicialAuth;
    },
  },
});

export const { createAuth, updateAuth, resetAuth } = authSlice.actions;

export default authSlice.reducer;
