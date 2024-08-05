import Link from "next/link";
import { usePathname } from "next/navigation";


const links = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    {name: "Buy Bike", href: "/buymotorcycle"},
    {name:" Sell Bike", href: "/sellmotorcycle"}
  ];

export default function Navbar() {
    const pathname = usePathname();
  return (
    <>
      <h1 className="text-red-600 ml-2 font-serif text-2xl">MotorDealers</h1>
      <ul className="flex space-x-8 mt-2 text-white px-8 relative left-52">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.name} className="relative">
              <Link
                href={link.href}
                className={isActive ? " border-b-4 border-grey-500" : ""}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
