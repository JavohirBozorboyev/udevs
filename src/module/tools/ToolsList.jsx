/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import {
  IconBrandAdobeIllustrator,
  IconBrandAdobeIndesign,
  IconBrandAdobePhotoshop,
  IconBrandAdobeXd,
  IconBrandAndroid,
  IconBrandApple,
  IconBrandAws,
  IconBrandAzure,
  IconBrandBitbucket,
  IconBrandBlackberry,
  IconBrandCypress,
  IconBrandDocker,
  IconBrandDolbyDigital,
  IconBrandFigma,
  IconBrandFlutter,
  IconBrandGatsby,
  IconBrandGitlab,
  IconBrandGolang,
  IconBrandInertia,
  IconBrandJavascript,
  IconBrandJuejin,
  IconBrandKotlin,
  IconBrandLoom,
  IconBrandMantine,
  IconBrandMongodb,
  IconBrandMysql,
  IconBrandNextcloud,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPhp,
  IconBrandPrintables,
  IconBrandPython,
  IconBrandRadixUi,
  IconBrandReact,
  IconBrandSass,
  IconBrandSketch,
  IconBrandSwift,
  IconBrandTerraform,
  IconBrandVue,
  IconBrandZeit,
  IconEye,
  IconGraphOff,
  IconNetwork,
  IconPaperclip,
  IconSatellite,
} from "@tabler/icons-react";
import ToolsCard from "./ToolsCard";

const ToolsList = ({ filter }) => {
  return (
    <div className="grid grid-cols-12 gap-2">
      {data.map((item, i) => {
        return <ToolsCard key={i} item={item} filter={filter} />;
      })}
    </div>
  );
};

export default ToolsList;

const data = [
  {
    title: "Promotheus",
    type: "devops",
    icon: <IconBrandJavascript />,
  },
  {
    title: "Loki",
    type: "devops",
    icon: <IconBrandLoom />,
  },
  {
    title: "Bitbucket",
    type: "devops",
    icon: <IconBrandBitbucket />,
  },
  {
    title: "Gitlab",
    type: "devops",
    icon: <IconBrandGitlab />,
  },
  {
    title: "Kotlin",
    type: "mobile",
    icon: <IconBrandKotlin />,
  },
  {
    title: "Android",
    type: "mobile",
    icon: <IconBrandAndroid />,
  },
  {
    title: "Go",
    type: "mobile",
    icon: <IconBrandGolang />,
  },
  {
    title: "Azure",
    type: "inf",
    icon: <IconBrandAzure />,
  },
  {
    title: "GCP",
    type: "inf",
    icon: <IconBrandNextcloud />,
  },
  {
    title: "DigitalOcean",
    type: "inf",
    icon: <IconBrandDolbyDigital />,
  },
  {
    title: "AWS",
    type: "inf",
    icon: <IconBrandAws />,
  },
  {
    title: "Kubernetes",
    type: "inf",
    icon: <IconNetwork />,
  },
  {
    title: "ELK",
    type: "devops",
    icon: <IconSatellite />,
  },
  {
    title: "Grafana",
    type: "devops",
    icon: <IconGraphOff />,
  },
  {
    title: "Terraform",
    type: "devops",
    icon: <IconBrandTerraform />,
  },
  {
    title: "IOS",
    type: "mobile",
    icon: <IconBrandApple />,
  },
  {
    title: "Swift",
    type: "mobile",
    icon: <IconBrandSwift />,
  },
  {
    title: "Flutter",
    type: "mobile",
    icon: <IconBrandFlutter />,
  },
  {
    title: "Next.js",
    type: "frontend",
    icon: <IconBrandNextjs />,
  },
  {
    title: "React.js",
    type: "frontend",
    icon: <IconBrandReact />,
  },
  {
    title: "Javascript",
    type: "frontend",
    icon: <IconBrandJavascript />,
  },
  {
    title: "Balsamic",
    type: "ux",
    icon: <IconBrandBlackberry />,
  },
  {
    title: "Invision",
    type: "ux",
    icon: <IconBrandInertia />,
  },
  {
    title: "Figma",
    type: "ux",
    icon: <IconBrandFigma />,
  },
  {
    title: "Docker",
    type: "devops",
    icon: <IconBrandDocker />,
  },
  {
    title: "PostgreSQL",
    type: "backend",
    icon: <IconBrandMysql />,
  },
  {
    title: "Python",
    type: "backend",
    icon: <IconBrandPython />,
  },
  {
    title: "Node.js",
    type: "backend",
    icon: <IconBrandNodejs />,
  },
  {
    title: "PHP",
    type: "backend",
    icon: <IconBrandPhp />,
  },
  {
    title: "GO",
    type: "backend",
    icon: <IconBrandGolang />,
  },
  {
    title: "Mantine",
    type: "frontend",
    icon: <IconBrandMantine />,
  },
  {
    title: "Gatsby.js",
    type: "frontend",
    icon: <IconBrandGatsby />,
  },
  {
    title: "Vue.js",
    type: "frontend",
    icon: <IconBrandVue />,
  },
  {
    title: "Principle",
    type: "ux",
    icon: <IconBrandPrintables />,
  },
  {
    title: "Sketch",
    type: "ux",
    icon: <IconBrandSketch />,
  },
  {
    title: "Adobe ",
    type: "ux",
    icon: <IconBrandAdobePhotoshop />,
  },
  {
    title: "Yourack",
    type: "test",
    icon: <IconBrandRadixUi />,
  },
  {
    title: "Appium ",
    type: "test",
    icon: <IconPaperclip />,
  },
  {
    title: "Cypress ",
    type: "test",
    icon: <IconBrandCypress />,
  },
  {
    title: "Jmeter ",
    type: "test",
    icon: <IconBrandJuejin />,
  },
  {
    title: "MonogoDB ",
    type: "backend",
    icon: <IconBrandMongodb />,
  },
  {
    title: "Cassandra ",
    type: "backend",
    icon: <IconEye />,
  },
  {
    title: "Gatsby.js",
    type: "frontend",
    icon: <IconBrandGatsby />,
  },
  {
    title: "Sass",
    type: "frontend",
    icon: <IconBrandSass />,
  },
  {
    title: "Adobe",
    type: "ux",
    icon: <IconBrandAdobeIndesign />,
  },
  {
    title: "Zeplin ",
    type: "ux",
    icon: <IconBrandZeit />,
  },
  {
    title: "Illustrator ",
    type: "ux",
    icon: <IconBrandAdobeIllustrator />,
  },
  {
    title: "Lottie ",
    type: "ux",
    icon: <IconBrandAdobeXd />,
  },
];
