import Image from "next/image";

export function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  return (
    <Image
      src="/images/logo.png"
      alt="US Auto Movers"
      width={140}
      height={47}
      priority
      style={{ display: "block", background: "transparent" }}
    />
  );
}
