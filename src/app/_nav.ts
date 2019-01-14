export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    
  },
  /*{
    title: true,
    name: 'Theme'
  },
  {
    name: 'Colors',
    url: '/theme/colors',
    icon: 'icon-drop'
  },
  {
    name: 'Typography',
    url: '/theme/typography',
    icon: 'icon-pencil'
  },**/
  {
    title: true,
    name: 'Cash Office Menu'
  },
  {
    name: 'Master [Set-Up]',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Cashier',
        url: '/base/cashier',
        
      },
      {
        name: 'Payment Method',
        url: '/base/payment',
        
      },
      {
        name: 'Applications',
        url: '/base/collapses',
       
      },
      {
        name: 'Cash Office',
        url: '/base/forms',
        
      },
      {
        name: 'Assign Cashier',
        url: '/base/assigncashier',
        
      }/*,
      {
        name: 'Popovers',
        url: '/base/popovers',
        icon: 'icon-puzzle'
      },
      {
        name: 'Progress',
        url: '/base/progress',
        icon: 'icon-puzzle'
      },
      {
        name: 'Switches',
        url: '/base/switches',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tables',
        url: '/base/tables',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tabs',
        url: '/base/tabs',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tooltips',
        url: '/base/tooltips',
        icon: 'icon-puzzle'
      }**/
    ]
  },
  {
    name: 'Transaction',
    url: '/buttons',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Cash Office Activity',
        url: '/buttons/buttons',
        //icon: 'icon-cursor'
      },
      {
        name: 'Cash Till Activity',
        url: '/buttons/dropdowns',
        //icon: 'icon-cursor'
      },
      {
        name: 'Payment Reciepts',
        url: '/buttons/brand-buttons',
        //icon: 'icon-cursor'
      },
      {
        name: 'Query Reciepts',
        url: '/buttons/brand-buttons',
        //icon: 'icon-cursor'
      },
      {
        name: 'Cancel Payment Reciepts',
        url: '/buttons/brand-buttons',
        //icon: 'icon-cursor'
      } ,
      {
        name: 'Approve Reciept Cancellation',
        url: '/buttons/brand-buttons',
        //icon: 'icon-cursor'
      },
      {
        name: 'Print Bank Deposit Slip',
        url: '/buttons/brand-buttons',
        //icon: 'icon-cursor'
      },
      {
        name: 'Reciept Posting',
        url: '/buttons/brand-buttons',
        //icon: 'icon-cursor'
      },
      {
        name: 'Adjustment Voucher Reciept',
        url: '/buttons/brand-buttons',
        //icon: 'icon-cursor'
      },
      {
        name: 'Secure Loan Enquiry',
        url: '/buttons/brand-buttons',
        //icon: 'icon-cursor'
      }
      
    ]
  },
 /* {
    name: 'Charts',
    url: '/charts',
    icon: 'icon-pie-chart'
  },**/
  {
    name: 'Reports',
    url: '/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'Daily Reciept Listing',
        url: '/icons/coreui-icons',
        //icon: 'icon-star',
      /*   badge: {
          variant: 'success',
          text: 'NEW'
        } */
      },
      {
        name: 'Reprint Receipt',
        url: '/icons/flags',
       // icon: 'icon-star'
      },
      {
        name: 'Reprint Deposit Slip',
        url: '/icons/font-awesome',
        //icon: 'icon-star',
        /* badge: {
          variant: 'secondary',
          text: '4.7'
        } */
      },
      {
        name: 'Collection By Branch',
        url: '/icons/simple-line-icons',
        //icon: 'icon-star'
      },
      {
        name: 'Collection By Application[Summary]',
        url: '/icons/simple-line-icons',
        //icon: 'icon-star'
      },
      {
        name: 'Collection By Application[Detail]',
        url: '/icons/simple-line-icons',
        //icon: 'icon-star'
      }
      ,
      {
        name: 'Cashier Assignment',
        url: '/icons/simple-line-icons',
        //icon: 'icon-star'
      }
    ]
  },
  {
    name: 'PayPoint Master',
    url: '/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Debit file Template Assignment',
        url: '/notifications/alerts',
        //icon: 'icon-bell'
      },
      {
        name: 'File Designer',
        url: '/notifications/badges',
        //icon: 'icon-bell'
      },
      /* {
        name: 'Modals',
        url: '/notifications/modals',
        icon: 'icon-bell'
      } */
    ]
  },

  {
    name: 'PayPoint Transaction',
    url: '/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Generate Debit File',
        url: '/notifications/alerts',
        //icon: 'icon-bell'
      },
  /* {
    name: 'Widgets',
    url: '/widgets',
    icon: 'icon-calculator',
    badge: {
      variant: 'info',
      text: 'NEW'
    } */
    {
      name: 'Split/Merge Debit File',
      url: '/notifications/alerts',
      //icon: 'icon-bell'
    },
    {
      name: 'Split/Merge Search',
      url: '/notifications/alerts',
      //icon: 'icon-bell'
    },
    {
      name: 'Upload Credit File',
      url: '/notifications/alerts',
      //icon: 'icon-bell'
    }
  ]
  },

  // Cash Office ALLOCATION module
  {
    name: 'Allocation',
    url: '/allocation',
    icon: 'icon-pie-chart',
    children: [
      {
        name: 'Electronic Allocation',
        url: '/allocation/electronic',
        //icon: 'icon-bell'
      },
    {
      name: 'Manual Allocation',
      url: '/allocation/alerts',
      //icon: 'icon-bell'
    },
    {
      name: 'Direct Debit Processing',
      url: '/allocation/alerts',
      //icon: 'icon-bell'
    },
    {
      name: 'Bank Stop Order Processing',
      url: '/allocation/alerts',
      //icon: 'icon-bell'
    },
    {
      name: 'Bank Statement Posting',
      url: '/allocation/alerts',
      //icon: 'icon-bell'
    },
    {
      name: 'MisAllocation Correction',
      url: '/allocation/alerts',
      //icon: 'icon-bell'
    }
    ,
    {
      name: 'PayPoint MisAllocation',
      url: '/allocation/alerts',
      //icon: 'icon-bell'
    }
    ,
    {
      name: 'Bank Statement Adjustment Voucher',
      url: '/allocation/alerts',
      //icon: 'icon-bell'
    }
    ,
    {
      name: 'Manual Adjustment Voucher',
      url: '/allocation/alerts',
      //icon: 'icon-bell'
    },
    {
      name: 'PayPoint Collection History',
      url: '/allocation/alerts',
      //icon: 'icon-bell'
    },
    {
      name: 'Partial MisAllocation Correction',
      url: '/allocation/alerts',
      //icon: 'icon-bell'
    }
  ]
  },
  {
    name: 'PayPoint Reports',
    url: '/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Overs And Unders',
        url: '/notifications/alerts',
        //icon: 'icon-bell'
      },
  
    {
      name: 'Rejections',
      url: '/notifications/alerts',
      //icon: 'icon-bell'
    },
    {
      name: 'PayPoint Summary',
      url: '/notifications/alerts',
      //icon: 'icon-bell'
    },
    {
      name: 'UnAllocated Cash Reciepts',
      url: '/notifications/alerts',
      //icon: 'icon-bell'
    },
    {
      name: 'Unmatched Credits',
      url: '/notifications/alerts',
      //icon: 'icon-bell'
    },
    {
      name: 'Reciept Allocation Status',
      url: '/notifications/alerts',
      //icon: 'icon-bell'
    }
    ,
    {
      name: 'Unspecified Bank',
      url: '/notifications/alerts',
      //icon: 'icon-bell'
    }
    ,
    {
      name: 'Unspecified GSO-ESO',
      url: '/notifications/alerts',
      //icon: 'icon-bell'
    }
    ,
    {
      name: 'Bank Statement',
      url: '/notifications/alerts',
      //icon: 'icon-bell'
    },
    {
      name: 'Manual Adjustment Report',
      url: '/notifications/alerts',
      //icon: 'icon-bell'
    },
    {
      name: 'Bank Statement Allocation',
      url: '/notifications/alerts',
      //icon: 'icon-bell'
    }

    
  ]
  },

  // Cash Office ADMIN Module
  {
    name: 'Admin',
    url: '/admin',
    icon: 'icon-people', // or user 'layers'
    children: [
      {
      name: 'Assign Role',
      url: '/admin/assign-role'
    },
    {
      name: 'Group Master',
      url: '/admin/group-master'
    },
    {
      name: 'Page Access',
      url: '/admin/page-access'
    },
    {
      name: 'Reset Password',
      url: '/admin/reset-password'
    },
    {
      name: 'User Management',
      url: '/admin/user-management'
    }
  ]
  },

  // Cash Office CASH OFFICE REPORTS Module
  {
    name: 'CashOffice Reports',
    url: '/cashoffice-reports',
    icon: 'icon-pie-chart', // or user 'layers'
    children: [
      {
      name: 'Cashier Assignment',
      url: '/cashoffice-reports/cashier-assignment'
      },
      {
        name: 'Collection - Application Branch',
        url: '/cashoffice-reports/collection-branch'
      },
      {
        name: 'Collection - Application Detail',
        url: '/cashoffice-reports/collection-app-detail'
      },
      {
        name: 'Collection - Application Summary',
        url: '/cashoffice-reports/collection-app-summary'
      },
      {
        name: 'Daily Receipt Listing',
        url: '/cashoffice-reports/receipt-listing'
      },
      {
        name: 'Reprint Deposit Slip',
        url: '/cashoffice-reports/deposit-slip' 
      },
      {
        name: 'Reprint Receipt',
        url: '/cashoffice-reports/reprint-receipt' 
      }
    ]
  }, 

  // Cash Office USER Module
  {
    name: 'User',
    url: '/user',
    icon: 'icon-user',
    children: [
      {
      name: 'Password Management',
      url: '/user/pass-mgt',
      // icon: 'icon-lock-unlocked'
      }
    ]
  }

];
