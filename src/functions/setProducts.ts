import { productItem } from '../components/productItem';
import { Product } from '../types/Product';
import { removeInvalidChar } from '../utils/removeInvalidChar';

export function setProducts(products: Product[]) {
  const familiesSpot = document.querySelectorAll('.family');

  familiesSpot.forEach((element) => {
    products.forEach((product) => {
      if (element.id === `${removeInvalidChar(product.familia)}Items`) {
        element.innerHTML += productItem(product);
      }
    });
  });
}
