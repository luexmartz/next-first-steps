"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./ActiveLink.module.css";

interface Props {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: Props) => {
  const pathName = usePathname();

  return (
    <Link
      className={clsx(style.link, path === pathName && style["active-link"])}
      href={path}
    >
      {text}
    </Link>
  );
};
