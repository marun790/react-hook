import { BUY_CAKE } from './bakaryType';

export const buyCake = () => {
  console.log('inside buy cake');
  return {
    type: BUY_CAKE
  };
};
