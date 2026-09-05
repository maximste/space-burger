import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from '@krgaa/react-developer-burger-ui-components';

import cls from './app-header.module.css';

const AppHeader = (): React.JSX.Element => {
  return (
    <header className={cls.header}>
      <nav className={`${cls.menu} pt-4 pb-4 pl-5 pr-5`}>
        <ul className={cls.menu_part_left}>
          <li>
            <a href="/" className={`${cls.link} ${cls.link_active}`}>
              <BurgerIcon type="primary" />
              <p className="text text_type_main-default ml-2">Конструктор</p>
            </a>
          </li>
          <li>
            <a href="/feed" className={`${cls.link} ml-10`}>
              <ListIcon type="secondary" />
              <p className="text text_type_main-default ml-2">Лента заказов</p>
            </a>
          </li>
        </ul>
        <div className={cls.logo}>
          <Logo />
        </div>
        <ul className={cls.menu_part_right}>
          <li>
            <a href="/profile" className={cls.link}>
              <ProfileIcon type="secondary" />
              <p className="text text_type_main-default ml-2">Личный кабинет</p>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { AppHeader };
