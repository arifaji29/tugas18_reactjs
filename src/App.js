import React from 'react';

import { Caption, Slide, Slider, Pagination, Col, Row, Card, CardTitle, Icon, SideNav, Button, SideNavItem } from 'react-materialize';

function App() {
  return (
    <div>
      <SideNav
        id="SideNav-44"
        options={{
          draggable: true
        }}
        trigger={<Button className='small'><Icon>list</Icon></Button>}
      >
        <SideNavItem
          user={{
            background: 'https://placeimg.com/640/480/tech',
            email: 'testing@gmail.com',
            image: 'https://live.staticflickr.com/65535/52058051806_44a9fc7306_o.png',
            name: 'Satria Darmawan'
          }}
          userView
        />
        <SideNavItem href="#!icon" icon={<Icon>person</Icon>}>
          Profil Saya
        </SideNavItem>
        <SideNavItem href="#!icon" icon={<Icon>help</Icon>}>
          Hubungi Kami
        </SideNavItem>

        <SideNavItem divider />
        <SideNavItem subheader>
          Product
        </SideNavItem>
        <SideNavItem href="#!third" waves>
          Kesehatan
        </SideNavItem>
        <SideNavItem href="#!third" waves>
          Komputer & aksesoris
        </SideNavItem>
        <SideNavItem href="#!third" waves>
          Gaming
        </SideNavItem>
        <SideNavItem href="#!third" waves>
          Kamera
        </SideNavItem>
        <SideNavItem href="#!third" waves>
          Olaharaga
        </SideNavItem>
        <SideNavItem href="#!third" waves>
          Fashio Pria
        </SideNavItem>
        <SideNavItem href="#!third" waves>
          Fashion Wanita
        </SideNavItem>
      </SideNav>

      <Slider
        fullscreen={false}
        options={{
          duration: 500,
          height: 400,
          indicators: true,
          interval: 6000
        }}
      >
        <Slide image={<img alt="" src="https://s-ec.bstatic.com/images/hotel/max1024x768/106/106114417.jpg" />}>
          <Caption placement="center">
            <h3>
              Pantai
            </h3>
            <h5 className="light grey-text text-lighten-3">
              Dapatkan kesempatan jalan-jalan ke pantai dengan membeli sebuah product
            </h5>
          </Caption>
        </Slide>
        <Slide image={<img alt="" src="https://live.staticflickr.com/65535/52167838308_c79ed4f98b_o.jpg" />}>
          <Caption placement="left">
            <h3>
              Tokyo
            </h3>
            <h5 className="light grey-text text-lighten-3">
              Pusat Fashion Asia
            </h5>
          </Caption>
        </Slide>
        <Slide image={<img alt="" src="https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?wid=2880&hei=1280&fmt=jpeg&crop=9,336,2699,1200&anchor=1358,936&qlt=75,0&fit=wrap&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72" />}>
          <Caption placement="right">
            <h3>
              Paris
            </h3>
            <h5 className="light grey-text text-lighten-3">
              Jalan-jalan ke pusat fashion dunia dengan beli product fashion
            </h5>
          </Caption>
        </Slide>
      </Slider>



      <Row>
        <h5>Hot List</h5>
        <Col
          m='3'

        >
          <Card
            className='small'
            header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/8/15/25749302/25749302_274a89a6-ea41-4a3a-ac6b-ce2881016369.jpg " >Audio</CardTitle>}

          >

            Audio Technica mulai dari <mark style={{ backgroundColor: 'red' }}>Rp. 910 rb</mark>
          </Card>
        </Col>

        <Col
          m='3'

        >
          <Card
            className='small'
            header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2019/1/16/25287362/25287362_a79f0aa6-cf1f-484f-b1a8-83993245cd6f.jpg">Handphone</CardTitle>}

          >
            Handphone Samsung - mulai dari <mark style={{ backgroundColor: 'red' }}>Rp. 200rb</mark>
          </Card>
        </Col>

        <Col
          m={3}

        >
          <Card
            className='small'
            header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/6/26/28201197/28201197_856195f2-b0ba-4711-8200-fd95beaf1df5.jpg">Sequishy</CardTitle>}

          >

            Sequishy - mulai dari <mark style={{ backgroundColor: 'red' }}>Rp. 5,5rb</mark>
          </Card>
        </Col>

        <Col
          m={3}
          s={12}
        >
          <Card
            className='small'
            header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/4/23/28201197/28201197_0383072a-1766-453c-951a-8b53a719cff0.jpg">Koleksi The Avengers </CardTitle>}

          >
            Koleksi The Avengers - mulai dari <mark style={{ backgroundColor: 'red' }}>Rp. 10rb</mark>
          </Card>
        </Col>
      </Row>

      <Pagination
        activePage={2}
        items={10}
        leftBtn={<Icon>chevron_left</Icon>}
        maxButtons={8}
        rightBtn={<Icon>chevron_right</Icon>}
      />



    </div>
  );
}

export default App;
