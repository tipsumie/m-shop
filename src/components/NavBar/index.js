import { Layout, Badge, Row, Col } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header style={{ lineHeight: '40px' }}>
      <Row justify='space-between'>
        <Col span={2}>
          <Link href='/'>
            <Image
              src='/Logo.jpeg'
              alt='Logo'
              width={60}
              height={60}
              preview={false}
            />
          </Link>
        </Col>
        <Col
          span={2}
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Link href='/'>
            <Badge>
              <ShoppingCartOutlined
                style={{ fontSize: 30, cursor: 'pointer' }}
              />
            </Badge>
          </Link>
        </Col>
      </Row>
    </Header>
  );
};

export default Navbar;


