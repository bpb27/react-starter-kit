const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const request = async ({ body, method, route }) => {
  try {
    const result = await fetch(route, { body, headers, method });
    const data = await result.json();
    return { data };
  } catch (error) {
    return { error };
  }
};
