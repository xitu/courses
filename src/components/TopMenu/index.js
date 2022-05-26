/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Container, Link } from './styles'

export const TopMenu = ({
  code="//code.juejin.cn", // 练习
  pins="//juejin.cn/pins/club/6824710202655244301",  // 讨论
  docs="//juejin.cn", // 阅读
  }) => {
  return (
    <Container>
      <Link href={code} target="_blank">练习</Link>
      <Link href={pins} target="_blank">讨论</Link>
      <Link href={docs} target="_blank">阅读</Link>
    </Container>
  )
}