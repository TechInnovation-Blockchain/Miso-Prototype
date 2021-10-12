import { SetStateAction, useState } from "react";
import Image from "next/image";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { SelectorIcon } from "@heroicons/react/solid";

// images
const block = "/assets/auction-page/block.svg";
const download = "/assets/auction-page/download.svg";
const left = "/assets/auction-page/left.svg";
const right = "/assets/auction-page/right.svg";

// styles
import styles from "../../../styles/commitTable.module.scss";

// data
import { commitTable } from "../../data";

const people = [
  {
    id: 1,
    number: 5,
  },
  {
    id: 2,
    number: 10,
  },
  {
    id: 3,
    number: 15,
  },
  {
    id: 4,
    number: 20,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const CommitTable = () => {
  const dummyData = commitTable;
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dummyData.slice(indexOfFirstPost, indexOfLastPost);
  const pageNumber = Math.ceil(dummyData.length / postsPerPage);
  const test = Array.from({ length: pageNumber }, (_, i) => i + 1);
  const handlePage = (index: SetStateAction<number>) => {
    setCurrentPage(index);
  };

  return (
    <div
      className="px-6 py-8 shadow-lg font-bold rounded-xl"
      style={{
        marginRight: "1rem",
        border: "1px solid var(--card-background)",
        // boxShadow: "0px 10px 16px 1px var(--card-color)",
        background: "var(--card-background)",
        color: "var(--card-color)",
      }}
    >
      <p className="font-bold text-xl">Commitments</p>
      <p className="w-24 rounded-full text-red-400 font-bold mt-3">
        <Listbox value={postsPerPage} onChange={setPostsPerPage}>
          <div className="mt-1 relative">
            <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-full shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <span className="flex items-center">
                <span className="ml-4 block truncate">{postsPerPage}</span>
              </span>
              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                className="absolute z-10 mt-1 w-full shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                style={{ background: "var(--card-background)" }}
              >
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-indigo-600" : "text-gray-900",
                        "cursor-default select-none relative py-2 pl-3 pr-9"
                      )
                    }
                    value={person.number}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex justify-center w-12">
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {person.number}
                          </span>
                        </div>

                        {/* {selected ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-indigo-600",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            >
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null} */}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
        {/* <SelectMenu /> */}
      </p>
      <div className="flex flex-col mt-4">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="sm:rounded-lg">
              <table className="min-w-full divide-y">
                <thead className="">
                  <tr>
                    <th
                      scope="col"
                      className="whitespace-nowrap text-left text-l font-bold text-black-500 tracking-wider"
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-6 py-3 text-left text-l font-bold text-black-500 tracking-wider"
                    >
                      Amount Committed
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-6 py-3 text-left text-l font-bold text-black-500 tracking-wider"
                    >
                      Tokens Claimable
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-6 py-3 text-left text-l ffont-bold text-black-500 tracking-wider"
                    >
                      TX Hash
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-6 py-3 text-left text-l font-bold text-black-500 tracking-wider flex"
                    >
                      Block Number
                      {/* <img className="pl-2" src={block} alt="" /> */}
                      <div className="pl-1">
                        <Image src={block} alt="block" height={12} width={12} />
                      </div>
                    </th>
                    {/* <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th> */}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200" style={{ background: "var(--card-background)" }}>
                  {currentPosts.map((person) => (
                    <tr key={person.id}>
                      <td className="py-3 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            {/* <img
                              className="h-10 w-10 rounded-full"
                              src={person.image}
                              alt=""
                            /> */}
                            <div className="rounded-full">
                              <Image
                                src={person.image}
                                alt="avatar"
                                height={38}
                                width={38}
                              />
                            </div>
                          </div>
                          <div className="ml-2">
                            <div className="text-sm font-medium text-gray-500">
                              {person.name}
                            </div>
                            {/* <div className="text-sm text-gray-500">{person.email}</div> */}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {person.amountCommitted}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {person.tokenClaimable}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {person.txHash}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {person.blockNumber}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 w-12/12 flex justify-between">
        <button className="flex border w-44 justify-center items-center rounded-full text-red-400 font-bold p-1">
          {/* <p>Download CSV</p> <img className="pl-3" src={download} alt="" /> */}
          <p>Download CSV</p>{" "}
          <div className="pl-3">
            <Image src={download} alt="download" height={14} width={14} />
          </div>
        </button>
      </div>
      <div className="mt-10 w-12/12 flex justify-between">
        <p className="px-1 font-bold text-gray-400">
          Showing {indexOfFirstPost + 1} To{" "}
          {indexOfFirstPost + postsPerPage > dummyData.length
            ? dummyData.length
            : indexOfFirstPost + postsPerPage}{" "}
          of {""}
          {Math.max(0, dummyData.length - indexOfLastPost)} Of Entries
        </p>
        <div className="flex">
          {/* <img src={left} alt="" /> */}
          <Image src={left} alt="left" height={8} width={8} />
          <div className={styles.page__btn}>
            {test.map((item, index) => {
              return (
                <ul className="flex px-2 cursor-pointer" key={index}>
                  <li
                    className={`font-medium ${
                      currentPage === item ? styles.active : styles.item
                    }`}
                    onClick={() => handlePage(index + 1)}
                  >
                    {item}
                  </li>
                </ul>
              );
            })}
          </div>
          {/* <img src={right} alt="" /> */}
          <Image src={right} alt="right" height={8} width={8} />
        </div>
      </div>
    </div>
  );
};

export default CommitTable;
