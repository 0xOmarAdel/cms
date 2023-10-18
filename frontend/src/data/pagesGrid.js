export const adminsPageGrid = [
  { colSize: 2, label: "ID", value: "id" },
  { colSize: 3, label: "Name", value: "name" },
  { colSize: 3, label: "Email", value: "email" },
  { colSize: 2, label: "Phone", value: "phone" },
  { colSize: 2, label: "Created At", value: "created_at", isDate: true },
];

export const usersPagesGrid = [
  { colSize: 3, label: "ID", value: "id" },
  { colSize: 2, label: "Name", value: "name" },
  { colSize: 3, label: "Email", value: "email" },
  { colSize: 2, label: "Phone", value: "phone" },
  { colSize: 2, label: "Created At", value: "created_at", isDate: true },
];

export const categoriesPageGrid = [
  { colSize: 3, label: "ID", value: "id" },
  { colSize: 5, label: "Title", value: "name" },
  { colSize: 4, label: "Complaints", value: "number" },
];

export const complaintsPageGrid = [
  { colSize: 2, label: "ID", value: "id" },
  { colSize: 3, label: "Title", value: "title" },
  { colSize: 2, label: "Category", value: "categoryName" },
  { colSize: 2, label: "User", value: "userName" },
  { colSize: 2, label: "Created At", value: "date_created", isDate: true },
  { colSize: 1, label: "Status", value: "status", isStatus: true },
];
