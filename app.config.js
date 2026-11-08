module.exports = ({ config }) => {
  const baseUrl = process.env.PAGES_BASE_PATH;

  return {
    ...config,
    experiments: {
      ...config.experiments,
      ...(baseUrl ? { baseUrl } : {}),
    },
  };
};
