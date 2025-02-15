import { useState } from "react";









const CompleteRegister = () => {
  const [phone, setPhone] = useState("");
  const [occupation, setOccupation] = useState("");
  const [departmentOrCareer, setDepartmentOrCareer] = useState("");
  const [foodPreferences, setFoodPreferences] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFoodPreferenceChange = (preference) => {
    setFoodPreferences((prevPreferences) =>
      prevPreferences.includes(preference)
        ? prevPreferences.filter((p) => p !== preference)
        : [...prevPreferences, preference]
    );
  };





  console.log(phone,  departmentOrCareer,foodPreferences,lastName,firstName)

  return (
    <div className="container mx-auto mb-32">
      <div className="md:items-center  md:flex justify-center mt-10 p-10">
        {/*Div de Imagen MetroEats */}
        <div className="mx-auto mb-10">
        <div className="flex flex-wrap">
          {/*Imagen */}
          <div className=" w-full sm:w-96">
            <img
              src="/MetroEats.png"
              className="mx-auto d-block mt-5 mb-10"
              alt="Logo Unimet"

            />
          </div>
        </div>
        </div>

        {/*Div de Formulario */}
        <form onSubmit={null} className="w-1/2 flex justify-center mx-auto">
          <div className="border-2 mx-auto border-gray-200 flex flex-col items-center justify-center p-10 bg-white rounded-lg drop-shadow-lg">
            <div>
              <h2 className="text-2xl font-semibold mt-5 mb-10">Paso Final de Registro</h2>
            </div>

            <div className="mb-3 grid grid-cols-2 gap-4">
                  {/*Nombre listo*/}
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      minLength="3"
                      name="Nombre"
                      id="firstName"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Nombre
                    </label>
                  </div>

                  {/*Apellido listo*/}
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      minLength="2"
                      name="Apellido"
                      id="lastName"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Apellido
                    </label>
                  </div>
                </div>

            {/*Numero de Telefono */}
            <div className="mb-3 mx-auto">
            <div className="relative w-40">
                <span className="absolute start-0 bottom-3 text-black">
                    <svg className="w-4 h-4 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                        <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>
                    </svg>
                </span>
                <input 
                type="text" 
                id="floating-phone-number" 
                className="block py-2.5 ps-6 pe-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                pattern="(+58)[0-9]{10}" 
                placeholder=" " 
                onChange={(e) => setPhone(e.target.value)}  
                required/>
                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Número de Teléfono</label>
            </div>
            <p id="helper-text-explanation" className="mt-2 mb-4 text-sm text-gray-500 dark:text-gray-400">El formato del número debe ser +581234567890</p>
            </div>




            <label htmlFor="occupation" className="font-bold  block mb-2 text-gray-700">
            Ocupación en la Universidad Metropolitana</label>

              {/*Ocupacion*/}
              <div className="mb-3">
                    <select
                      className="bg-gray-50 border m-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      onChange={(e) => setOccupation(e.target.value)}
                      required
                    >
                      <option value="">Selecciona tu ocupación</option>
                      <option value="administrativo">Administrativo</option>
                      <option value="profesor">Profesor</option>
                      <option value="estudiante">Estudiante</option>
                    </select>

                

                {/* Departamento o Carrera */}
                {occupation === "profesor" && (
                  <div className="mb-3">
                    <select
                      className="bg-gray-50 border m-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      onChange={(e) => setDepartmentOrCareer(e.target.value)}
                      required
                    >
                      <option value="">Selecciona tu departamento</option>
                      <option value="Depto. Matemáticas">
                        Depto. Matemáticas
                      </option>
                      <option value="Depto. Química">Depto. Química</option>
                      <option value="Depto. Física">Depto. Física</option>
                    </select>
                  </div>
                )}
                {occupation === "estudiante" && (
                  <div className="mb-3">
                    <select
                      className="bg-gray-50 border m-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      onChange={(e) => setDepartmentOrCareer(e.target.value)}
                      required
                    >
                      <option value="">Selecciona tu carrera</option>
                      <option value="Ing. Sistemas">Ing. Sistemas</option>
                      <option value="Administración">Administración</option>
                      <option value="Ing. Mecánica">Ing. Mecánica</option>
                    </select>
                  </div>
                )}
                </div>

                
            {/* Preferencias alimentarias */}
            <div className="mb-3">

            <div className="mt-5">
              <p className="block mb-2 text-lg font-medium text-gray-900">Preferencias alimentarias</p>
            </div>

            <div className="flex flex-wrap gap-4">

              <div className="flex items-center">
                <input
                  className="mr-2"
                  type="checkbox"
                  id="veganCheck"
                  onChange={() => handleFoodPreferenceChange("Veganismo")}
                />
                <label className="text-gray-700">Veganismo</label>
              </div>

              <div className="flex items-center">
                <input
                  className="mr-2"
                  type="checkbox"
                  id="vegetarianCheck"
                  onChange={() =>
                    handleFoodPreferenceChange("Vegetarianismo")
                  }
                />
                <label className="text-gray-700">Vegetarianismo</label>
              </div>

              <div className="flex items-center">
                <input
                  className="mr-2"
                  type="checkbox"
                  id="glutenFreeCheck"
                  onChange={() =>
                    handleFoodPreferenceChange("Libre de Gluten")
                  }
                />
                <label className="text-gray-700">
                  Libre de Gluten
                </label>
              </div>

            </div>

            </div>


            {/*Boton terminar Registro */}
            <button onClick={SubmitEvent} className="mx-auto mt-6 w-full px-4 py-2 bg-[#003087] text-white font-bold rounded-md hover:bg-[#001D53] focus:outline-none focus:ring focus:ring-blue-300">
              Crear nueva Cuenta
            </button>

          </div>
        </form>

      </div>
    </div>
  );
};
export default CompleteRegister;
