import React from 'react'
import { Poppins } from 'next/font/google'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import logo from '@/public/image.png'
import { Button } from '@/components/ui/button';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ["700"]
});

interface NavbarItemProps {
    href: string;
    children: React.ReactNode,
    isActive?: boolean
};

const NavbarItems = ({
    href,
    children,
    isActive
}: NavbarItemProps) => {
    return (
        <Button asChild variant="outline" className={cn(
            "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent",
            isActive && "bg-black text-white hover:bg-black hover:text-white"
        )}>
            <Link href={href}>
                {children}
            </Link>
        </Button>
    )
}

const navbarItems = [
    { href: '/', children: 'Home' },
    { href: '/about', children: 'About' },
    { href: '/features', children: 'Features' },
    { href: '/pricing', children: 'Pricing' },
    { href: '/contact', children: 'Contact' },
]
const Navbar = () => {
    const pathName = usePathname();
    return (
        <nav className='h-20 flex border-b justify-between font-medium bg-white'>
            <Link href="/" className='pl-6 flex items-center'>
                <Image src={logo} alt="logo" height={80} width={80} className='ml-0 pl-0' />
                <span className={cn("text-5xl font-semibold", poppins.className)}>Aaamazonnn</span>
            </Link>

            {/* Navbar Items */}
            <div className='items-center lg:flex gap-4 hidden'>
                {navbarItems.map((item) => (
                    <NavbarItems key={item.href} href={item.href}>
                        {item.children}
                    </NavbarItems>
                ))}
            </div>

        </nav>
    )
}

export default Navbar