const BASE_URL = 'https://60816d9073292b0017cdd833.mockapi.io';

export function getData<T>(url: string): Promise<T> {
  return fetch(BASE_URL + url).then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  });
}
