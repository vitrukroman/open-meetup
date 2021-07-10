if (process.env.NODE_ENV === undefined) {
  process.env.NODE_ENV = "development";
}

const getEnvVariable = (name) => {
  const value = process.env[name];

  if (value === undefined) {
    throw Error(`Env variable '${name}' is not set`);
  }

  return value;
};

const isDevelopment = getEnvVariable("NODE_ENV") === "development";

module.exports = {
  getEnvVariable,
  isDevelopment,
};
