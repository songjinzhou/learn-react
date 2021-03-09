// table 配置
export const tableConfig = ({
    dataCount = 0,
    dataSource = [],
    tableLoading = false,
    pageSize = 20,
    pageNum = 1,
    showTotal = (total) => `共${total}条记录`
  }) => {
    const ret = {
      dataSource,
      loading: tableLoading,
      pagination: {
        pageSize,
        current: pageNum,
        total: dataCount,
        showTotal,
      }
    }
    return ret
  }

// 列表过滤、排序
export const handleListChangeParams = (pagination, filtersArg, sorter) => {
  const params = {}

  Object.keys(filtersArg).forEach(key => {
    if (filtersArg[key]) params[key] = filtersArg[key].join(',')
  })

  if (sorter.field) {
    let style = 'desc'
    if (sorter.order === 'ascend') style = 'asc'
    params.sortField = sorter.field
    params.sortStyle = style
  }

  return params
}
