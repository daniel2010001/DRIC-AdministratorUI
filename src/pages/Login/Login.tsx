import { Logo } from "@/assets";
import { setTokenStorage } from "@/services";
import { setAuth } from "@/redux/states";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { loginService } from "./services";

export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const schema = Yup.object({
    username: Yup.string().required(),
    password: Yup.string().required(),
  });
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: { username: string; password: string }) => {
    loginService(data.username, data.password).then(({ data: authState }) => {
      if (!authState.auth || !authState.token)
        console.error("Error al iniciar sesión");
      setTokenStorage(authState.token);
      dispatch(setAuth(authState));
      navigate("/dashboard");
    });
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
                Usuario
              </label>
              <div className="mt-2">
                <input
                  autoComplete="current-username"
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("username")}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Contraseña
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("password")}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
