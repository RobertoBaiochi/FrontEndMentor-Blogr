import Link from "next/link";
import { LogoIcon } from "./icons/logo";




export default function LogoLink() {
  return (
      <Link href="/" style={{background: 'yellow', display: "inline-block"}}>
        <LogoIcon />
      </Link>
  );
}
