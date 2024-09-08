import { createCustomAuth, createCustomUser } from "@/adapters";
import { Logo } from "@/assets";
import { AppStore, PrivateRoutes, UserType } from "@/models";
import { createAuth, createUser, resetAuth, resetUser } from "@/redux/states";
import { SnackbarUtilities, clearLocalStore } from "@/utilities";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { authService, getUserProfile } from "./services";

export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // cerrar sesión si ya está autenticado
  const auth = useSelector((store: AppStore) => store.auth);
  useEffect(() => {
    if (auth.isAuthed) {
      dispatch(resetAuth());
      dispatch(resetUser());
      clearLocalStore();
    }
  }, []);

  const schema = Yup.object({
    username: Yup.string().required(),
    password: Yup.string().required(),
  });
  const { register, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const requestError = (msg: string) => {
    SnackbarUtilities.error(msg);
    dispatch(resetAuth());
    reset();
  };

  const onSubmit = async (data: { username: string; password: string }) => {
    const auth = await authService(data.username, data.password)
      .then((response) => createCustomAuth(response.data))
      .catch(() => requestError("Error al iniciar sesión"));
    if (!auth || !auth.isAuthed) return;
    dispatch(createAuth(auth));
    const user = await getUserProfile()
      .then((response) => createCustomUser(response.data))
      .catch(() => requestError("Error al obtener perfil de usuario"));
    if (user && user.type === UserType.ADMINISTRADOR) {
      SnackbarUtilities.success("Sesión iniciada correctamente");
      dispatch(createUser(user));
      navigate(PrivateRoutes.PRIVATE);
    } else requestError("No tienes permisos para acceder a esta página");
  };

  return (
    <div className="flex !min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Logo className="mx-auto h-14 w-auto" />
        <h2 className="mt-6 text-center text-lg font-semibold leading-9 tracking-tight text-gray-900">
          INFORMACION PARA PROYECTOS Y TESIS UMSS
        </h2>
      </div>

      <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="sm:px-12 sm:rounded-lg shadow-sm sm:py-12 py-6 bg-light-secondary dark:bg-dark-secondary">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Usuario<span className="text-red-500 ms-1">*</span>
              </label>
              <div className="mt-2">
                <input
                  autoComplete="current-username"
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                  {...register("username")}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Contraseña<span className="text-red-500 ms-1">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                  {...register("password")}
                />
              </div>
            </div>

            <div>
              <button
                disabled={formState.isSubmitting}
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#093958] hover:bg-[#34617a] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
