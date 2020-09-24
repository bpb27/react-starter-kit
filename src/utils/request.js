const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const request = async ({ method, params, route }) => {
  try {
    const options = { headers, method };
    if (params) options.body = JSON.stringify(params);
    const result = await fetch(route, options);
    const data = await result.json();
    return { data };
  } catch (error) {
    return { error };
  }
};
