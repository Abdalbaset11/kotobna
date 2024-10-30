import Link from 'next/link'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, DarkThemeToggle, Footer, FooterCopyright, FooterLink, FooterLinkGroup } from 'flowbite-react'

export function DefaultHeader() {
    return (
        <Navbar>
            <NavbarBrand as={Link} href='https://google.com'>
                <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>كتبنا</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink href='#' active className='ml-8'>الرئسية</NavbarLink>
                <NavbarLink as={Link} href='#'>عن كتبنا</NavbarLink>
                <NavbarLink href='#'>التصنيفات</NavbarLink>
                <NavbarLink href='#'>الاكثر شيوعا</NavbarLink>
                <NavbarLink href='#'>تواصل معنا</NavbarLink>
            </NavbarCollapse>
            <DarkThemeToggle />
        </Navbar>
    )
}

export function DefaultFooter() {
    return (
        <Footer container className='rounded-none'>
            <FooterCopyright href='#' by='كتبنا' year={2024} />
            <FooterLinkGroup>
                <FooterLink>عن كتبنا</FooterLink>
                <FooterLink>الشروط والاخكام</FooterLink>
                <FooterLink>التراخيص</FooterLink>
                <FooterLink>تواصل معنا</FooterLink>
            </FooterLinkGroup>
        </Footer>
    )
}
