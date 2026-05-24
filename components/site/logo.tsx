import Image from "next/image";

type Props = { onClick?: () => void };

export function LogoMark() {
  return (
    <span className="logomark">
      <Image
        src="/HageLogo.png"
        alt=""
        width={36}
        height={36}
        priority
        className="logomark-img"
      />
    </span>
  );
}

export function Logo({ onClick }: Props) {
  return (
    <a
      className="logo"
      href="#top"
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
      }}
    >
      <LogoMark />
      hagegames
    </a>
  );
}
