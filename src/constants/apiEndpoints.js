export const addressBookAddPath = () => '/ap/v1/addressbook/create';
export const addressBookUpdatePath = () => `ap/v1/addressbook/update`;
export const addressBookFindByIdPath = (id) =>
  `/ap/v1/addressbook/${id}`;
export const addressBookFindAllPath = () =>
  `ap/v1/addressbook`;
export const addressBookFindAllPageablePath = (pageNumber, pageSize) =>
  `/ap/v1/addressbook/findAll/${pageNumber}/${pageSize}`;
export const addressBookDeletePath = (id) =>
  `ap/v1/addressbook/${id}`;