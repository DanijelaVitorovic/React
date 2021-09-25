export const getModalInfo = (modals, name) =>
  modals?.find((modal) => modal.name === name) || {};
