import { formatDate, FORMAT } from 'shared/helpers/dates';
import cfg from '.';


describe('config.js', () => {
  it('ASSEMBLY_TIME', () => {
    const currentDate = formatDate(new Date().getTime(), FORMAT.YYYYMMDDt);
    console.log('currentDate: ', currentDate);
    expect(currentDate).toEqual(cfg.ASSEMBLY_DATE);
  });
})

// npm run test:unit config.test.ts
