import React from "react";
import {
  FaRegFileAlt,
  FaStream,
  FaStar,
  FaGopuram,
  FaPodcast,
  FaFileSignature,
  FaBell,
  FaShoppingBag,
  FaWallet,
  FaHome,
  FaUserEdit,
  FaAdversal,
  FaStore,
  FaUsers,
  FaCircle,
  FaCog,
  FaQuestionCircle,
  FaSlidersH,
  FaUser,
  FaShoppingCart,
  FaGift,
  FaProductHunt,
  FaList,
  FaCode,
  FaCodeBranch,
  FaCircleNotch,
} from "react-icons/fa";
import * as Icon from "react-feather";
import { BsImage } from "react-icons/bs";
import { MdOutlineFolderSpecial } from "react-icons/md";
import { GiWantedReward } from "react-icons/gi";
import { CiDiscount1 } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { AiFillBell } from "react-icons/ai";
import { FiBarChart2 } from "react-icons/fi";

// eslint-disable-next-line no-sparse-arrays
const navigationConfig = [
  {
    id: "dashboard",
    title: "Dashboard",
    type: "item",
    icon: <FaHome size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/dashboard",
  },
  {
    type: "groupHeader",
    groupTitle: "Account",
    title: "Accounts",
  },
  {
    id: "account",
    title: "Accounts",
    type: "collapse",
    icon: <FaProductHunt size={15} />,
    children: [
      {
        id: "createAccount",
        title: "Create Account",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/Trupee/account/CreateAccount",
      },
      {
        id: "producttype",
        title: "User List",
        type: "item",
        icon: <FaList size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/house/producttype",
      },
      // {
      //   id: "clientAccounts",
      //   title: "Client Account",
      //   type: "item",
      //   icon: <FaCircle size={15} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/freshlist/house/producttype",
      // },
      // {
      //   id: "accountantaccounts",
      //   title: "Accountant Account",
      //   type: "item",
      //   icon: <FaCircle size={15} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/freshlist/house/AddProduct",
      // },
      {
        id: "createrole",
        title: "Create Role",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/account/addRoleNew",
      },
      {
        id: "List",
        title: "Role List",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/Trupee/account/RoleList",
      },
    ],
  },

  {
    type: "groupHeader",
    groupTitle: "PRODUCT MANAGEMENT",
    title: "Product",
  },
  {
    id: "product_attribute",
    title: "Product",
    type: "collapse",
    icon: <FaProductHunt size={15} />,
    children: [
      {
        id: "productDashboard",
        title: "Product List",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/house/ProductDashboard",
      },

      {
        id: "addproduct",
        title: "Add Product",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/house/AddProduct",
      },
      {
        id: "type",
        title: "Type",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/house/Typelist",
        // navLink: "/app/freshlist/house/AddRateMaster",
      },
      {
        id: "assigntoclient",
        title: "Assign To Client",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/house/assigntoclient",
      },
      {
        id: "assignedtoclient",
        title: "Assigned List",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/house/Assignedtoclient",
      },
      {
        id: "ratemaster",
        title: "Rate Master",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/house/ratemaster",
      },
      {
        id: "inventory",
        title: "Inventory",
        type: "item",
        icon: <FaProductHunt size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/house/inventory",
      },
      // {
      //   id: "servicemaster",
      //   title: "Service Master",
      //   type: "item",
      //   icon: <FaCircle size={8} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/freshlist/house/serviceMaster",
      // },
      // {
      //   id: "Attribute",
      //   title: "Attribute",
      //   type: "item",
      //   icon: <FaCircle size={8} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/freshlist/options/AttributeList",
      // },
      // {
      //   id: "productlist",
      //   title: "ProductList",
      //   type: "item",
      //   icon: <FaCircle size={8} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/freshlist/house/houseProductList",
      // },
    ],
  },
  {
    type: "groupHeader",
    groupTitle: "Brand Management",
    title: "Brand",
  },
  {
    id: "brand",
    title: "Brand",
    type: "collapse",
    icon: <FaList size={15} />,
    children: [
      {
        id: "brandlist",
        title: "Brand List",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/brand/BrandList",
      },
      {
        id: "Category List",
        title: "Category List",
        type: "item",
        icon: <FaList size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/category/categoryList",
      },
    ],
  },
  {
    type: "groupHeader",
    groupTitle: "Transaction",
    title: "Transaction",
  },
  {
    id: "order",
    title: "Transaction",
    type: "collapse",
    icon: <FaShoppingCart size={15} />,
    children: [
      {
        id: "all",
        title: "Place Order",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/order/all",
      },
      {
        id: "pending ",
        title: "Order Raise List",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/order/pending",
      },
      {
        id: "confirmed",
        title: "Order Received List",
        type: "item",
        icon: <FaCircle size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/order/confirmed",
      },
      // {
      //   id: "inprocess ",
      //   title: "In Process (17)",
      //   type: "item",
      //   icon: <FaCircle size={8} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/freshlist/order/inprocess",
      // },
      // {
      //   id: "outfordelivery",
      //   title: "Out for delivery (09)",
      //   type: "item",
      //   icon: <FaCircle size={8} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/freshlist/order/outfordelivery",
      // },
      {
        id: "delivery",
        title: "Completed Order List",
        type: "item",
        icon: <FaList size={8} />,
        permissions: ["admin", "editor"],
        navLink: "/app/freshlist/order/delivered",
      },
      // {
      //   id: "return",
      //   title: "Returned (07)",
      //   type: "item",
      //   icon: <FaCircle size={8} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/freshlist/order/returned",
      // },
      // {
      //   id: "failedtodeliver",
      //   title: "Failed to Deliver",
      //   type: "item",
      //   icon: <FaCircle size={8} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/freshlist/order/failedtodeliver",
      // },
      // {
      //   id: "canceled",
      //   title: "Canceled (00)",
      //   type: "item",
      //   icon: <FaCircle size={8} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/freshlist/order/canceled",
      // },
    ],
  },
  {
    type: "groupHeader",
    groupTitle: "BILLINGS",
    title: "BILLINGS",
  },

  {
    id: "Purchase Order",
    title: "Purchase Order",
    type: "item",
    icon: <FaList size={8} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/order/purchasedorder",
  },
  {
    id: "Bills",
    title: "Bills",
    type: "item",
    icon: <FaCircle size={8} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/subcategory/subCategoryList",
  },
  {
    id: "invoice Generator",
    title: "invoice Generator",
    type: "item",
    icon: <FaCircle size={8} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/subcategory/subCategoryList",
  },
  {
    id: "invoice Re-Generator",
    title: "invoice Re-Generator",
    type: "item",
    icon: <FaCircle size={8} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/subcategory/subCategoryList",
  },
  {
    id: "invoices",
    title: "invoices",
    type: "item",
    icon: <FaCircle size={8} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/subcategory/subCategoryList",
  },
  {
    id: "Payment Status",
    title: "Payment Status",
    type: "item",
    icon: <FaCircle size={8} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/subcategory/subCategoryList",
  },
  {
    id: "Payment completed",
    title: "Payment completed",
    type: "item",
    icon: <FaCircle size={8} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/subcategory/subCategoryList",
  },
  {
    type: "groupHeader",
    groupTitle: "Budget",
    title: "Budget",
  },
  {
    id: "budgetlist",
    title: "Budget List",
    type: "item",
    icon: <FaList size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/cart/suggestedProducts",
  },
  {
    id: "Budget Assignment",
    title: "Budget Assignment",
    type: "item",
    icon: <FaList size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/cart/suggestedProducts",
  },
  {
    type: "groupHeader",
    groupTitle: "Reports",
    title: "Reports",
  },
  {
    id: "Date Wise",
    title: "Date Wise",
    type: "item",
    icon: <BsImage size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/banner/BannerList",
  },
  {
    id: "Client Wise",
    title: "Client Wise",
    type: "item",
    icon: <FaCircleNotch size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/banner/BannerList",
  },
  {
    id: "Branch Wise",
    title: "Branch Wise",
    type: "item",
    icon: <FaCodeBranch size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/banner/BannerList",
  },
  {
    id: "Product Wise",
    title: "Product Wise",
    type: "item",
    icon: <FaProductHunt size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/banner/BannerList",
  },
  {
    type: "groupHeader",
    groupTitle: "Unique Code",
    title: "Unique Code",
  },
  {
    id: "Unique Code",
    title: "Unique Code",
    type: "item",
    icon: <FaCode size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/banner/BannerList",
  },
  {
    type: "groupHeader",
    groupTitle: "Logs",
    title: "Logs",
  },
  {
    id: "Logs",
    title: "Logs",
    type: "item",
    icon: <FaList size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/banner/BannerList",
  },
  // {
  //   id: "refund",
  //   title: "Refund Requests",
  //   type: "collapse",
  //   icon: <FaRegFileAlt size={15} />,
  //   children: [
  //     {
  //       id: "pending",
  //       title: "Pending",
  //       type: "item",
  //       icon: <FaCircle size={8} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/freshlist/refundrequest/pendingRequest",
  //     },
  //     {
  //       id: "approv",
  //       title: "Approved",
  //       type: "item",
  //       icon: <FaCircle size={8} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/freshlist/refundrequest/approvedRequest",
  //     },

  //     {
  //       id: "comp",
  //       title: "Completed",
  //       type: "item",
  //       icon: <FaCircle size={8} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/freshlist/refundrequest/completedRequest",
  //     },
  //     {
  //       id: "reject",
  //       title: "Rejected",
  //       type: "item",
  //       icon: <FaCircle size={8} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/freshlist/refundrequest/rejectedRequest",
  //     },
  //   ],
  // },

  // {
  //   id: "batch",
  //   title: "Batch",
  //   type: "collapse",
  //   icon: <FaStar size={15} />,
  //   children: [
  //     {
  //       id: "batchList",
  //       title: "Batch List",
  //       type: "item",
  //       icon: <FaCircle size={8} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/freshlist/batch/batchList",
  //     },
  //   ],
  // },
  // {
  //   type: "groupHeader",
  //   groupTitle: "CUSTOMER MANAGEMENT",
  // },
  // {
  //   id: "customer",
  //   title: "Customers  ",
  //   type: "collapse",
  //   icon: <FaWallet size={15} />,
  //   children: [
  //     {
  //       id: "customergroup",
  //       title: "Customer Group",
  //       type: "item",
  //       icon: <FaCircle size={8} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/freshlist/customer/customergroup",
  //     },
  //     {
  //       id: "list",
  //       title: "Customer List",
  //       type: "item",
  //       icon: <FaCircle size={8} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/freshlist/customer/customerList",
  //     },
  //   ],
  // },

  // {
  //   id: "holiday",
  //   title: "Holiday Management",
  //   type: "item",
  //   icon: <FaUser size={15} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/freshlist/cart/suggestedProducts",
  // },
  // {
  //   id: "weekdays",
  //   title: "Weekdays",
  //   type: "item",
  //   icon: <FaUser size={15} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/freshlist/cart/suggestedProducts",
  // },
  // {
  //   id: "Export&Import",
  //   title: "BULK Export And Import",
  //   type: "item",
  //   icon: <FaUser size={15} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/freshlist/cart/suggestedProducts",
  // },

  // {
  //   id: "wallet",
  //   title: "Wallet",
  //   type: "collapse",
  //   icon: <FaCircle size={8} />,
  //   children: [
  //     {
  //       id: "credit",
  //       title: "Credit/Debit",
  //       type: "item",
  //       icon: <FaCircle size={8} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/freshlist/wallet/walletType",
  //     },
  //   ],
  // },
  // {
  //   type: "groupHeader",
  //   groupTitle: "DRIVER MANAGEMENT",
  // },
  // {
  //   id: "driver",
  //   title: "Driver",
  //   type: "collapse",
  //   icon: <FaUser size={15} />,
  //   children: [
  //     {
  //       id: "addriver",
  //       title: "Add Driver",
  //       type: "item",
  //       icon: <FaCircle size={8} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/freshlist/driver/addDriver",
  //     },
  //     {
  //       id: "driverList",
  //       title: "Driver List",
  //       type: "item",
  //       icon: <FaCircle size={8} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/freshlist/driver/driverList",
  //     },
  //   ],
  // },

  // {
  //   type: "groupHeader",
  //   groupTitle: "SUBSCRIPTIONS MANAGEMENT",
  // },
  // {
  //   id: "subscriptions",
  //   title: "Subscriptions",
  //   type: "item",
  //   icon: <FaUser size={15} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/freshlist/subscriber/subscriberList",
  // },
  // {
  //   id: "vendor",
  //   title: "Vendors",
  //   type: "collapse",
  //   icon: <FaUsers size={15} />,
  //   children: [
  //     {
  //       id: "vendor",
  //       title: "Add Vendors  ",
  //       type: "item",
  //       icon: <FaCircle size={8} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/freshlist/vendor/addVendor",
  //     },
  //     {
  //       id: "vendor_list",
  //       title: "Vendors List",
  //       type: "item",
  //       icon: <FaCircle size={8} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/freshlist/vendor/vendorList",
  //     },
  //     {
  //       id: "withdraw",
  //       title: "Withdraws",
  //       type: "item",
  //       icon: <FaCircle size={8} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/freshlist/vendor/withDraws",
  //     },
  //   ],
  // },
  // {
  //   type: "groupHeader",
  //   groupTitle: "Hub MANAGEMENT",
  // },
  // {
  //   id: "hub",
  //   title: "Hub",
  //   type: "collapse",
  //   icon: <FaShoppingCart size={15} />,
  //   children: [
  //     // {
  //     //   id: "addhub",
  //     //   title: "AddHub",
  //     //   type: "item",
  //     //   icon: <FaCircle size={8} />,
  //     //   permissions: ["admin", "editor"],
  //     //   navLink: "/app/freshlist/hubs/addhub",
  //     // },
  //     // {
  //     //   id: "hubList",
  //     //   title: "HubList",
  //     //   type: "item",
  //     //   icon: <FaCircle size={8} />,
  //     //   permissions: ["admin", "editor"],
  //     //   navLink: "/app/freshlist/hubs/hubList",
  //     // },
  //   ],
  // },
  // {
  //   id: "language",
  //   title: "Language",
  //   type: "item",
  //   icon: <FaCircle size={8} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/freshlist/language/languageList",
  // },
  // {
  //   type: "groupHeader",
  //   groupTitle: "Web Banner Management",
  // },
  // {
  //   id: "homepage",
  //   title: "Home Page",
  //   type: "item",
  //   icon: <BsImage size={15} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/freshlist/banner/BannerList",
  // },
  // {
  //   type: "groupHeader",
  //   groupTitle: "Mobile App Management",
  // },
  // {
  //   id: "bannerSection",
  //   title: "Banner with section Colours",
  //   type: "item",
  //   icon: <GiWantedReward size={18} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/freshlist/mobile/bannerSection",
  // },
  // {
  //   id: "notification",
  //   title: "Notification",
  //   type: "collapse",
  //   icon: <GiWantedReward size={18} />,
  //   children: [
  //     {
  //       id: "all",
  //       title: "All",
  //       type: "item",
  //       icon: <FaCircle size={8} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/freshlist/mobile/allNotify",
  //     },
  //     {
  //       id: "customerGroupWise",
  //       title: "Customer Group Wise",
  //       type: "item",
  //       icon: <FaCircle size={8} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/freshlist/mobile/customerGroupWise",
  //     },
  //   ],
  // },
  // {
  //   type: "groupHeader",
  //   groupTitle: " Banner Management",
  // },
  // {
  //   id: "Banner",
  //   title: "Banner",
  //   type: "item",
  //   icon: <BsImage size={15} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/freshlist/banner/BannerList",
  // },
  // {
  //   type: "groupHeader",
  //   groupTitle: "PROMOTION MANAGEMENT",
  // },

  // {
  //   id: "special",
  //   title: "Special",
  //   type: "item",
  //   icon: <MdOutlineFolderSpecial size={15} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/freshlist/special/SpecialList",
  // },
  // {
  //   id: "discount",
  //   title: "Discount",
  //   type: "item",
  //   icon: <CiDiscount1 size={18} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/freshlist/discount/DiscountList",
  // },
  // {
  //   id: "reward_point",
  //   title: "Reward Point",
  //   type: "item",
  //   icon: <GiWantedReward size={18} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/freshlist/points/points",
  // },

  // {
  //   id: "offer&deal",
  //   title: "Offers & Deals",
  //   type: "collapse",
  //   icon: <FaUsers size={15} />,
  //   children: [
  //     {
  //       id: "couponcode",
  //       title: "Coupon Code",
  //       type: "item",
  //       icon: <FaCircle size={8} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/freshlist/coupon/couponList",
  //     },
  //     {
  //       id: "flashSale",
  //       title: "Referal Code",
  //       type: "item",
  //       icon: <FaCircle size={8} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/freshlist/flashSale/flashSale",
  //     },
  //     {
  //       id: "dealOfDay",
  //       title: "Hub Delivery",
  //       type: "item",
  //       icon: <FaCircle size={8} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/freshlist/dealOfDay/DealOfDay",
  //     },
  //     {
  //       id: "featuredeal",
  //       title: " Pin Code",
  //       type: "item",
  //       icon: <FaCircle size={8} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/freshlist/featuredeal/featuredeal",
  //     },
  //     {
  //       id: "notification",
  //       title: "Delivery Cities",
  //       type: "item",
  //       icon: <GiWantedReward size={8} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/freshlist/notif/notification",
  //     },
  //   ],
  // },

  // {
  //   type: "groupHeader",
  //   groupTitle: "ZONE MANAGEMENT",
  // },
  // {
  //   id: "deliveryCharges",
  //   title: "DeliveryCharges",
  //   type: "item",
  //   icon: <FaStar size={15} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/freshlist/zone/AddDeliveryCharges",
  // },

  // {
  //   id: "addzone",
  //   title: "Add Zone",
  //   type: "item",
  //   icon: <TbTruckDelivery size={15} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/freshlist/zone/addzone",
  // },
  // {
  //   id: "zoneslist",
  //   title: "ZonesList",
  //   type: "item",
  //   icon: <TbTruckDelivery size={15} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/freshlist/zone/zoneslist",
  // },

  // {
  //   id: "taxreport",
  //   title: "Tax Report  ",
  //   type: "item",
  //   icon: <FiBarChart2 size={15} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/freshlist/report/taxReport",
  // },
  // {
  //   type: "groupHeader",
  //   groupTitle: "Report MANAGEMENT",
  // },

  // {
  //   id: "sales",
  //   title: "Sales",
  //   type: "collapse",
  //   icon: <FaWallet size={15} />,
  //   children: [
  //     {
  //       id: "totalSales",
  //       title: "Total Sale",
  //       type: "item",
  //       icon: <FaCircle size={8} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/freshlist/sales/totalSales",
  //     },
  //     // {
  //     //   id: "hubSales",
  //     //   title: "Hub Sale",
  //     //   type: "item",
  //     //   icon: <FaCircle size={8} />,
  //     //   permissions: ["admin", "editor"],
  //     //   navLink: "/app/freshlist/sales/hubSales",
  //     // },
  //   ],
  // },

  // {
  //   type: "groupHeader",
  //   groupTitle: "Pages & MEDIA MANAGEMENT",
  // },
  // {
  //   id: "gallery",
  //   title: "Gallery",
  //   type: "item",
  //   icon: <TbTruckDelivery size={15} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/freshlist/gallery/gallery",
  // },
  // {
  //   id: "term & condition",
  //   title: "Term & Condition",
  //   type: "item",
  //   icon: <FaFileSignature size={15} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/freshlist/termsAndCondition/TAndCList",
  // },
  // {
  //   type: "groupHeader",
  //   groupTitle: "Option MANAGEMENT",
  // },
  // {
  //   id: "attributelist",
  //   title: "AttributeList",
  //   type: "item",
  //   icon: <FaCircle size={15} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/freshlist/options/AttributeList",
  // },
  // {
  //   type: "groupHeader",
  //   groupTitle: "USER MANAGEMENT",
  // },
  // {
  //   id: "employee",
  //   title: "Employee",
  //   type: "collapse",
  //   icon: <FaUser size={15} />,
  //   children: [
  // {
  //   id: "setup",
  //   title: "Manage Role",
  //   type: "item",
  //   icon: <FaCircle size={8} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/freshlist/user/manageRole",
  //   // navLink: "/app/freshlist/user/customsetuprole",
  // },
  // {
  //   id: "manageUsers",
  //   title: "Manage Users",
  //   type: "item",
  //   icon: <FaCircle size={8} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/freshlist/user/userlist",
  //   // navLink: "/app/freshlist/user/employeeslist",
  // },
  //   ],
  // },

  // {
  //   type: "groupHeader",
  //   groupTitle: "Freebies MANAGEMENT",
  // },
  // {
  //   id: "manageFreebies",
  //   title: "Manage Freebies",
  //   type: "item",
  //   icon: <FaUser size={15} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/freshlist/freebies/freebies",
  // },
  // {
  //   type: "groupHeader",
  //   groupTitle: "Cart MANAGEMENT",
  // },
  // {
  //   id: "suggestedProducts",
  //   title: "Suggested Products",
  //   type: "item",
  //   icon: <FaUser size={15} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/freshlist/cart/suggestedProducts",
  // },
  {
    type: "groupHeader",
    groupTitle: "SUPPORT MANAGEMENT",
  },

  // {
  //   id: "privacypolicy",
  //   title: "Privacy Policy",
  //   type: "item",
  //   icon: <FaCog size={15} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/freshlist/privacyPolicy/privacyPolicy",
  // },
  {
    id: "helpAndSupport",
    title: "Help And Support",
    type: "item",
    icon: <FaQuestionCircle size={15} />,
    permissions: ["admin", "editor"],
    navLink: "/app/freshlist/helpAndSupport/helpAndSupport",
  },
  {
    id: "logout",
    title: "Logout",
    type: "item",
    icon: <Icon.ArrowRight size={15} />,
    permissions: ["admin", "editor"],
  },

  // {
  //   id: "subscription",
  //   title: "Subscriptions",
  //   type: "item",
  //   // icon: <Icon.Youtube size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/marketing/subscription/subscriptionList",
  // },
  // {
  //   id: "invoiceSetting",
  //   title: "Invoice Setting ",
  //   type: "item",
  //   icon: < FaCircle size={12}/>,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/order/invoiceSetting",
  // },
  // {
  //   id: "invoiceDesign",
  //   title: "Invoice Design ",
  //   type: "item",
  //   icon: < FaCircle size={12}/>,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/order/invoiceDesign",
  // },
  // {
  //   id: "bank",
  //   title: "Bank",
  //   type: "collapse",
  //    icon: < FaHouseDamage size={20} />,
  //    children: [
  //     {
  //       id: "bank",
  //       title: "bank Details",
  //       type: "item",
  //       icon: < FaCircle size={12}/>,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/bank/bank",
  //     },
  //   ]
  // },
  //     {
  //       id: "pushnotification",
  //       title: "Push Notification",
  //       type: "item",
  //       icon: < FaCircle size={12}/>,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/marketing/pushnotification/addPushnotification",
  //     },

  //      {
  //        id: "variantList",
  //        title: "Variant",
  //        type: "item",
  //        icon: <Icon.Circle size={12} />,
  //        permissions: ["admin", "editor"],
  //        navLink: "/app/productManagement/variant/variantList",
  //      },
  //      {
  //        id: "unitsList",
  //        title: "Units",
  //        type: "item",
  //        icon: <Icon.Circle size={12} />,
  //        permissions: ["admin", "editor"],
  //        navLink: "/app/productManagement/units/unitsList",
  //     },
];
export default navigationConfig;
