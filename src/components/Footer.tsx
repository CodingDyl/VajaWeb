import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const FooterSection = ({ title, items }: { title: string; items: string[] }) => (
  <div className="mb-8 md:mb-0">
    <h3 className="text-lg font-semibold text-secondary mb-4">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="text-sm text-accent">{item}</li>
      ))}
    </ul>
  </div>
)

const SocialIcon = ({ Icon }: { Icon: React.ElementType }) => (
  <a href="#" className="text-secondary hover:text-white transition-colors">
    <Icon size={24} />
  </a>
)

const Footer = () => {
  return (
    <footer className="bg-primary py-12 border-t border-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FooterSection
            title="JHB Office"
            items={[
              "53 Zeiss Rd,",
              "Laser Park",
              "Roodeport",
              "South Africa, 2040",
              "Tel: +27 11 794 2090"
            ]}
          />
          <FooterSection
            title="CPT Office"
            items={[
              "26 Paarden Eiland Road",
              "Cape Town",
              "Western Cape",
              "Tel: +27 82 900 1676"
            ]}
          />
          <FooterSection
            title="Services"
            items={["Steam Rooms", "Saunas"]}
          />
          <FooterSection
            title="Contact Us"
            items={["sandy@vaja.co.za"]}
          />
        </div>
        <div className="mt-12 pt-8 border-t border-secondary">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-accent mb-4 md:mb-0">
              © {new Date().getFullYear()} Vaja. All rights reserved.
            </p>
            <div className="flex space-x-4">
                <div className="bg-accent rounded-full p-2">
                    <SocialIcon Icon={FaFacebookF} />
                </div>
                <div className="bg-accent rounded-full p-2">
                    <SocialIcon Icon={FaInstagram} />
                </div>
                <div className="bg-accent rounded-full p-2">
                    <SocialIcon Icon={FaLinkedinIn} />
                </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
