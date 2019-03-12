export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    
    
  },
  {
    title: true,
    name: 'Cash Office Menu'
  },
  {
    name: 'CASHOFFICE MASTER',
    url: '/base',
   
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
    
    children: [
      {
        name: 'Cash Office Activity',
        url: '/buttons/buttons',
      
      },
      {
        name: 'Cash Till Activity',
        url: '/buttons/dropdowns',
        
      },
      {
        name: 'Payment Reciepts',
        url: '/buttons/brand-buttons',
        
      },
      {
        name: 'Query Receipts',
        url: '/cashoffice-transaction/query-receipt',
      
      },
      {
        name: 'Cancel Payment Reciepts',
        url: '/buttons/brand-buttons',
        
      } ,
      {
        name: 'Approve Reciept Cancellation',
        url: '/buttons/brand-buttons',
       
      },
      {
        name: 'Print Bank Deposit Slip',
        url: '/buttons/brand-buttons',
       
      },
      {
        name: 'Reciept Posting',
        url: '/buttons/brand-buttons',
        
      },
      {
        name: 'Adjustment Voucher Reciept',
        url: '/buttons/brand-buttons',
       
      },
      {
        name: 'Secure Loan Enquiry',
        url: '/buttons/brand-buttons',
        
      }
      
    ]
  },
  // Cash Office CASH OFFICE REPORTS Module
  {
    name: 'CASHOFFICE REPORTS',
    url: '/cashoffice-reports',
    
    children: [
      {
      name: 'Cashier Assignment',
      url: '/cashoffice-reports/cashier-assignment'
      },
      {
        name: 'Collection-App Branch',
        url: '/cashoffice-reports/collection-branch'
      },
      {
        name: 'Collection-App Detail',
        url: '/cashoffice-reports/collection-app-detail'
      },
      {
        name: 'Collection-App Summary',
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
    
    children: [
      {
        name: 'Debit file Template',
        url: '/paypoint-master/dfta',
       
      },
      {
        name: 'File Designer',
        url: '/notifications/badges',
       
      },
      
    ]
  },

  {
    name: 'PAYPOINT TRANSACTION',
    url: '/notifications',
    
    children: [
      {
        name: 'Generate Debit File',
        url: '/notifications/alerts',
        
      },
    {
      name: 'Split/Merge Debit File',
      url: '/notifications/alerts',
      
    },
    {
      name: 'Split/Merge Search',
      url: '/notifications/alerts',
   
    },
    {
      name: 'Upload Credit File',
      url: '/notifications/alerts',
      
    }
  ]
  },

  // Cash Office ALLOCATION module
  {
    name: 'ALLOCATION',
    url: '/allocation',
    
    children: [
      {
        name: 'Electronic Allocation',
        url: '/allocation/electronic'
      },
      {
        name: 'Manual Allocation',
        url: '/allocation/manual-allocation',
        
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
        
      },
      {
        name: 'PayPoint MisAllocation',
        url: '/allocation/paypoint-misallocation',
        
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
        
      },
      {
        name: 'Partial MisAllocation Correction',
        url: '/allocation/partial-correction',
        
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

    children: [
      {
        name: 'Overs And Unders',
        url: '/paypoint-reports/oversandunders',
      
      },
  
    {
      name: 'Rejections',
      url: '/paypoint-reports/rejections',
    
    },
    {
      name: 'PayPoint Summary',
      url: '/paypoint-reports/paypoint-summary',
      
    },
    {
      name: 'UnAllocated Cash Reciepts',
      url: '/paypoint-reports/unallocated-cashReciepts',
      
    },
    { 
      name: 'Unmatched Credits',
      url: '/paypoint-reports/unmatchedCredit',
    
    },
    {
      name: 'Reciept Allocation Status',
      url: '/paypoint-reports/reciept-allocation-status',
      
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
   
    children: [
      {
      name: 'Password Management',
      url: '/user/pass-mgt',
     
      }
    ]
  },

  // Cash Office TRANSACTIONS Module
  {
    name: 'STANBIC HOST TO HOST',
    url: 'transactions',
  

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
