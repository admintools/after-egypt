import Head from "next/head";

interface HeaderProps {
  heading: string;
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ heading, title }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <h2>
      next-language-detector example
      <hr />
    </h2>
    <h1>{heading}</h1>
    <a className="github" href="//github.com/i18next/next-language-detector">
      <i className="typcn typcn-social-github-circular" />
    </a>
  </>
);
