
export type BuildMode = 'production' | 'development'
export enum BuildProject {
  FRONTEND  = 'frontend',
  JEST      = 'jest'
}


export interface BuildPaths {
  entry   : string
  build   : string
  html    : string
  favicon : string
  src     : string
}


export interface BuildEnv {
  mode   : BuildMode
  port   : number
  apiUrl : string
}


export interface BuildOptions {
  mode    : BuildMode
  paths   : BuildPaths
  isDev   : boolean
  port    : number
  apiUrl  : string
  project : BuildProject
}
