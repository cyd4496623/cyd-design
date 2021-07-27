import {FC,ReactNode} from 'react'
import { Empty as EmptyBase, EmptyProps } from 'antd'

interface IProps extends EmptyProps {

  /**自定义描述内容 */
  description?: ReactNode

}

const Empty: FC<IProps> = props => {

  return (
    <EmptyBase {...props} />
  )
}

Empty.defaultProps = {
  description: '暂无数据'
}

export {
  Empty
}