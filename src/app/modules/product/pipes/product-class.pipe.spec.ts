import { ProductClassPipe } from './product-class.pipe';

describe('ProductClassPipe', () => {
  it('create an instance', () => {
    const pipe = new ProductClassPipe();
    expect(pipe).toBeTruthy();
  });
});
