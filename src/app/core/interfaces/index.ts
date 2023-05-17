import { from } from 'rxjs';

// APP
export { ListingBox, SubItem } from './app/listing-box.interface';
export { Breadcrumbs, TypeBreadcrumbs } from './app/breadcrumbs.interface';
export { User } from './app/user.interface';
export { Address } from './app/address.interface';
export { Know } from './app/know.interface';
export { Sex } from './app/sex.interface';
export { TypeDocument } from './app/type-document.interface';
export { Category, SubCategory, Tag } from './app/category.interface';
export { Product } from './app/product.interface';
export { TypeProductCard } from './app/product.interface';
export { Users } from './app/users.interface'

// APP > API
export { ResCategories } from './app/api/categories-response.interface';
export { ResUser } from './app/api/user-response.interface';


// Home
export { SupplierBrands } from './home/supplier-brands.interface';
export { HomeNavbar } from './home/home-navbar.interface';

// Auth
export { Credentials } from './auth/credentials.interface';
export {
  NewClient,
  ValidYourData,
  DeliveryAddress,
  FormRegister,
  FormYourData,
  FormDeliveryAddress,
} from './auth/register-user.interface';

// validators
export { validateError } from './validators/validations.interface';



