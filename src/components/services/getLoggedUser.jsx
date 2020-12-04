const user = {
    name: "Pepito",
  };
  
  const getLoggedUser = () => Promise.resolve({ data: user });
  
  export { getLoggedUser };