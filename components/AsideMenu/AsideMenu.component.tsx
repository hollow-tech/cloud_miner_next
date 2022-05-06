import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { AnimateSharedLayout } from "framer-motion";

import { useIsMounted } from "../../hooks/useIsMounted";

import { Active, AsideItem, AsideLink, AsideList, Icon, LogoWrapper, AsideWrapper  } from "./AsideMenu.styles";

import { AsideMenuProps } from "./AsideMenu.types";

import Logo from './icons/logo2.svg'



export const AsideMenu: React.VFC<AsideMenuProps> = ({ links, ...props }) => {
  const router = useRouter();
  const [active, setActive] = useState<number | undefined>(links.find((item) => item.href === router.pathname)?.id);
  const isMounted = useIsMounted();

  const handleActiveMenu = useCallback((id: number) => () => setActive(id), []);

  if (!isMounted) {
    return null;
  }

  return (
    <AsideWrapper>
    <LogoWrapper>
      <Logo />
    </LogoWrapper>
    <AsideList {...props}>
      <AnimateSharedLayout>
        {links.map(({ label, href, id, icon, notification }) => (
          <AsideItem key={id} onClick={handleActiveMenu(id)}>
            <Link href={href} passHref>
              <AsideLink>
                <Icon>{icon}</Icon>
                {label}
                
              </AsideLink>
            </Link>
          </AsideItem>
        ))}
      </AnimateSharedLayout>
    </AsideList>
    </AsideWrapper>
  );
};
