import "./Translator.css";
import React from "react";
import { useTranslation } from "react-i18next";

function Translator() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("ru")}>Русский</button>
      <h1>{t("welcome")}</h1>
      <p>{t("hello")}</p>
      <p>{t("goodbye")}</p>
    </div>
  );
}

export default Translator;
