import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import icon from "../assets/icon.png"

const navigation = [
  { name: 'Home (Explore)', href: '/' },
  { name: 'Our Story', href: '/about' },
  { name: 'Get in Touch', href: '/contact' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-gray-900">
      <header className="inset-x-0 top-0 z-50 bg-gray-900">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Soar JMI</span>
              <img
                className="h-12 w-auto"
                src={icon}
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-sm font-semibold leading-6 text-white font-sans transition-all duration-300 group"
              >
                <span className="pb-1 border-b-2 border-transparent group-hover:border-jmi-green group-hover:animate-underline">
                  {item.name}
                </span>
                <style jsx>{`
                  .group:hover .group-hover\\:animate-underline {
                    animation: underlineGrow 0.4s cubic-bezier(0.4,0,0.2,1) forwards;
                  }
                  @keyframes underlineGrow {
                    from { border-color: transparent; width: 0; }
                    to { border-color: #347B5E; width: 100%; }
                  }
                `}</style>
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900"><span aria-hidden="true"></span>
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Soar JMI</span>
                <img
                  className="h-12 w-auto"
                  src={icon}
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="relative -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white group transition-all duration-300"
                    >
                      <span className="pb-1 border-b-2 border-transparent group-hover:border-jmi-green group-hover:animate-underline">
                        {item.name}
                      </span>
                      <style jsx>{`
                        .group:hover .group-hover\\:animate-underline {
                          animation: underlineGrow 0.4s cubic-bezier(0.4,0,0.2,1) forwards;
                        }
                        @keyframes underlineGrow {
                          from { border-color: transparent; width: 0; }
                          to { border-color: #347B5E; width: 100%; }
                        }
                      `}</style>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  )
}
