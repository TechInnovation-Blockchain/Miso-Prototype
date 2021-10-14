import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { ItemProps } from "../../interfaces";

const SidebarBtn = () => {
  return (
    <div className="w-full px-2">
      <Item
        title="Marketplace"
        content={[
          {
            title: "Live Auctions",
            url: "/live-auctions",
          },
          {
            title: "Upcoming Sales",
            url: "#",
          },
          {
            title: "Past Sales",
            url: "/past-sales",
          },
        ]}
      />
      <Link href="/token" passHref>
        <Item title="Tokens" />
      </Link>
      <Link href="/factory" passHref>
        <Item title="Factory" />
      </Link>
    </div>
  );
};

const Item = ({ title, content }: ItemProps) => {
  const router = useRouter();

  return (
    <Disclosure as="div" className="mb-1 sidebarBtn">
      {({ open }) => (
        <>
          <Disclosure.Button
            className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left bg-white-100 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
            style={{ fontSize: "17px" }}
          >
            <span>{title}</span>
            {content && (
              <ChevronUpIcon
                className={`${open ? "transform rotate-180" : ""} w-5 h-5`}
              />
            )}
          </Disclosure.Button>
          {content && (
            <Disclosure.Panel className="px-4 pt-0 pl-6 pb-2 text-sm text-gray-500">
              {content.constructor === Array &&
                content.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    className="block text-left hover:underline sidebar__childText"
                    style={{
                      color:
                        router.pathname === item.url
                          ? "var(--card-color)"
                          : "var(--text-color)",
                    }}
                  >
                    {item.title}
                    {router.pathname === item.url && (
                      <Image
                        src="/assets/icons/green-dot.svg"
                        alt="dot"
                        height={20}
                        width={20}
                      />
                    )}
                  </a>
                ))}
            </Disclosure.Panel>
          )}
        </>
      )}
    </Disclosure>
  );
};

export default SidebarBtn;
