import { Preloader } from '@krgaa/react-developer-burger-ui-components';
import { useEffect, useState } from 'react';

import { AppHeader } from '@components/app-header/app-header';
import { BurgerConstructor } from '@components/burger-constructor/burger-constructor';
import { BurgerIngredients } from '@components/burger-ingredients/burger-ingredients';
import { getIngredients } from '@utils/api';

import type { TIngredient } from '@utils/types';

import cls from './app.module.css';

const App = () => {
  const [ingredients, setIngredients] = useState<TIngredient[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getIngredients()
      .then((data) => {
        setIngredients(data);
        setError(null);
      })
      .catch((requestError: unknown) => {
        const message =
          requestError instanceof Error
            ? requestError.message
            : 'Не удалось загрузить ингредиенты';
        setError(message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={cls.app}>
      <AppHeader />
      <h1 className={`${cls.title} text text_type_main-large mt-10 mb-5 pl-5 pr-5`}>
        Соберите бургер
      </h1>
      <main className={`${cls.main} pl-5 pr-5`}>
        {isLoading && <Preloader />}
        {!isLoading && error && (
          <p className={`${cls.status} text text_type_main-medium`}>{error}</p>
        )}
        {!isLoading && !error && (
          <>
            <BurgerIngredients ingredients={ingredients} />
            <BurgerConstructor ingredients={ingredients} />
          </>
        )}
      </main>
    </div>
  );
};

export { App };
