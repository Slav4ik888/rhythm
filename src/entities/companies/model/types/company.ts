import { ReactElement } from 'react';


export enum CompanyId {
  OSNOVA     = "osnova_g2d7",
  CSS        = "css_1d3r8",
  DEMO_PECAR = "demo_pecar",
}
   

export interface CompanyData {
  id        : CompanyId
  dashboard : ReactElement<any, any>
  // URL : string
}
