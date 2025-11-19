function Footer() {

    const currentYear = new Date().getFullYear()
    return (
        <div className="fixed bottom-0 left-0 w-full text-center bg-[#091022] py-3 flex flex-col md:flex-row gap-3 items-center justify-center">
            <p className="font-merriweather text-gray-100/30 text-xs">
                © {currentYear} All rights reserved. <br />
            </p>
            <p className="font-merriweather text-gray-100/30 text-xs">
                Developed by Abia State Government.
            </p>
        </div>
    )
}

export default Footer;