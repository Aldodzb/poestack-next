import { Fragment, useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useTheme } from "next-themes";

export default function ThemeChanger() {
  //const [theme, setTheme] = useState("Dark");
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-24 px-4 py-2 text-sm font-medium rounded-md shadow-sm bg-color-primary text-content-base hover:bg-color-secondary-variant focus:outline-none ">
          {theme}
          <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 w-24 mt-2 text-lg font-semibold text-center origin-top-right rounded-md shadow-lg bg-color-primary">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-black hover:text-white hover:bg-color-primary"
                  onClick={() => setTheme("Dark")}
                >
                  Dark
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-blue-800/80 hover:text-white"
                  onClick={() => setTheme("Original")}
                >
                  Original
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-red-800/80 hover:text-black"
                  onClick={() => setTheme("Vaal")}
                >
                  Vaal
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
