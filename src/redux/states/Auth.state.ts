import { LocalStorageKeys, inicialAuth } from "@/models";
import { getLocalStore, removeLocalStore, setLocalStore } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";

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
    createAuth: (state, action) => {
      setLocalStore(LocalStorageKeys.AUTH, action.payload);
      return action.payload;
    },
    /**
     * Actualizar un estado de autenticación
     * @param state Estado actual
     * @param action Acción de actualizar un estado de autenticación
     * @returns Nuevo estado de autenticación
     */
    updateAuth: (state, action) => {
      const result = { ...state, ...action.payload };
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
