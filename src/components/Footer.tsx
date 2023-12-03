import { useNavigate } from 'react-router-dom'
import logo from '../assets/shopme_logo.webp'
import mastercard from '../assets/mastercard.svg'
import visa from '../assets/visa.svg'
import qris from '../assets/QRIS_logo.svg'
import bca from '../assets/Bank_Central_Asia.svg'
import shopeepay from '../assets/ShopeePay.svg'
import bni from '../assets/BankNegaraIndonesia46-logo.svg'

export default function Footer() {
  const navigate = useNavigate()
  return (
    <footer className="layout w-full h-80 p-4 bg-white border-t border-gray-300">
      <div className="my-4 md:flex md:justify-between md:gap-2">
        <div>
          <div className="w-32 h-14 bg-white flex justify-center items-center text-orange font-bold text-lg cursor-pointer" onClick={() => navigate("/")}>
            <img className="w-10" src={logo} alt="Shopme Logo" />
            Shopme
          </div>
          <div className="flex gap-1 text-gray-500">
            <p>Inspired by</p>
            <a href="https://shopee.co.id" className="hover:text-orange hover:underline">Shopee</a>
            <p>and</p>
            <a href="https://tokopedia.com" className="hover:text-green-600 hover:underline">Tokopedia</a>
          </div>
        </div>
        <div className="md:flex">
          <div className="w-full p-4 flex flex-col gap-1">
            <p className="mb-2">Payments</p>
            <div className="w-full flex flex-wrap gap-1 flex-shrink-0">
              <img className="w-12 flex-shrink-0" src={mastercard} alt="Mastercard" />
              <img className="w-12 flex-shrink-0" src={visa} alt="Visa" />
              <img className="w-12 flex-shrink-0" src={bca} alt="BCA" />
              <img className="w-12 flex-shrink-0" src={qris} alt="QRIS" />
              <img className="w-12 flex-shrink-0" src={shopeepay} alt="ShopeePay" />
              <img className="w-12 flex-shrink-0" src={bni} alt="BNI" />
            </div>
          </div>
          <div className="w-full p-4 flex flex-col gap-1">
            <p className="mb-2">Quick Links</p>
            <a className="text-sm text-gray-500 hover:underline hover:text-orange" href="">Home</a>
            <a className="text-sm text-gray-500 hover:underline hover:text-orange" href="">Shop by Category</a>
            <a className="text-sm text-gray-500 hover:underline hover:text-orange" href="">Special Offers</a>
            <a className="text-sm text-gray-500 hover:underline hover:text-orange" href="">Get Vouchers</a>
            <a className="text-sm text-gray-500 hover:underline hover:text-orange" href="">My Account</a>
          </div>
          <div className="w-full p-4 flex flex-col gap-1">
            <p className="mb-2">Customer Service</p>
            <a className="text-sm text-gray-500 hover:underline hover:text-orange" href="">Contact Us</a>
            <a className="text-sm text-gray-500 hover:underline hover:text-orange" href="">FAQs</a>
            <a className="text-sm text-gray-500 hover:underline hover:text-orange" href="">Shipping Information</a>
            <a className="text-sm text-gray-500 hover:underline hover:text-orange" href="">Returns and Exchanges Policy</a>
            <a className="text-sm text-gray-500 hover:underline hover:text-orange" href="">Privacy Policy</a>
            <a className="text-sm text-gray-500 hover:underline hover:text-orange" href="">Terms and Condition</a>
          </div>
        </div>
      </div>
    </footer>
  )
}