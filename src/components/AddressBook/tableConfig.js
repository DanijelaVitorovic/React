export const tableConfig = (editAction, deleteAction) => {
  
    return {
      columns: [
        {
          key: 'name',
          width: '5%',
          className: '',
          type: 'value',
        },
        {
          key: 'firstName',
          width: '5%',
          className: '',
          type: 'value',
        },
        {
          key: 'address',
          width: '5%',
          className: '',
          type: 'value',
        },
        {
          key: '',
          width: '5%',
          className: '',
          type: 'value',
        },
        {
          key: 'photo',
          width: '5%',
          className: '',
          type: 'value',
        },
        {
          key: 'homepage',
          width: '5%',
          className: '',
          type: 'value',
        },
        {
          key: 'birthday',
          width: '5%',
          className: '',
          type: 'value',
        },
        {
          key: 'edit',
          width: '',
          className: 'text-center',
          type: 'action',
          onClick: editAction,
          icon: 'fas fa-edit',
        },
        {
          key: 'delete',
          width: '',
          className: 'text-center',
          type: 'action',
          onClick: deleteAction,
          icon: 'fas fa-delete',
        },
    
      ],
    };
  };
  