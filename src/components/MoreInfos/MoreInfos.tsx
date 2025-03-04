import { useTranslation } from "react-i18next"

export const MoreInfos = () => {
  const { t } = useTranslation();

  return (
    <section className="flex justify-between items-center px-5 sm:px-12 bg-yellow-70 min-h-[265px] flex-wrap">
      <div className="div-flex">
        <div>
            <img src="/icons/high-quality.png" alt={t("highQuality")} className="img-moreinfos" />
        </div>
        <div>
            <h3 className="h3-moreinfos">{t("highQuality")}</h3>
            <p className='p-moreinfos'>{t("craftedFrom")}</p>
        </div>
      </div>
      <div className="div-flex">
        <div>
            <img src="/icons/protection.png" alt={t("warrantyProtection")} className="img-moreinfos"  />
        </div>
        <div>
            <h3 className="h3-moreinfos">{t("warrantyProtection")}</h3>
            <p className='p-moreinfos'>{t("over2Years")}</p>
        </div>
      </div>
      <div className="div-flex">
        <div>
            <img src="/icons/free-shipping.png" alt={t("freeShipping")} className="img-moreinfos" />
        </div>
        <div>
            <h3 className="h3-moreinfos">{t("freeShipping")}</h3>
            <p className='p-moreinfos'>{t("orderOver")}</p>
        </div>
      </div>
      <div className="div-flex">
        <div>
            <img src="/icons/support.png" alt={t("24/7Support")} className="img-moreinfos" />
        </div>
        <div>
            <h3 className="h3-moreinfos">{t("24/7Support")}</h3>
            <p className='p-moreinfos'>{t("dedicatedSupport")}</p>
        </div>
      </div>
    </section>
  );
};
