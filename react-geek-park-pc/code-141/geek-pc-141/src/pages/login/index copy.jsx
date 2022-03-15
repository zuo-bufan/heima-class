import { Button, Card } from 'antd'
import { PoweroffOutlined, PlayCircleOutlined } from '@ant-design/icons'
import Cards from './child'
function Login() {
  return (
    <div>
      <h1>Login</h1>
      <Cards title="标题1">
        <h2>👌OK</h2>
      </Cards>
      <Card title="标题" extra={<a href="#">More</a>} style={{ width: 600 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <div>
        <Button icon={<PlayCircleOutlined />} type="primary">
          Primary Button
        </Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <br />
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
        <hr />
        <Button type="primary" icon={<PoweroffOutlined />} loading={false}>
          Click me!
        </Button>
      </div>
    </div>
  )
}

export default Login
