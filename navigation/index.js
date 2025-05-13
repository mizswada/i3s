export default [
  {
    header: "Administration & System Manager",
    description: "",
    child: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: "ic:outline-dashboard",
        child: [],
        "meta": {}
      }, 
      {
        title: "Inventory",
        icon: "octicon:ai-model-16",
        child: [
          {
            title: "Card",
            path: "/inventory/card",
          },
          {
            title: "Pos Terminal",
            path: "/inventory/pos-terminal",
            
          },
          {
            title: "Server",
            path: "/inventory/server",
            
          },
          {
            title: "RFID Reader",
            path: "/inventory/reader",
            
          },
          {
            title: "Access Point",
            path: "/inventory/access-point",
            
          },
          {
            title: "Network Switch",
            path: "/inventory/network-switch",
            
          },       
        ],
        "meta": {}
      },
      {
        title: "Card Assignment",
        icon: "ph:clipboard-text-fill",
        child: [
          {
            title: "Assign and Status",
            path: "/card-assignment/card-assign",            
          },
        ],
      },     
      {
        title: "School",
        icon: "majesticons:academic-cap",
        child: [
          {
            title: "List of School",
            path: "/school/school",
            
          },
          {
            title: "Assign Equipment",
            path: "/school/assign-equipment",
            
          },
        ],
        "meta": {}
      },
      {
        title: "User Management",
        path: "/usermanagement",
        icon: "fa6-solid:users",
        child: [
          {
            title: "Merchant",
            path: "/usermanagement/merchant",
            
          },
          {
            title: "Parent",
            path: "/usermanagement/parent",
            
          },
          {
            title: "Staff",
            path: "/usermanagement/staff",
            
          },
          {
            title: "Student",
            path: "/usermanagement/student",
            
          }
        ],
        "meta": {}
      },
      {
        title: "Cash Reward",
        path: "/reward-management",
        icon: "vaadin:diploma",
        child: []
      },
      {
        title: "System Broadcast",
        path: "/settings/system-broadcast",
        icon: "",
        child: []
      },
      {
        title: "Report",
        path: "/report",
        icon: "ph:activity-bold",
        child: [
          {
            title: "Asset Listing",
            path: "/report/merchants/asset-listing",
            
          },
          {
            title: "User Registration",
            path: "/report/user-register",
            
          },
          {
            title: "School Registration",
            path: "/report/school-register",
            
          },
          {
            title: "Merchant register",
            path: "/report/merchants/merchant-register",
            
          },
          {
            title: "Merchant Sales",
            path: "/report/merchants/merchant-sales",
            
          },          
          {
            title: "Merchant Claims",
            path: "/report/merchants/merchant-claims",
            
          },
        ],
        "meta": {}
      },      
      {
        title: "Settings",
        path: "/settings",
        icon: "mdi:cog",
        child: [
           //{
             //title: "User Management",
             //path: "/settings/user-management/user-list",
             //icon: "",
             //child: []
           //},
          //{
            //title: "Role Management",
            //path: "/settings/user-management/role-list",
            //icon: "",
            //child: []
          //},          
          {
            title: "User Management",
            path: "/settings/enrollment-setup",
            
          },
          {
            title: "Public Holiday",
            path: "/settings/public-holiday",
            
          },
          {
            title: "School Holiday",
            path: "/settings/school-holiday",
            
          },          
        ],
        "meta": {}
      },
      
    ]
  },
  {
    header: "Customer Service Assistant",
    description: "",
    child: [
      {
        title: "Dashboard",
        icon: "ic:outline-dashboard",
        path: "/dashboard",
        child: []
      }, 
      {
        title: "New Ticket",
        icon: "ci:menu-alt-03",
        path: "/customer-service/new-ticket",
        child: []
      },      
      {
        title: "Transaction",        
        icon: "vaadin:money",
        path: "/customer-service/transaction",
        child: [
          {
            title: "Wallet Transaction",
            path: "/customer-service/wallet-transaction",
          },  
          {
            title: "Purchase Card i3s",
            path: "/customer-service/purchase-card",
          }, 
        ]
      }, 
      {
        title: "Card Status",
        icon: "heroicons:credit-card",
        path: "/customer-service/card-status",
        child: []
      }, 
      {
        title: "Attendance",
        icon: "ic:twotone-people",
        path: "/customer-service/student-attendance",
        child: []
      },           
    ],
  },
  {
    header: "Finance Role",
    description: "specific for role finance",
    child: [
      {
        title: "Dashboard",
        icon: "ic:outline-dashboard",
        path: "/dashboard",
        child: []
      }, 
      {
        title: "Credit Setup",
        path: "/credit-management",
        icon: "vaadin:money",
        child: []
      },
      {
        title: "Equipment",
        icon: "ci:menu-alt-03",
        path: "/report/equipment/",
        child: [
          /*{
            title: "Status of device",
            //icon: "ci:menu-alt-03",
            path: "/equipment/equipment",
            child: []
          }, 
          {
            title: "Device by School",
            //icon: "ci:menu-alt-03",
            path: "/equipment/device-by-school",
            child: []
          },*/ 
        ]
      },    
      {
        title: "Merchants",
        icon: "ic:twotone-people",
        path: "/merchants/",
        child: [
          {
            title: "List of companies",
            path: "/report/merchants/list-companies",
          },
          {
            title: "Status",
            path: "/report/merchants/merchant-status",
          },
        ]
      }, 
      {
        title: "Financial",
        icon: "ci:menu-alt-03",
        path: "/financial",
        child: [
          {
            title: "Sales Report",
            path: "/report/financial/sales-report",
          },
          {
            title: "Claims Report",
            path: "/report/financial/claims-report",
          },  
        ]
      }, 
        
    ],    
    "meta": {
      "auth": {
        "role": [
          "Developer"
        ]
      }
    }
  }   
];