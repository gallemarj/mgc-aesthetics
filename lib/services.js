import content from "../content/services.json";

export const featuredServices = content.featuredServices;
export const serviceCategories = content.serviceCategories;

export const allServices = [
  ...featuredServices.map((s) => ({
    name: s.title,
    price: s.price,
    category: "Signature Packages",
  })),
  ...serviceCategories.flatMap((cat) =>
    cat.items.map((item) => ({
      name: item.name,
      price: item.price,
      category: cat.name,
    }))
  ),
];
