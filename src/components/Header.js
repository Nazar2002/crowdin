import { useEffect } from "react";
import { useTranslation } from "react-i18next";
const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <div className="container header_content">
        <div className="brand">{t('welcomeText')}</div>
      </div>
    </header>
  );
};

export default Header;
