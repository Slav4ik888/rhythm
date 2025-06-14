export interface LinkType {
  href         : string
  name         : string
  requireAuth? : boolean // if true, the link will be hidden if the user is not authenticated
}
