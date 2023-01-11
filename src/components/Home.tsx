import React from "react";
import logo from '../assets/img/logo.png';
import OverviewIcon from '../assets/icons/overview.svg';
import ShoppingBagIcon from '../assets/icons/shopping-bag.svg';
import GraphIcon from '../assets/icons/graph.svg';
import CalendarIcon from '../assets/icons/calendar.svg';
import WalletIcon from '../assets/icons/wallet.svg';
import FileIcon from '../assets/icons/file.svg';
import ChatIcon from '../assets/icons/chat.svg';
import GroupChatIcon from '../assets/icons/group-chat.svg';
import SettingsIcon from '../assets/icons/settings.svg';
import LogoutIcon from '../assets/icons/logout.svg';
import FigmaIcon from '../assets/icons/figma.svg';
import SketchIcon from '../assets/icons/sketch.svg';
import AIIcon from '../assets/icons/ai.svg';
import PlusIcon from '../assets/icons/plus.svg';
import LayersIcon from "../assets/icons/settings.svg";
import DraftIcon from "../assets/icons/draft.svg";
import InvisibleIcon from "../assets/icons/invisible.svg";
import RejectedIcon from "../assets/icons/rejected.svg";
import MailIcon from "../assets/icons/mail.svg";
import FilterIcon from "../assets/icons/filter.svg";
import LandingPage from "../assets/img/organic-landing-page.png";
import trafficPage from "../assets/img/traffic-landing-page.png";
import dashboardPage from "../assets/img/pos-dashboard.png";
import galleryPage from "../assets/img/gallery-page.png";
import wfhLandingPage from "../assets/img/wfh-landing-page.png";

const Home = () => {
  interface Iside {
    name: string,
    icon: string
  }
  const sidebar = [
    { name: "Overview", icon: OverviewIcon },
    { name: "Products", icon: ShoppingBagIcon },
    { name: "Analytics", icon: GraphIcon },
    { name: "Schedule", icon: CalendarIcon },
    { name: "Payout", icon: WalletIcon },
    { name: "Statements", icon: FileIcon },
    { name: "Help", icon: ChatIcon },
    { name: "Community", icon: GroupChatIcon },
    { name: "Settings", icon: SettingsIcon },
    { name: "Logout", icon: LogoutIcon },

  ];
  const products = [
    {
      name: "Organic Landing page",
      category: "Web Design",
      imageUrl: LandingPage,
      price: 20,
      downloaded: 793,
      rating: 4.9,
      platformIcons: [FigmaIcon, SketchIcon],
      createdAt: "12/01/22",
    },
    {
      name: "Traffic Landing page",
      category: "Web Design",
      imageUrl: trafficPage,
      price: 24,
      downloaded: 34,
      rating: 4.4,
      platformIcons: [FigmaIcon, AIIcon],
      createdAt: "10/01/22",
    },
    {
      name: "POS Dashboard",
      category: "Web Design",
      imageUrl: dashboardPage,
      price: 16,
      downloaded: 896,
      rating: 4.6,
      platformIcons: [FigmaIcon, SketchIcon],
      createdAt: "01/01/22",
    },
    {
      name: "Gallery page",
      category: "Web Design",
      imageUrl: galleryPage,
      price: 38,
      downloaded: 194,
      rating: 4.6,
      platformIcons: [FigmaIcon, SketchIcon],
      createdAt: "04/01/22",
    },
    {
      name: "WFH Landing page",
      category: "Web Design",
      imageUrl: wfhLandingPage,
      price: 22,
      downloaded: 404,
      rating: 4.3,
      platformIcons: [FigmaIcon, SketchIcon],
      createdAt: "12/12/21",
    },
  ];

  const status = [
    { name: "Published", icon: LayersIcon },
    { name: "Draft", icon: DraftIcon },
    { name: "Hidden", icon: InvisibleIcon },
    { name: "Rejected", icon: RejectedIcon },
    { name: "Under Review", icon: MailIcon },
  ];
  return <div>
    <div className="w-full min-h-screen font-sans flex">
      <aside className="w-64 px-10 py-4 border-r border-gray-100">
        <img src={logo} alt="logo" className="w-28" />
        <ul className="flex flex-col gap-y-6 pt-20">
          <li>
            {
              sidebar.map(item => {
                return (
                  <a className="flex gap-x-4 items-center py-2 text-gray-500  hover:text-indigo-600 transition-colors group">
                    <span className="absolute w-1 h-8 left-0 bg-indigo-500 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out"></span>
                    <img src={item.icon} alt="logo" className="fill-current w-6 h-6 group" />
                    <span>{item.name}</span>
                  </a>
                )
              })
            }
          </li>
        </ul>
      </aside>
      <main className="flex-1">
        <div className="flex justify-between items-center py-7 px-10">
          <div>
            <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">Products</h1>
            <p className="text-sm font-medium text-gray-500">Let's grow  to your business! create your product and update here</p>
          </div>
          <button className="inline-flex gap-x-2 items-center py-2.5 px-6 text-white bg-indigo-600 rounded-xl hover:bg-indigo-700">
            <img src={PlusIcon} alt="" className="w-6 h-6 fill-white" />
            <span className="text-sm font-semibold tracking-wide">Create Item</span>
          </button>
        </div>
        <ul className="flex items-center px-4 gap-x-20 border-y border-gray-200">
          {status.map(status => {
            return (
              <li>
                <button className="flex items-center gap-x-2 py-5 px-6 text-gray-500 hover:text-indigo-600 relative group">
                  <img src={status.icon} alt="" className="w-6 h-6 fill-indigo-600" />
                  <span>{status.name}</span>
                  <span className="absolute left-3 rounded w-full h-0.5 bg-indigo-600 bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                </button>
              </li>
            )
          })}
        </ul>
        <table className="w-full">
          <thead>
            <tr  className="text-sm font-semibold text-gray-500 border-b border-gray-200">
              <td className="pl-10">
                <div className="flex items-center gap-x-4">
                  <input type="checkbox"className="w-6 h-6 text-indigo-600 rounded-md border border-gray-200"/>
                  <span>Product Name</span>
                </div>
              </td>
              <td className="px-4 py-4 text-center">Pricing</td>
              <td className="px-4 py-4 text-center">Downloaded</td>
              <td className="px-4 py-4 text-center">Rating</td>
              <td className="px-4 py-4 text-center">Platforms</td>
              <td className="py-4 pr-10 pl-4 text-center">
                <img src={FilterIcon} alt="" className="w-6 h-6" />
              </td>
            </tr>
          </thead>
          <tbody>
            {products.map(product => {
              return (
                <tr>
                  <td className="flex gap-x-4 items-center py-4 pl-10">
                    <input type="checkbox" className="w-6 h-6 text-indigo-600 rounded-md border border-gray-200"/>
                    <img src={product.imageUrl} alt="product image" className="w-64 aspect-[3/2] rounded-lg object-cover object-top border border-gray-200"/>
                    <div>
                      <a href="#" className="text-lg font-semibold text-gray-700">
                        {product.name}
                      </a>
                      <div className="font-medium text-gray-400">{product.category}</div>
                    </div>
                  </td>
                  <td className="font-medium text-center">{product.price}</td>
                  <td className="font-medium text-center">{product.downloaded}</td>
                  <td className="text-center">
                    <span className="font-medium">{product.rating}</span>
                    <span className="text-gray-500">/5</span>
                  </td>
                  <td>
                    <div>
                      <a>
                        
                     </a>
                    </div>
                  </td>
                  <td>{product.createdAt}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </main>
    </div>
  </div>;
};

export default Home;
