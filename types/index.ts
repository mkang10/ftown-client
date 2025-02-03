

export type Pagination<T> = {
  items: T[]
  pageCount: number
  pageNo: number
  pageSize: number
  totalCount: number

}

export type Role = {
  roleId: string
  roleName: string
}
