import { getCurrentTime } from '@shared/utils/time';

export const test_export = 1;

const Sub1 = () => {
  return <div>Sub1 {getCurrentTime()}</div>;
};

export default Sub1;
