import { productItem } from '../components/productItem';
import { Product } from '../types/Product';

export function setProducts(products: Product[]) {
  const familiesSpot = <NodeListOf<HTMLElement>>document.querySelectorAll('.family');

  familiesSpot.forEach((element) => {
    console.log(element.title);
    products.forEach((product) => {
      if (element.title === product.familia) {
        element.innerHTML += productItem(product);
      }
    });
  });
}
