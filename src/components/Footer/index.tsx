import { stylex } from "@stylexjs/stylex";
import { footerStyle } from "./index.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import ZennLogo from "../../../public/images/zenn_logo.svg";

export const Footer = () => {
  return (
    <div {...stylex.props(footerStyle.base, footerStyle.footerLayout)}>
      <div {...stylex.props(footerStyle.iconLayout)}>
        <Link href={"https://github.com/38Koo"} target="_blank">
          <FontAwesomeIcon
            {...stylex.props(footerStyle.iconForFontAwesome)}
            icon={faGithub}
          />
        </Link>
        <Link href={"https://zenn.dev/38koo"} target="_blank">
          <ZennLogo {...stylex.props(footerStyle.iconForNotFontAweSome)} />
        </Link>
      </div>
    </div>
  );
};
