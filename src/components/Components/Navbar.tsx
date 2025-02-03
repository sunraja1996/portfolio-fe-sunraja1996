import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ComputerDesktopIcon,
  CodeBracketIcon,
  CodeBracketSquareIcon,
  ArrowDownCircleIcon,
  EnvelopeIcon,
} from "@heroicons/react/20/solid";
import profile from "../Assests/profile.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const projects = [
    {
      name: "Full Stack Development Projects",
      description: "Apps Build with ReactJS, NodeJS, ExpressJS and MongoDB",
      href: "/projects",
      icon: ComputerDesktopIcon,
    },
    {
      name: "Frontend Development Projects",
      description: "Apps Build with ReactJS, MongoDB",
      href: "/projects",
      icon: CodeBracketIcon,
    },
    {
      name: "Backend Development Projects",
      description: "Apps Build with NodeJS, ExpressJS and MongoDB",
      href: "/projects",
      icon: CodeBracketSquareIcon,
    },
    {
      name: "HTML, CSS Projects",
      description: "Apps Build with HTML, CSS",
      href: "/projects",
      icon: CodeBracketIcon,
    },
    {
      name: "HTML, CSS, Javascript Projects",
      description: "Apps Build with HTML, CSS and JavaScript",
      href: "/projects",
      icon: CodeBracketSquareIcon,
    },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Shanmugaraja</span>
              <img alt="" src={profile} className="h-8 w-auto" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                Projects
                <ArrowDownCircleIcon
                  aria-hidden="true"
                  className="size-5 flex-none text-gray-400"
                />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
              >
                <div className="p-4">
                  {projects.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                    >
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          aria-hidden="true"
                          className="size-6 text-gray-600 group-hover:text-indigo-600"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>


            {/* <a href="/" className="text-sm/6 font-semibold text-gray-900">
              Blog
            </a> */}

            <a href="https://github.com/sunraja1996" target="_blank" className="font-semibold text-gray-900">
              <FaGithub />
            </a>
            

            <a href="https://www.linkedin.com/in/sunraja1996/" target="_blank" className="font-semibold text-gray-900">
              <FaLinkedin />
            </a>

          </PopoverGroup>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="tel:+918903709112" target="_blank" className="text-sm/6 font-semibold text-gray-900">
              &#9742; Contact : <span aria-hidden="true">+91 89037 09112</span>
            </a>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Shanmugaraja</span>
                <img alt="" src={profile} className="h-8 w-auto" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                      Projects
                      <ArrowDownCircleIcon
                        aria-hidden="true"
                        className="size-5 flex-none group-data-open:rotate-180"
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {[...projects].map((item) => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                  
                  {/* <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Blog
                  </a> */}
                  <a
                    href="https://github.com/sunraja1996" target="_blank"
                    className="font-semibold text-gray-900 -mx-3 rounded-lg px-3 py-2 hover:bg-gray-50 flex items-center"
                  >
                    <FaGithub />
                    <span className="ml-2 text-base font-semibold text-gray-900">
                      Github
                    </span>
                  </a>

                  
                  <a
                    href="https://www.linkedin.com/in/sunraja1996/" target="_blank"
                    className="font-semibold text-gray-900 -mx-3 rounded-lg px-3 py-2 hover:bg-gray-50 flex items-center"
                  >
                    <FaLinkedin />
                    <span className="ml-2 text-base font-semibold text-gray-900">
                      Linkedin
                    </span>
                  </a>

              </div>
                <div className="py-6">
                  <a
                    href="tel:+918903709112" target="_blank"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    &#9742; Contact :
                    <span aria-hidden="true"> +91 89037 09112</span>
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </>
  );
};

export default Navbar;
