import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Table, Carousel } from 'react-bootstrap'
import { FaPowerOff, FaUserPlus, FaSearch, FaAngleUp, FaBars, FaAngleRight } from 'react-icons/fa';
import { MdDesktopMac, MdOfflineShare, MdOutlineClose } from 'react-icons/md';

function App() {
  return (
    <div className="App">
      <InfoAlert/>
      <Haeder/>
      <MainMenubar/>
    </div>
  );
}

function InfoAlert() {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <Table bordered className='popup'>
        <tbody>
          <tr>
            <td width={'50%'} className='d-none d-lg-table-cell p-0 pointer'>
              <div className='d-flex justify-content-center align-items-center'>
                <div className='p-2'><MdDesktopMac className='fs-20'/></div>
                <div className='d-flex flex-column p-2'>
                  <div className='fs-9 fw-bolder'>바로가기 <span className='text-danger'>ICON</span> 설치하세요!</div>
                  <small className='fw-normal' style={{fontSize:'80%'}}>바로가기를 통해 접속하면 더 빠르고 간편하게 쇼핑하실 수 있습니다.</small>
                </div>
              </div>
            </td>
            <td width={'50%'} className='p-0 pointer'>
              <div className='d-flex justify-content-center align-items-center position-relative'>
                <div className='p-2'><MdOfflineShare className='fs-20'/></div>
                <div className='d-flex flex-column p-2'>
                  <div className='d-none d-lg-block fs-9 fw-bolder'><span className='text-danger'>쇼핑머니백</span>을 친구에게 공유!</div>
                  <small className='d-none d-lg-block fw-normal' style={{fontSize:'80%'}}>친구에게 공유해서 머니백 포인트를 쌓아보세요!</small>
                  <div className='d-block d-lg-none fs-9 fw-bolder'>친구에게 <span className='text-danger'>공유</span>하고 <span className='text-danger'>적립</span>받으세요!</div>
                </div>
                {/* PC popup close button */}
                <div className='d-none d-lg-block position-absolute bottom-0 border border-bottom-0 text-center pointer' style={{right:'30px', width:'30px'}} onClick={(e) => {e.stopPropagation(); setShow(false);}}>
                  <FaAngleUp/>
                </div>
                {/* Mobile popup close button */}
                <div className='d-block d-lg-none position-absolute text-center pointer' style={{right:'15px'}} onClick={(e) => {e.stopPropagation(); setShow(false);}}>
                  <MdOutlineClose/>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

function Haeder() {
  return (
    <div className='main-container'>
      {/* pc */}
      <Row className='d-none d-lg-flex mx-0'>
        <Col xs lg='3'>
          <div className='smb-logo w-100 h-100'/>
        </Col>
        <Col className='align-self-center'>
          <div className='d-flex align-items-center position-relative w-50'>
            <input className='input-search' placeholder='쇼핑몰 검색'/>
            <FaSearch className='position-absolute pointer hover' style={{right:10}}/>
          </div>
        </Col>
        <Col xs lg='auto' className='text-end'>
          <div className='d-flex justify-content-end'>
            {/* 로그인 전 */}
            <div className='d-flex flex-column flex-shrink-1 align-items-center mx-2 pointer'>
              <div className='fs-13 p-2 hover'><FaPowerOff/></div>
              <div className='text-nowrap fs-7'>로그인</div>
            </div>
            <div className='d-flex flex-column flex-shrink-1 align-items-center mx-2 pointer'>
              <div className='fs-13 p-2 hover'><FaUserPlus/></div>
              <div className='text-nowrap fs-7'>회원가입</div>
            </div>
            {/* 로그인 후 */}
            {/* <div className=' d-grid gap-1 align-self-center mx-2 fs-7 text-secondary'>
              <div><span className='text-dark fw-bold'>test</span> 님의 보유 쇼핑머니백</div>
              <div><span className='text-danger fw-bold fs-10'>10,000</span> 원</div>
            </div>
            <div className=' d-grid gap-1 align-self-center mx-2 fs-9 text-secondary'>
              <div><button className='sign-button'>회원정보</button></div>
              <div><button className='sign-button'>로그아웃</button></div>
            </div> */}
          </div>
        </Col>
      </Row>

      {/* mobile */}
      <Row className='p-3 d-flex d-lg-none mx-0'>
        <Col>
          <div className='d-flex align-items-center h-100 mx-2 pointer'>
            <div className='p-2 hover'><FaPowerOff/></div>
          </div>
        </Col>
        <Col><div className='smb-logo w-100 h-100 p-4'/></Col>
        <Col>
          <div className='d-flex justify-content-end align-items-center h-100 mx-2 text-danger fw-bold pointer'>
            <span className='me-1' style={{display:'inline-block', textOverflow:'ellipsis', overflow:'hidden', whiteSpace:'nowrap'}}>10,000</span>p
          </div>
        </Col>
      </Row>
      <div className='d-flex d-lg-none align-self-center' style={{backgroundColor:'#F2F3F4'}}>
        <div className='d-flex align-items-center position-relative w-100 p-3'>
          <input className='input-search' placeholder='쇼핑몰 검색'/>
          <FaSearch className='position-absolute pointer' style={{right:'30px'}}/>
        </div>
      </div>
    </div>
  )
}

function MainMenubar() {
  return (
    <div className='main-container'>
      <Row className='fw-bold mx-0'>
        <Col lg='3' className='d-none d-lg-flex bg-dark text-white justify-content-start align-items-center px-4' style={{fontSize:'14px'}}>
          <FaBars className='me-2'/>전체 카테고리
        </Col>
        <Col className='main-menu'>쇼핑적립</Col>
        <Col className='main-menu'>이용안내</Col>
        <Col className='main-menu'>이벤트&혜택</Col>
        <Col className='main-menu'>고객센터</Col>
      </Row>
      <Row className='mx-0'>
        <Col lg='3' className='d-none d-lg-block px-0 banner-left'>
          <div className='d-flex flex-column'>
            <div className='banner-category active'>
              <div>오픈마켓/소셜/마트</div>
              <span><FaAngleRight/></span>
            </div>
            <div className='banner-category'>
              <div>백화점/홈쇼핑/종합몰</div>
              <span><FaAngleRight/></span>
            </div>
            <div className='banner-category'>
              <div>의류/잡화/뷰티</div>
              <span><FaAngleRight/></span>
            </div>
            <div className='banner-category'>
              <div>식품/건강/유아동</div>
              <span><FaAngleRight/></span>
            </div>
            <div className='banner-category'>
              <div>생활/인테리어</div>
              <span><FaAngleRight/></span>
            </div>
            <div className='banner-category'>
              <div>디지털/가전</div>
              <span><FaAngleRight/></span>
            </div>
            <div className='banner-category'>
              <div>도서/취미/반려동물</div>
              <span><FaAngleRight/></span>
            </div>
            <div className='banner-category'>
              <div>교육/기타</div>
              <span><FaAngleRight/></span>
            </div>
          </div>
        </Col>
        <Col className='banner-right px-0'>
          <div className='position-relative'>
            <CarouselFadeExample/>
            {/* <div className='position-absolute top-0 start-0'>123131</div> */}
          </div>
        </Col>
      </Row>

    </div>
  )
}

function CarouselFadeExample() {
  return (
    <Carousel fade interval={null}>
      <Carousel.Item>
        <div className="d-block w-100 h-100" style={{backgroundImage: 'url("//imgs.dotmap.co.kr/img/upload/banner/1663202396.png")'}}/>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-block w-100 h-100" style={{backgroundImage: 'url("//imgs.dotmap.co.kr/img/upload/banner/1663202396.png")'}}/>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-block w-100 h-100" style={{backgroundImage: 'url("//imgs.dotmap.co.kr/img/upload/banner/1663202396.png")'}}/>
      </Carousel.Item>
    </Carousel>
  );
}

export default App;