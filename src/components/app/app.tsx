import { Preloader } from '@krgaa/react-developer-burger-ui-components';
import { useCallback, useEffect, useState } from 'react';

import { AppHeader } from '@components/app-header/app-header';
import { BurgerConstructor } from '@components/burger-constructor/burger-constructor';
import { BurgerIngredients } from '@components/burger-ingredients/burger-ingredients';
import { IngredientDetails } from '@components/ingredient-details/ingredient-details';
import { Modal } from '@components/modal/modal';
import { OrderDetails } from '@components/order-details/order-details';
import { getIngredients } from '@utils/api';

import type { TIngredient } from '@utils/types';

import cls from './app.module.css';

const App = (): React.JSX.Element => {
  const [ingredients, setIngredients] = useState<TIngredient[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedIngredient, setSelectedIngredient] = useState<TIngredient | null>(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

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

  const handleIngredientClick = useCallback((ingredient: TIngredient) => {
    setSelectedIngredient(ingredient);
  }, []);

  const handleCloseIngredientModal = useCallback(() => {
    setSelectedIngredient(null);
  }, []);

  const handleOrderClick = useCallback(() => {
    setIsOrderModalOpen(true);
  }, []);

  const handleCloseOrderModal = useCallback(() => {
    setIsOrderModalOpen(false);
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
            <BurgerIngredients
              ingredients={ingredients}
              onIngredientClick={handleIngredientClick}
            />
            <BurgerConstructor
              ingredients={ingredients}
              onOrderClick={handleOrderClick}
            />
          </>
        )}
      </main>

      {selectedIngredient && (
        <Modal title="Детали ингредиента" onClose={handleCloseIngredientModal}>
          <IngredientDetails ingredient={selectedIngredient} />
        </Modal>
      )}

      {isOrderModalOpen && (
        <Modal onClose={handleCloseOrderModal}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
};

export { App };
