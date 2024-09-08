import { LocalStorageKeys, inicialUser } from "@/models";
import { getLocalStore, removeLocalStore, setLocalStore } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: LocalStorageKeys.USER,
  initialState: getLocalStore(LocalStorageKeys.USER) || inicialUser,
  reducers: {
    /**
     * Crear un nuevo estado de usuario
     * @param state Estado actual
     * @param action Acción de crear un nuevo estado de usuario
     * @returns Nuevo estado de usuario
     */
    createUser: (state, action) => {
      setLocalStore(LocalStorageKeys.USER, action.payload);
      return action.payload;
    },
    /**
     * Actualizar un estado de usuario
     * @param state Estado actual
     * @param action Acción de actualizar un estado de usuario
     * @returns Nuevo estado de usuario
     */
    updateUser: (state, action) => {
      const result = { ...state, ...action.payload };
      setLocalStore(LocalStorageKeys.USER, result);
      return result;
    },
    /**
     * Borrar un estado de usuario
     * @param state Estado actual
     * @returns Nuevo estado de usuario
     */
    resetUser: () => {
      removeLocalStore(LocalStorageKeys.USER);
      return inicialUser;
    },
  },
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
