import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

type FooterItem =
  | string
  | { label: string; email: string }

const FooterSection = ({ title, items }: { title: string; items: FooterItem[] }) => (
  <div className="mb-8 md:mb-0">
    <h3 className="text-lg font-semibold text-secondary mb-4">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => {
        if (typeof item === 'object' && item.email) {
          return (
            <li key={index} className="text-sm text-primary">
              <span className="block text-xs text-primary/80 mb-0.5">{item.label}</span>
              <a
                href={`mailto:${item.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {item.email}
              </a>
            </li>
          )
        }

        const value = item as string
        const isEmail = value.includes('@')
        const isPhone = value.includes('+') || value.includes('Tel:')

        if (isEmail) {
          return (
            <li key={index} className="text-sm text-primary">
              <a
                href={`mailto:${value}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {value}
              </a>
            </li>
          )
        }

        if (isPhone) {
          const phoneNumber = value.replace('Tel: ', '')
          return (
            <li key={index} className="text-sm text-primary">
              <a
                href={`tel:${phoneNumber}`}
                className="hover:text-white transition-colors"
              >
                {value}
              </a>
            </li>
          )
        }

        return (
          <li key={index} className="text-sm text-primary">{value}</li>
        )
      })}
    </ul>
  </div>
)

const SocialIcon = ({ Icon, href }: { Icon: React.ElementType; href: string }) => (
  <a href={href} className="text-accent hover:text-white transition-colors">
    <Icon size={24} />
  </a>
)

const Footer = () => {
  return (
    <footer className="bg-accent py-12 border-t border-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FooterSection
            title="JHB Office"
            items={[
              "53 Zeiss Rd,",
              "Laser Park",
              "Roodeport",
              "South Africa, 2040",
              "Tel: +27 11 794 2090",
              { label: "Joburg enquiries", email: "tyler@vaja.co.za" },
            ]}
          />
          <FooterSection
            title="CPT Office"
            items={[
              "Cape Town",
              "Western Cape",
              "South Africa, 7945",
              "Tel: +27 82 920 6994",
              { label: "Cape Town enquiries", email: "kaylee@vaja.co.za" },
            ]}
          />
          <FooterSection
            title="Services"
            items={["Steam Rooms", "Saunas"]}
          />
          <FooterSection
            title="Contact Us"
            items={[
              { label: "Joburg enquiries", email: "tyler@vaja.co.za" },
              { label: "Cape Town enquiries", email: "kaylee@vaja.co.za" },
              "+27 11 794 2090",
            ]}
          />
        </div>
        <div className="mt-12 pt-8 border-t border-secondary">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-secondary mb-4 md:mb-0">
              © {new Date().getFullYear()} Vaja. All rights reserved.
            </p>
            <div className="flex space-x-4">
                <div className="bg-secondary rounded-full p-2">
                    <SocialIcon href="https://www.facebook.com/vajaproducts" Icon={FaFacebookF} />
                </div>
                <div className="bg-secondary rounded-full p-2">
                    <SocialIcon href="https://www.instagram.com/vajaproducts" Icon={FaInstagram} />
                </div>
                <div className="bg-secondary rounded-full p-2">
                    <SocialIcon href="https://www.linkedin.com/company/vaja-sauna-steam/" Icon={FaLinkedinIn} />
                </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
