export const adminsPageGrid = [
  { colSize: "col-span-2", label: "ID", value: "id" },
  { colSize: "col-span-3", label: "Name", value: "name" },
  { colSize: "col-span-3", label: "Email", value: "email" },
  { colSize: "col-span-2", label: "Phone", value: "phone" },
  {
    colSize: "col-span-2",
    label: "Created At",
    value: "created_at",
    isDate: true,
  },
];

export const usersPagesGrid = [
  { colSize: "col-span-3", label: "ID", value: "id" },
  { colSize: "col-span-2", label: "Name", value: "name" },
  { colSize: "col-span-3", label: "Email", value: "email" },
  { colSize: "col-span-2", label: "Phone", value: "phone" },
  {
    colSize: "col-span-2",
    label: "Created At",
    value: "created_at",
    isDate: true,
  },
];

export const categoriesPageGrid = [
  { colSize: "col-span-3", label: "ID", value: "id" },
  { colSize: "col-span-5", label: "Title", value: "name" },
  { colSize: "col-span-4", label: "Complaints", value: "number" },
];

export const complaintsPageGrid = [
  { colSize: "col-span-2", label: "ID", value: "id" },
  { colSize: "col-span-3", label: "Title", value: "title" },
  { colSize: "col-span-2", label: "Category", value: "categoryName" },
  { colSize: "col-span-2", label: "User", value: "userName" },
  {
    colSize: "col-span-2",
    label: "Created At",
    value: "date_created",
    isDate: true,
  },
  { colSize: "col-span-1", label: "Status", value: "status", isStatus: true },
];
