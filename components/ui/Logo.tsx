import { SITE } from '@/lib/constants'
import Image from "next/image";

export default function Logo() {
  return (
    <span className="flex items-center group">
        <Image src="/icon.svg" alt="Icon" width={48} height={24} />
        <Image src="/logo.svg" alt="Logo" width={150} height={36} />
    </span>
  )
}
