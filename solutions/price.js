function validatePrice(price) {
 if (price < 0) {
   throw new Error('Price must be greater than 0');
 }


 if (price > 1000) {
   throw new Error('Price must be less than 1000');
 }
}