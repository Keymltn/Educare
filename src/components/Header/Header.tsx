import React from "react";
import { useState } from "react";
import m from "./Header.module.scss";
import logo from "../../assets/logo.svg";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Header = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  return (
    <>
      <header>
        <div className={m.header_container}>
          <div className={m.header_wrapper}>
            <div className={m.header_logo}>
              <img src={logo} alt="Educare logo" />
            </div>
            <div className={m["header_pages-bar"]}>
              <ul>
                <li className={m.header_page}>
                  <a
                    href="https://www.google.com/search?q=Home&sca_esv=577090324&sxsrf=AM9HkKnsZpR0RYLAli3UesS3exLsf6LDJQ%3A1698391756700&source=hp&ei=zGY7Zcu1KJWuwPAP4sen2Aw&iflsig=AO6bgOgAAAAAZTt03NCUQsiC7yBZxo9uDRmuTcbxAd73&ved=0ahUKEwjLy-Gq2pWCAxUVFxAIHeLjCcsQ4dUDCAo&uact=5&oq=Home&gs_lp=Egdnd3Mtd2l6IgRIb21lMg0QLhiKBRjHARjRAxhDMgcQABiKBRhDMgsQLhiABBixAxiDATIOEC4YrwEYxwEYsQMYgAQyBxAAGIoFGEMyBRAAGIAEMg4QLhiABBixAxiDARjUAjIFEAAYgAQyBRAAGIAEMgUQABiABEjTVVDgBliLGnAFeACQAQCYAZ0BoAG5BqoBAzAuNrgBA8gBAPgBAagCCsICBxAjGOoCGCfCAgQQIxgnwgIHECMYigUYJ8ICCBAAGIAEGLEDwgILEAAYigUYsQMYgwHCAhEQLhiABBixAxiDARjHARjRA8ICCxAAGIAEGLEDGIMBwgILEC4YgAQYxwEY0QPCAg0QLhiABBixAxiDARgKwgIQEC4YrwEYxwEYsQMYgAQYCsICBxAAGIAEGArCAhAQLhiABBixAxiDARjUAhgKwgIHEC4YgAQYCsICCxAuGIoFGLEDGIMBwgIOEC4YgAQYsQMYxwEYrwE&sclient=gws-wiz"
                    target="_blank"
                  >
                    Home
                  </a>
                </li>
                <li className={m.header_page}>
                  <a
                    href="https://www.google.com/search?q=about&sca_esv=577090324&tbm=isch&sxsrf=AM9HkKnwibLdbQT1GIHWdyOTE3jaR5oWag:1698391809775&source=lnms&sa=X&ved=2ahUKEwi6_orE2pWCAxUYEhAIHcTUAdAQ_AUoAXoECAMQAw&biw=1536&bih=747&dpr=1.25"
                    target="_blank"
                  >
                    About
                  </a>
                </li>
                <li className={m.header_page}>
                  <a
                    href="https://www.google.com/search?q=cources&tbm=isch&ved=2ahUKEwj08fjE2pWCAxVaFBAIHRkmDl4Q2-cCegQIABAA&oq=cources&gs_lcp=CgNpbWcQAzIHCAAQExCABDIHCAAQExCABDIHCAAQExCABDIHCAAQExCABDIHCAAQExCABDIHCAAQExCABDIKCAAQBRAeEBMQCjIICAAQBRAeEBMyCAgAEAUQHhATMggIABAFEB4QEzoECCMQJzoFCAAQgAQ6BwgAEIoFEEM6DQgAEIoFELEDEIMBEEM6CwgAEIAEELEDEIMBOggIABCABBCxAzoECAAQHlCCCljhEmC9FGgAcAB4AIABcogB6gaSAQMwLjiYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=A2c7ZbTkItqowPAPmcy48AU&bih=747&biw=1536"
                    target="_blank"
                    className={m["header_cources-anchor"]}
                  >
                    Courses
                  </a>
                  <FiChevronDown className={m["header_page-downicon1"]} />
                </li>
                <li className={m.header_page}>
                  <a
                    href="https://www.google.com/search?q=blog&sca_esv=577090324&tbm=isch&sxsrf=AM9HkKkVZXzBd4QQYB-qD9FNJlyg99bHhA:1698391859246&source=lnms&sa=X&ved=2ahUKEwjhwNbb2pWCAxVoAxAIHcsaAFAQ_AUoAXoECAMQAw&biw=1536&bih=747&dpr=1.25"
                    target="_blank"
                    className={m["header_blog-anchor"]}
                  >
                    Blog
                  </a>
                  <FiChevronDown className={m["header_page-downicon2"]} />
                </li>
                <li className={m["header_page-btn"]}>
                  <button>Contact us</button>
                </li>
              </ul>
            </div>
            <div className={m.header_hamburger}>
              <GiHamburgerMenu
                onClick={() => setIsSidebarVisible(true)}
                className={m["header_hamburger-icon"]}
              />
              {isSidebarVisible ? (
                <div className={m["header_hamburger-sidebar"]}>
                  <GrClose
                    onClick={() => setIsSidebarVisible(false)}
                    className={m.header_close}
                  />
                  <ul>
                    <li className={m["header_page-sidebar"]}>
                      <a
                        href="https://www.google.com/search?q=Home&sca_esv=577090324&sxsrf=AM9HkKnsZpR0RYLAli3UesS3exLsf6LDJQ%3A1698391756700&source=hp&ei=zGY7Zcu1KJWuwPAP4sen2Aw&iflsig=AO6bgOgAAAAAZTt03NCUQsiC7yBZxo9uDRmuTcbxAd73&ved=0ahUKEwjLy-Gq2pWCAxUVFxAIHeLjCcsQ4dUDCAo&uact=5&oq=Home&gs_lp=Egdnd3Mtd2l6IgRIb21lMg0QLhiKBRjHARjRAxhDMgcQABiKBRhDMgsQLhiABBixAxiDATIOEC4YrwEYxwEYsQMYgAQyBxAAGIoFGEMyBRAAGIAEMg4QLhiABBixAxiDARjUAjIFEAAYgAQyBRAAGIAEMgUQABiABEjTVVDgBliLGnAFeACQAQCYAZ0BoAG5BqoBAzAuNrgBA8gBAPgBAagCCsICBxAjGOoCGCfCAgQQIxgnwgIHECMYigUYJ8ICCBAAGIAEGLEDwgILEAAYigUYsQMYgwHCAhEQLhiABBixAxiDARjHARjRA8ICCxAAGIAEGLEDGIMBwgILEC4YgAQYxwEY0QPCAg0QLhiABBixAxiDARgKwgIQEC4YrwEYxwEYsQMYgAQYCsICBxAAGIAEGArCAhAQLhiABBixAxiDARjUAhgKwgIHEC4YgAQYCsICCxAuGIoFGLEDGIMBwgIOEC4YgAQYsQMYxwEYrwE&sclient=gws-wiz"
                        target="_blank"
                      >
                        Home
                      </a>
                    </li>
                    <li className={m["header_page-sidebar"]}>
                      <a
                        href="https://www.google.com/search?q=about&sca_esv=577090324&tbm=isch&sxsrf=AM9HkKnwibLdbQT1GIHWdyOTE3jaR5oWag:1698391809775&source=lnms&sa=X&ved=2ahUKEwi6_orE2pWCAxUYEhAIHcTUAdAQ_AUoAXoECAMQAw&biw=1536&bih=747&dpr=1.25"
                        target="_blank"
                      >
                        About
                      </a>
                    </li>
                    <li className={m["header_page-sidebar"]}>
                      <a
                        href="https://www.google.com/search?q=cources&tbm=isch&ved=2ahUKEwj08fjE2pWCAxVaFBAIHRkmDl4Q2-cCegQIABAA&oq=cources&gs_lcp=CgNpbWcQAzIHCAAQExCABDIHCAAQExCABDIHCAAQExCABDIHCAAQExCABDIHCAAQExCABDIHCAAQExCABDIKCAAQBRAeEBMQCjIICAAQBRAeEBMyCAgAEAUQHhATMggIABAFEB4QEzoECCMQJzoFCAAQgAQ6BwgAEIoFEEM6DQgAEIoFELEDEIMBEEM6CwgAEIAEELEDEIMBOggIABCABBCxAzoECAAQHlCCCljhEmC9FGgAcAB4AIABcogB6gaSAQMwLjiYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=A2c7ZbTkItqowPAPmcy48AU&bih=747&biw=1536"
                        target="_blank"
                        className={m["header_cources-anchor"]}
                      >
                        Courses
                      </a>
                    </li>
                    <li className={m["header_page-sidebar"]}>
                      <a
                        href="https://www.google.com/search?q=blog&sca_esv=577090324&tbm=isch&sxsrf=AM9HkKkVZXzBd4QQYB-qD9FNJlyg99bHhA:1698391859246&source=lnms&sa=X&ved=2ahUKEwjhwNbb2pWCAxVoAxAIHcsaAFAQ_AUoAXoECAMQAw&biw=1536&bih=747&dpr=1.25"
                        target="_blank"
                        className={m["header_blog-anchor"]}
                      >
                        Blog
                      </a>
                    </li>
                    <li className={m["header_page-btn"]}>
                      <button>Contact us</button>
                    </li>
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
