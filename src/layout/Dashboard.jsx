
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag} from 'react-icons/hi';

function Dashboard() {
  return (
    <Sidebar className='h-screen'>
      <Sidebar.Items className='pt-4'>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
          Order History
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox}>
            Categories
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
          Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
          Logout
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default Dashboard;
