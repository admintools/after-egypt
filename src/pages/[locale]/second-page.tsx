import Link from "../../components/Link";
import { GetStaticPropsContext } from "next";

import { useTranslation } from "next-i18next";
import {
  getStaticPaths /*, makeStaticProps*/,
  getI18nProps,
} from "../../lib/getStatic";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

const SecondPage = ({ someOtherData }: { someOtherData: string }) => {
  const { t } = useTranslation(["second-page", "common", "footer"]);

  return (
    <>
      <main>
        <Header heading={t("h1")} title={t("title")} />
        <Link href="/" skipLocaleHandling={true}>
          <button
            type="button"
            className="rounded-md bg-teal px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-lime-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {t("common:back-to-home")}
          </button>
        </Link>
        <p>{someOtherData}</p>
      </main>
      <Footer />
    </>
  );
};

export default SecondPage;

// const getStaticProps = makeStaticProps(['second-page', 'common', 'footer'])
// export { getStaticPaths, getStaticProps }

// or if you want to merge the i18n props with other props...
export { getStaticPaths };
export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  // some data fetched from anywhere...
  const someOtherData = "hello world";
  return {
    props: {
      ...(await getI18nProps(ctx, ["second-page", "common", "footer"])),
      someOtherData,
    },
  };
};
