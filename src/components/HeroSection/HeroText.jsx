// Header80Text.js
import Button from "../Micros/button";
import ButtonLite from "../Micros/ButtonLite";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import headerData from "/src/locales/HeaderData.js";

const Header80Text = () => {
  
  const { t, i18n } = useTranslation("landing");
  const isRTL = i18n.language === 'ar';
  const { heading, description } = headerData[i18n.language] || headerData.en;

  return (
    <div className="container relative flex h-full items-center justify-center z-[20]"
      dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="text-center">
        <h1 className="mb-5 text-4xl font-bold dark:text-white md:text-6xl">{heading}</h1>
        <p className="mb-8 dark:text-white/90">{description}</p>

        <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="h-16 min-w-64">
            <Link to="/Pricing">
              <Button
                color="gray"
                CTAtext={t("hero_section.cta")}
                className="h-12 w-[200px] text-black dark:text-black rounded"
              >
                {t("hero_section.cta")}
              </Button>
            </Link>
          </div>
          <div className="h-16 min-w-64">
            <ButtonLite
              CTAtext={t("hero_section.button_lite_cta")}
              className="text-black border-gray-700 rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header80Text;
