import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

export default function DashboardLayout({ children }) {
  return (
    <div className=" flex flex-row">
      <div className="">
        <Sidebar aria-label="Sidebar with content separator example">
          <Sidebar.Items >
            <Sidebar.ItemGroup>
              <Sidebar.Item href="/order" icon={HiViewBoards}>
                Order
              </Sidebar.Item>
              <Sidebar.Item href="/products" icon={HiInbox}>
                Products
              </Sidebar.Item>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={HiTable}>
                Logout
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
      <div className="w-full p-2 bg-blue-300">
        {children}
      </div>
    </div>
  );
}
