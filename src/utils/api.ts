import { API_URL } from '@utils/constants';

import type { TIngredient } from '@utils/types';

type TIngredientsResponse = {
  success: boolean;
  data: TIngredient[];
};

const checkResponse = <T>(response: Response): Promise<T> => {
  if (response.ok) {
    return response.json() as Promise<T>;
  }

  return Promise.reject(new Error(`Ошибка ${response.status}`));
};

const getIngredients = (): Promise<TIngredient[]> => {
  return fetch(`${API_URL}/ingredients`)
    .then((response) => checkResponse<TIngredientsResponse>(response))
    .then((data) => {
      if (!data.success) {
        return Promise.reject(new Error('Не удалось получить ингредиенты'));
      }

      return data.data;
    });
};

export { getIngredients };
