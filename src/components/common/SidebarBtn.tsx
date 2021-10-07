import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

const SidebarBtn = () => {
  return (
    <div className="w-full px-2">
      <div className="">
        <Item
          title="Marketplace"
          content={[
            {
              title: "Live Auctions",
              url: "/",
            },
            {
              title: "Upcoming Sales",
              url: "/",
            },
            {
              title: "Past Sales",
              url: "/",
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

      <style scoped>{`
        .sidebarBtn {
          background: rgba(255, 255, 255, 0.75);
          border: 1px solid #e0e0e0;
          box-sizing: border-box;
          box-shadow: 0px 4px 15px 4px rgba(0, 0, 0, 0.15);
          border-radius: 25px;
          flex: none;
          margin: 14px 0px;
          padding: 5px 0px;
        }
      `}</style>
    </div>
  );
};

interface ContentItems {
  title: string;
  url: string;
}

interface ItemProps {
  title: string;
  content?: ContentItems[];
}

const Item = ({ title, content }: ItemProps) => {
  return (
    <Disclosure as="div" className="mb-1 sidebarBtn">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left bg-white-100 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
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
                    className="block text-left text-gray-600 hover:text-gray-700 hover:underline"
                  >
                    {item.title}
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
