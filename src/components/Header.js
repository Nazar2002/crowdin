import { useEffect } from "react";
import { useTranslation } from "react-i18next";
const Header = () => {
  const { t } = useTranslation();

  const menu = [
    {
      title: t("menu.aboutProject")
    },
    {
      title: t("menu.contactUs")
    },
  ];

  return (
    <header>
      <div className="container header_content">
        <div className="brand">{t('app_title')}</div>
        <nav>
          <ul>
            {menu.map(({ title }) => (
              <li key={title}>
                <p>{title}</p>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
