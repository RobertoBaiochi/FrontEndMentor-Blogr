import Link from "next/link";
import { LogoIcon } from "./icons/logo";



export default function LogoLink() {
  return (
      <Link href="/">
        <LogoIcon />
      </Link>
  );
}
