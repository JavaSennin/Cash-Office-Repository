export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    
  },
  {
    title: true,
    name: 'Cash Office Menu'
  },
  {
    name: 'CASHOFFICE MASTER',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Setup Cashier',
        url: '/base/cashier',
        
      },
      {
        name: 'Setup Payment Method',
        url: '/base/payment',
        
      },
      {
        name: 'Setup Applications',
        url: '/base/collapses',
       
      },
      {
        name: 'Setup Cash Office',
        url: '/base/forms',
        
      },
      {
        name: 'Assign Cashier',
        url: '/base/assigncashier',
        
      }
    ]
  },
  {
    name: 'CASHOFFICE TRANSACTION',
    url: '/cashoffice-transaction',
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
        name: 'Query Receipts',
        url: '/cashoffice-transaction/query-receipt',
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
  // Cash Office CASH OFFICE REPORTS Module
  {
    name: 'CASHOFFICE REPORTS',
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

  {
    name: 'PAYPOINT MASTER',
    url: '/paypoint-master',
    icon: 'icon-bell',
    children: [
      {
        name: 'Debit file Template',
        url: '/paypoint-master/dfta',
        //icon: 'icon-bell'
      },
      {
        name: 'File Designer',
        url: '/notifications/badges',
        //icon: 'icon-bell'
      },
      
    ]
  },

  {
    name: 'PAYPOINT TRANSACTION',
    url: '/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Generate Debit File',
        url: '/notifications/alerts',
        //icon: 'icon-bell'
      },
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
    name: 'ALLOCATION',
    url: '/allocation',
    icon: 'icon-pie-chart',
    children: [
      {
        name: 'Electronic Allocation',
        url: '/allocation/electronic'
      },
      {
        name: 'Manual Allocation',
        url: '/allocation/manual-allocation',
        //icon: 'icon-bell'
      },
      {
        name: 'Direct Debit Processing',
        url: '/allocation/direct-debit'
      },
      {
        name: 'Bank Stop Order Processing',
        url: '/allocation/bank-processing'
      },
      {
        name: 'MisAllocation Correction',
        url: '/allocation/correction',
        //icon: 'icon-bell'
      },
      {
        name: 'PayPoint MisAllocation',
        url: '/allocation/paypoint-misallocation',
        //icon: 'icon-bell'
      },
      {
        name: 'Bank Statement Adjustment Voucher',
        url: '/allocation/bank-adjustment'
      },
      {
        name: 'Manual Adjustment Voucher',
        url: '/allocation/manual-adjustment'
      },
      {
        name: 'PayPoint Collection History',
        url: '/allocation/paypoint-history',
        //icon: 'icon-bell'
      },
      {
        name: 'Partial MisAllocation Correction',
        url: '/allocation/partial-correction',
        //icon: 'icon-bell'
      },
      {
        name: 'Bank Statement Posting',
        url: '/allocation/bank-posting'
      }
       
     
    
   
      
    ]
  },

  // Cash Office PAYPOINTS REPORTS module
  {
    name: 'PAYPOINT REPORTS',
    url: '/paypoint-reports',
    icon: 'icon-bell',
    children: [
      {
        name: 'Overs And Unders',
        url: '/paypoint-reports/oversandunders',
        //icon: 'icon-bell'
      },
  
    {
      name: 'Rejections',
      url: '/paypoint-reports/rejections',
      //icon: 'icon-bell'
    },
    {
      name: 'PayPoint Summary',
      url: '/paypoint-reports/paypoint-summary',
      //icon: 'icon-bell'
    },
    {
      name: 'UnAllocated Cash Reciepts',
      url: '/paypoint-reports/unallocated-cashReciepts',
      //icon: 'icon-bell'
    },
    { 
      name: 'Unmatched Credits',
      url: '/paypoint-reports/unmatchedCredit',
      //icon: 'icon-bell'
    },
    {
      name: 'Reciept Allocation Status',
      url: '/paypoint-reports/reciept-allocation-status',
      //icon: 'icon-bell'
    }
    ,
    {
      name: 'Unspecified Bank',
      url: '/paypoint-reports/unspecified-bank',
    }
    ,
    {
      name: 'Unspecified GSO-ESO',
      url: '/paypoint-reports/unspecified-gsoeso',
    },
    {
      name: 'Bank Statement',
      url: '/paypoint-reports/bank-statement',
    },
    {
      name: 'Manual Adjustment Report',
      url: '/paypoint-reports/manual-adjustment'
    },
    {
      name: 'Bank Statement Allocation',
      url: '/paypoint-reports/statement-allocation'
    }
    
  ]
  },

  // Cash Office ADMIN Module
  {
    name: 'ADMIN',
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

  
  // Cash Office USER Module
  {
    name: 'USER',
    url: '/user',
    icon: 'icon-user',
    children: [
      {
      name: 'Password Management',
      url: '/user/pass-mgt',
      // icon: 'icon-lock-unlocked'
      }
    ]
  },

  // Cash Office TRANSACTIONS Module
  {
    name: 'STANBIC HOST TO HOST',
    url: 'transactions',
    icon: 'icon-calculator',

    children: [
      {
        name: 'Cashier Assignment',
        url: 'transactions/cashier-assignment'
      },
      {
        name: 'Query Receipt',
        url: '/transactions/query-receipt'
      }
    ]
  }

];
