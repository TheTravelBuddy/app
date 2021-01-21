const log = __DEV__
  ? (config) => (set, get, api) =>
      config(
        (args) => {
          set(args);
          console.log("STATE", get());
        },
        get,
        api
      )
  : (config) => config;

export default log;
