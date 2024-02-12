/**
 * This file was generated by openapi-typescript-flatten
 */

import type { components } from '@/shopby-api/openapi-types/shopby-api-types/manage-shop-public.d.ts';

export interface Get {
  /**
   * 주소 조회하기
   * @description ## 부가설명 및 특이사항
  검색 키워드로 주소정보를 검색하는 API 입니다.
  
  ##Request 요청
  | name    | type      | required  | default value | description      |
  |-----------|-----------|-----------|---------------|------------------|
  | keyword   | String  | Y         |               | 검색 키워드         |
  | pageNumber| Int     | N         | 1             | 페이지 번호         |
  | pageSize  | Int     | N         | 10(MAX = 1000)| 한 페이지당 노출 수   |
  ## pageSize가 최대 사이즈(1000)를 초과할 경우 최대 사이즈 만큼 조회됩니다.
   */
  '/addresses/search': {
    params: {
      path?: never;
      query: {
        /**
         * @description 페이지 번호
         * @example 1
         */
        pageNumber: number;
        /**
         * @description 페이지 사이즈
         * @example 10
         */
        pageSize: number;
        /**
         * @description 검색 키워드
         * @example 디지털로26길 72
         */
        keyword: string;
      };
    };
    body?: never;
    data: components['schemas']['addresses-search195379154'];
    error: any;
  };

  /**
   * 게시판 설정 조회하기
   * @description ## 부가설명 및 특이사항
  전체 게시판의 설정정보를 조회하는 API 입니다.
   */
  '/boards/configurations': {
    params?: never;
    body?: never;
    data: components['schemas']['boards-configurations-832411598'];
    error: any;
  };

  /**
   * 게시글 리스트 조회하기
   * @description ## 부가설명 및 특이사항
  특정 게시판(게시판 번호 기준)의 게시글 리스트를 조회하는 API 입니다.
   */
  '/boards/{boardNo}/articles': {
    params: {
      path: {
        /**
         * @description 조회할 게시판 번호(숫자) 또는 게시판id(문자열)
         * @example 1 또는 boardId
         */
        boardNo: string;
      };
      query?: {
        /**
         * @description 페이지 번호
         * @example 1
         */
        pageNumber: number;
        /**
         * @description 한 페이지당 노출 수
         * @example 1
         */
        pageSize: number;
        /**
         * @description 목록 카운트 포함 여부(false: 미포함(default), true: 포함)
         * @example false
         */
        hasTotalCount: boolean;
        /**
         * @description 검색어
         * @example keyword
         */
        keyword: string;
        /**
         * @description 검색유형 (ALL: 전체, TITLE: 제목, CONTENT: 내용, WRITER: 작성자)
         * @example ALL
         */
        searchType: string;
        /**
         * @description 게시판 카테고리
         * @example 1
         */
        categoryNo: number;
        /**
         * @description 조회일 시작일(yyyy-MM-dd, default: 3개월)
         * @example YYYY-MM-DD
         */
        startYmd: string;
        /**
         * @description 조회일 종료일(yyyy-MM-dd, default: 오늘)
         * @example YYYY-MM-DD
         */
        endYmd: string;
        /**
         * @description 답글도 리스트에 같이 조회할지 여부 (false: 답글 미포함(default), true: 답글 포함)
         * @example false
         */
        withReplied: boolean;
        /**
         * @description 최신 순 정렬 여부 (ASC: 최신 순, DESC: 오래된 순)
         * @example DESC
         */
        direction: string;
        /**
         * @description 본인이 작성한 글만 조회 여부(false: 전체 조회(default), true: 본인 글만 조회)
         * @example true
         */
        isMine: boolean;
        /**
         * @description 본인이 추천한 게시글만 조회 여부(false: 전체 조회(default), true: 추천한 게시글만 조회)
         * @example true
         */
        myRecommendOnly: boolean;
        /**
         * @description 본인이 해당 게시글을 추천했는지 여부(false: 본인 추천 포함x(default), true: 본인 추천 포함)
         * @example true
         */
        includeRecommended: boolean;
      };
    };
    body?: never;
    data: components['schemas']['boards-boardNo-articles1633620974'];
    error: any;
  };

  /**
   * 게시판 카테고리 목록 조회하기
   * @description ## 부가설명 및 특이사항
  특정 게시판(게시판 번호 기준)의 카테고리를 조회하는 API 입니다.
   */
  '/boards/{boardNo}/categories': {
    params: {
      path: {
        /**
         * @description 조회할 게시판 번호(숫자) 또는 게시판id(문자열)
         * @example 1 또는 boardId
         */
        boardNo: string;
      };
      query?: never;
    };
    body?: never;
    data: components['schemas']['boards-boardNo-categories2026858948'];
    error: any;
  };

  /**
   * 게시글 상세 조회하기
   * @description ## 부가설명 및 특이사항
  특정 게시글(게시글 번호 기준)을 상세 조회하는 API 입니다.
  
  imageUrl은 게시글 작성하기 API의 thumbnailUrl과 동일합니다.
  
  attachments는 게시글 작성하기 API의 images와 동일합니다.
  
   | 조회 시                      | 저장 시(게시글 작성하기 API)   | 설명          | 예시                     |
   |------------------------------|--------------------------|--------------|------------------------|
   | attachments.originalFileName | images.originalFileName  | 원본 파일명   | 홍길동.jpg               |
   | attachments.uploadedFileName | images.uploadedFileName  | 업로드 된 파일명 | https://mycdn/hong.jpg |
   | attachments.downloadFileUrl  | images.uploadedFileName  | 업로드 된 파일명 | https://mycdn/hong.jpg |
   */
  '/boards/{boardNo}/articles/{articleNo}': {
    params: {
      path: {
        /**
         * @description 조회할 게시판 번호(숫자) 또는 게시판id(문자열)
         * @example 1 또는 boardId
         */
        boardNo: string;
        /**
         * @description 조회할 게시글 번호
         * @example 0
         */
        articleNo: string;
      };
      query?: {
        /**
         * @description 비회원 글 확인용 비밀번호
         * @example string
         */
        password: string;
        /**
         * @description 답글도 리스트에 같이 조회할지 여부 (false: 답글 미포함, true: 답글 포함(default))
         * @example true
         */
        withReplied: boolean;
      };
    };
    body?: never;
    data: components['schemas']['boards-boardNo-articles-articleNo-1236579485'];
    error: any;
  };

  /**
   * 게시글 답글 리스트 조회하기
   * @description ## 부가설명 및 특이사항
  특정 게시판(게시판 번호 기준)의 게시글 리스트를 조회하는 API 입니다.
   */
  '/boards/{boardNo}/articles/{articleNo}/replies': {
    params: {
      path: {
        /**
         * @description 조회할 게시판 번호(숫자) 또는 게시판id(문자열)
         * @example 1 또는 boardId
         */
        boardNo: string;
        /**
         * @description 조회할 게시글 번호
         * @example 1
         */
        articleNo: string;
      };
      query?: {
        /**
         * @description 페이지 번호 (default:1)
         * @example 1
         */
        page: number;
        /**
         * @description 한 페이지당 노출 수 (default:10)
         * @example 10
         */
        pageSize: number;
        /**
         * @description 본인이 해당 게시글을 추천했는지 여부(false: 본인 추천 포함x(default), true: 본인 추천 포함)
         * @example false
         */
        includeRecommended: boolean;
      };
    };
    body?: never;
    data: components['schemas']['boards-boardNo-articles-articleNo-replies1451829958'];
    error: any;
  };

  /**
   * 요청한 달에 해당하는 공휴일 조회하기
   * @description ## 부가설명 및 특이사항
  해당 연도와 월에 존재하는 공휴일을 조회하는 API 입니다.
   */
  '/holiday': {
    params?: {
      path?: never;
      query?: {
        /**
         * @description 검색할 연도
         * @example 2022
         */
        year: number;
        /**
         * @description 검색할 월
         * @example 1
         */
        month: number;
      };
    };
    body?: never;
    data: components['schemas']['holiday-736675939'];
    error: any;
  };

  /**
   * 1:1 문의 내역 조회하기
   * @description ## 부가설명 및 특이사항
  1:1 문의글 목록을 전체 검색하는 API 입니다.
  
  문의 상태 : inquiryStatus와 inqiryStatuses가 있으며, 두 개를 동시에 요청파라미터로 넣으면 그 둘을 합한 상태를 조회합니다.
  - inquiryStatus: 하나의 1:1문의 상태에 대해서 조회 가능.
  - inquiryStatuses, 여러 개의 1:1문의 상태 조회 가능. ','로 구분.
  - (ASKED: 레거시 호환용, ISSUED와 같다.)
  
  ## 화면 예시
  <a target='_blank' href='http://image.toast.com/aaaaahb/api-description/member/inquiry/get_inquiries.png'><img src='http://image.toast.com/aaaaahb/api-description/member/inquiry/get_inquiries.png?autox150'></a>
   */
  '/inquiries': {
    params?: {
      path?: never;
      query?: {
        /**
         * @description 페이지 번호
         * @example 1
         */
        pageNumber: number;
        /**
         * @description 한 페이지당 노출 수
         * @example 1
         */
        pageSize: number;
        /**
         * @description 목록 카운트 포함 여부(false: 미포함(default), true: 포함)
         * @example false
         */
        hasTotalCount: boolean;
        /**
         * @description 1:1 문의 유형 번호
         * @example 123
         */
        inquiryTypeNo: number;
        /**
         * @description 1:1 문의 상태 (ISSUED(ASKED-이전버전 호환용): 답변대기, IN_PROGRESS: 답변 진행중, ANSWERED: 답변완료)
         * @example ISSUED
         */
        inquiryStatus: string;
        /**
         * @description 1:1 문의 상태 복수개 지정 (ISSUED(ASKED-이전버전 호환용): 답변대기, IN_PROGRESS: 답변 진행중, ANSWERED: 답변완료)
         * @example ISSUED,ASKED,IN_PROGRESS,ANSWERED
         */
        inquiryStatuses: string;
        /**
         * @description 조회기간 시작시간
         * @example YYYY-MM-DD
         */
        startYmd: string;
        /**
         * @description 조회기간 종료시간
         * @example YYYY-MM-DD
         */
        endYmd: string;
        /**
         * @description 검색어
         * @example keyword
         */
        keyword: string;
        /**
         * @description 검색 타입 (ALL: 전체, TITLE: 제목, CONTENT: 내용)
         * @example ALL
         */
        searchType: string;
      };
    };
    body?: never;
    data: components['schemas']['inquiries-1702559394'];
    error: any;
  };

  /**
   * 1:1 문의 설정 조회하기
   * @description ## 부가설명 및 특이사항
  1:1 문의 설정을 조회하는 API 입니다.
   */
  '/inquiries/configurations': {
    params?: never;
    body?: never;
    data: components['schemas']['inquiries-configurations-784433679'];
    error: any;
  };

  /**
   * 1:1 문의 상세 조회하기 (문의번호 기준)
   * @description ## 부가설명 및 특이사항
  특정 1:1 문의(문의번호 기준)를 상세 조회하는 API 입니다.
  
  ## 화면 예시
  <a target='_blank' href='http://image.toast.com/aaaaahb/api-description/member/inquiry/get_inquiries_inquiryNo.png'><img src='http://image.toast.com/aaaaahb/api-description/member/inquiry/get_inquiries_inquiryNo.png?autox150'></a>
   */
  '/inquiries/{inquiryNo}': {
    params: {
      path: {
        /**
         * @description 1:1 문의 번호
         * @example 141
         */
        inquiryNo: string;
      };
      query?: never;
    };
    body?: never;
    data: components['schemas']['inquiries-inquiryNo-1705667149'];
    error: any;
  };

  /**
   * 외부스크립트 조회하기
   * @description ## 부가설명 및 특이사항
  외부 스크립트를 조회하는 API 입니다.
   */
  '/page/scripts': {
    params: {
      path?: never;
      query: {
        /**
         * @description 페이지타입 리스트.  "," 구분자 복수개 요청 가능. (MAIN: 메인 페이지, COMMON_HEAD: 상단 공통영역, COMMON_FOOTER: 하단 공통영역, PRODUCT: 상품 상세 페이지, PRODUCT_LIST: 상품 리스트 페이지, PRODUCT_SEARCH: 상품 검색결과 페이지, CART: 장바구니 페이지, ORDER: 주문하기 페이지, ORDER_DETAIL: 주문상세 페이지, ORDER_COMPLETE: 주문완료 페이지, DISPLAY_SECTION: 메인 싱품 분류지, MEMBER_JOIN_COMPLETE: 회원가입완료 페이지, MY_PAGE: 마이 페이지)
         * @example CART
         */
        pageTypes: string;
      };
    };
    body?: never;
    data: components['schemas']['page-scripts807368217'];
    error: any;
  };

  /**
   * 적립금 이력 조회하기
   * @description ## 부가설명 및 특이사항
  적립금 이력을 전체 검색하는 API 입니다.
  
  ## 화면 예시
  <a target='_blank' href='http://image.toast.com/aaaaahb/api-description/member/accumulation/get_profile_accumulations_summary.png'><img src='http://image.toast.com/aaaaahb/api-description/member/accumulation/get_profile_accumulations_summary.png?autox150'></a>
   */
  '/profile/accumulations': {
    params?: {
      path?: never;
      query?: {
        /**
         * @description 페이지 번호
         * @example 1
         */
        pageNumber: number;
        /**
         * @description 페이지 사이즈
         * @example 10
         */
        pageSize: number;
        /**
         * @description 적립 유형(ADD: 지급, SUB: 차감)
         * @example ADD
         */
        accumulationReason: string;
        /**
         * @description 조회일 시작일(yyyy-MM-dd, default: 3개월)
         * @example YYYY-MM-DD
         */
        startYmd: string;
        /**
         * @description 조회일 종료일(yyyy-MM-dd, default: 오늘)
         * @example YYYY-MM-DD
         */
        endYmd: string;
        /**
         * @description 정렬방식(DESC:내림차순(default), ASC:오름차순)
         * @example DESC
         */
        direction: string;
      };
    };
    body?: never;
    data: components['schemas']['profile-accumulations506787993'];
    error: any;
  };

  /**
   * 적립금 요약 조회하기
   * @description ## 부가설명 및 특이사항
  적립금 요약정보를 조회하는 API 입니다.
  
  ## 화면 예시
  <a target='_blank' href='http://image.toast.com/aaaaahb/api-description/member/accumulation/get_profile_accumulations.png'><img src='http://image.toast.com/aaaaahb/api-description/member/accumulation/get_profile_accumulations.png?autox150'></a>
   */
  '/profile/accumulations/summary': {
    params?: {
      path?: never;
      query?: {
        /**
         * @description 만료 조회 시작일(YYYY-MM-DD HH:mm:ss, default: 한달)
         * @example YYYY-MM-DD HH:mm:ss
         */
        expireStartYmdt: string;
        /**
         * @description 만료 조회 종료일(YYYY-MM-DD HH:mm:ss, default: 한달)
         * @example YYYY-MM-DD HH:mm:ss
         */
        expireEndYmdt: string;
      };
    };
    body?: never;
    data: components['schemas']['profile-accumulations-summary-1470401351'];
    error: any;
  };

  /**
   * 해당 회원의 예상 적립금 조회하기
   * @description ## 부가설명 및 특이사항
  해당 회원의 예상 적립금(적립대기)을 조회하는 API 입니다.
  
  ## 화면 예시
  <a target='_blank' href='http://image.toast.com/aaaaahb/api-description/member/accumulation/get_profile_accumulations_waiting.png'><img src='http://image.toast.com/aaaaahb/api-description/member/accumulation/get_profile_accumulations_waiting.png?autox150'></a>
   */
  '/profile/accumulations/waiting': {
    params?: never;
    body?: never;
    data: components['schemas']['profile-accumulations-waiting211812153'];
    error: any;
  };

  /**
   * instagram 피드(게시글 목록) 조회하기
   * @description ## 부가설명 및 특이사항
  해당 쇼핑몰의 인스타그램 게시글 목록을 조회하는 API 입니다.
  
  조회간 에러 발생시, 에러 정보가 Response 객체에 포함됩니다.
   */
  '/shopby/instagram/media': {
    params?: never;
    body?: never;
    data: components['schemas']['shopby-instagram-media-297972756'];
    error: any;
  };

  /**
   * 적용 중인 몰 약관 조회하기
   * @description ## 부가설명 및 특이사항
  해당 쇼핑몰의 약관을 조회하는 API 입니다.
   */
  '/terms': {
    params: {
      path?: never;
      query: {
        /** @description 조회할 약관 타입 리스트 (MALL_INTRODUCTION: 쇼핑몰/회사 소개, USE: 이용약관, E_COMMERCE: 전자금융거래 이용약관, PI_PROCESS: 개인정보처리방침, PI_COLLECTION_AND_USE_REQUIRED: 개인정보 수집/이용, PI_COLLECTION_AND_USE_OPTIONAL: 개인정보 수집/이용, PI_PROCESS_CONSIGNMENT: 개인정보 처리/위탁, PI_THIRD_PARTY_PROVISION: 개인정보 제3자 제공, PI_COLLECTION_AND_USE_FOR_GUEST_ON_ARTICLE: 개인정보 수집/이용, ACCESS_GUIDE: 이용안내, WITHDRAWAL_GUIDE: 탈퇴안내, PI_SELLER_PROVISION: 개인정보 판매자 제공, PI_COLLECTION_AND_USE_ON_ORDER: 개인정보 수집/이용, ORDER_INFO_AGREE: 구매 동의, CLEARANCE_INFO_COLLECTION_AND_USE: 통관정보 수집/이용, TRANSFER_AGREE: 개인정보 국외 이전 동의, REGULAR_PAYMENT_USE: 정기결제(배송) 이용약관, AUTO_APPROVAL_USE: 자동 승인 이용약관, PI_LIQUOR_PURCHASE_PROVISION: 주류구매 개인정보 수집/이용, PI_RESTOCK_NOTICE: 개인정보 수집/이용) */
        termsTypes: string;
      };
    };
    body?: never;
    data: components['schemas']['terms-1849610091'];
    error: any;
  };

  /**
   * 약관 변경이력 조회하기
   * @description ## 부가설명 및 특이사항
  해당 쇼핑몰 약관의 변경이력을 조회하는 API 입니다.
  
  ## 화면 예시
  <a target='_blank' href='http://image.toast.com/aaaaahb/api-description/member/common/get_terms_history.png'><img src='http://image.toast.com/aaaaahb/api-description/member/common/get_terms_history.png?autox150'></a>
   */
  '/terms/history': {
    params: {
      path?: never;
      query: {
        /**
         * @description 조회할 약관 타입 리스트 (USE: 이용약관, E_COMMERCE: 전자금융거래 이용약관, PI_PROCESS: 개인정보처리방침, REGULAR_PAYMENT_USE: 정기결제(배송) 이용약관, AUTO_APPROVAL_USE: 자동 승인 이용약관)
         * @example USE
         */
        termsType: string;
        /**
         * @description 조회할 현재부터 미래 날짜
         * @example 0
         */
        futureDaysToShow: string;
      };
    };
    body?: never;
    data: components['schemas']['terms-history143648857'];
    error: any;
  };

  /**
   * 약관 상세 조회하기
   * @description ## 부가설명 및 특이사항
  특정 약관(약관번호 기준)을 상세 조회하는 API 입니다.
  
  ## 화면 예시
  <a target='_blank' href='http://image.toast.com/aaaaahb/api-description/member/common/get_terms_termsno.png'><img src='http://image.toast.com/aaaaahb/api-description/member/common/get_terms_termsno.png?autox150'></a>
   */
  '/terms/{termsNo}': {
    params: {
      path: {
        /**
         * @description 조회할 약관 번호
         * @example 1
         */
        termsNo: string;
      };
      query?: never;
    };
    body?: never;
    data: components['schemas']['terms-termsNo-1990424634'];
    error: any;
  };
}

export interface Head {}

export interface Post {
  /**
   * 게시글 작성하기
   * @description ## 부가설명 및 특이사항
  게시글을 작성하는 API 입니다.
  
  images 값은 조회 시, '게시글 상세 조회 하기 API의 'attachments로 조회됩니다.
  
  첨부파일은 최대 10개까지 업로드 가능합니다.
  
   | 저장 시                  | 조회 시(게시글 상세 조회 하기 API)  | 설명           | 예시                   |
   |--------------------------|------------------------------|--------------|-----------------------|
   | images.originalFileName  | attachments.originalFileName | 원본 파일명   | 홍길동.jpg              |
   | images.uploadedFileName  | attachments.uploadedFileName | 업로드 된 파일명 | https://mycdn/hong.jpg |
   | images.uploadedFileName  | attachments.downloadFileUrl  | 업로드 된 파일명 | https://mycdn/hong.jpg |
  
  ### thumbnailUrl는 조회 시, 게시글 상세 조회 하기 API의 'imageUrl'로 조회됩니다.
   */
  '/boards/{boardNo}/articles': {
    params: {
      path: {
        /**
         * @description 조회할 게시판 번호(숫자) 또는 게시판id(문자열)
         * @example 1 또는 boardId
         */
        boardNo: string;
      };
      query?: never;
    };
    body?: components['schemas']['boards-boardNo-articles504530629'];
    data: any;
    error: any;
  };

  /**
   * 게시글 추천
   * @description 게시글 추천
   */
  '/boards/{boardNo}/articles/{articleNo}/recommend': {
    params: {
      path: {
        /**
         * @description 게시판 번호
         * @example 1
         */
        boardNo: string;
        /**
         * @description 추천할 게시글 번호
         * @example 1
         */
        articleNo: string;
      };
      query?: never;
    };
    body?: never;
    data: any;
    error: any;
  };

  /**
   * 게시글 신고하기
   * @description ## 부가설명 및 특이사항
  특정 게시글을 신고하는 API 입니다.
   */
  '/boards/{boardNo}/articles/{articleNo}/report': {
    params: {
      path: {
        /**
         * @description 신고할 게시판 번호(숫자) 또는 게시판id(문자열)
         * @example 1 또는 boardId
         */
        boardNo: string;
        /**
         * @description 신고할 게시글 번호
         * @example 1
         */
        articleNo: string;
      };
      query?: never;
    };
    body?: components['schemas']['boards-boardNo-articles-articleNo-report-808776058'];
    data: any;
    error: any;
  };

  /**
   * 1:1 문의 등록하기
   * @description ## 부가설명 및 특이사항
  1:1 문의를 등록하는 API 입니다.
  
  샵바이프리미엄 쇼핑몰에서만 비회원 1:1문의가 가능합니다.
  비회원 등록 시에는 email을 필수로 입력해야 합니다.
  
  ## 화면 예시
  <a target='_blank' href='http://image.toast.com/aaaaahb/api-description/member/inquiry/post_inquiries.png'><img src='http://image.toast.com/aaaaahb/api-description/member/inquiry/post_inquiries.png?autox150'></a>
  
  <hr>
  
  ## 참고: 이미지 파일(첨부파일) 업로드 방법 안내
  이미지파일 업로드 API를 호출하여 이미지 등록 이후 1:1문의 등록 시 업로드 된 파일명 항목에 등록한 image url 을 입력하여 호출해 주시면 됩니다.
  
  참고로 이미지 업로드 시 이미지 업로드되는 도메인인 base url은 rlyfaazj0.toastcdn.net입니다.
  
  이미지 업로드는 관련해서는 아래 내용으로 참고 부탁드립니다.
  
  ※해당 API는 별도 API문서가 없습니다.(하이퍼링크 연결 안되는것이 맞음)
  
  
  POST http://shop-api.e-ncp.com/files/images (리얼)
  
  ### header 정보
  - Version : 1.0
  - clientId : {몰의 clientId}
  - platform : (PC, MOBILE_WEB, IOS, AOS 중 하나로 해당 API 를 호출하는 플랫폼의 유형)
  - Content-Type : multipart/form-data
  
  ### Body :
  - file:'image data'
  
  ### Request
  
  imageUrl : 이미지 URL
  
  originName : 원본 파일명
  
  파일명의 경우 2~255자 범위내에 있어야합니다.
  
  파일 용량의 경우, 12MB 이하의 이미지 파일만 업로드 가능합니다.
  
  지원하는 확장자는 아래와 같습니다.
  
  bmp, tif, tiff, miff, gif, jpe, jpeg, jpg, jps, pjpeg, jng, mng, png
   */
  '/inquiries': {
    params?: never;
    body?: components['schemas']['inquiries226483999'];
    data: components['schemas']['inquiries1602970542'];
    error: any;
  };

  /**
   * 적용 중인 몰 약관 조회하기 (ver 1.1)
   * @description ## 부가설명 및 특이사항
  해당 쇼핑몰의 약관을 조회하는 API 입니다. (ver 1.1)
  치환하고 싶은 문구를 replacementPhrase 항목에 [key:value]형태로 넣어서 치환할 수 있습니다.
   */
  '/terms': {
    params?: never;
    body?: components['schemas']['terms1116014589'];
    data: components['schemas']['terms-1849610091'];
    error: any;
  };

  /**
   * 추가 약관 조회하기
   * @description ## 부가설명 및 특이사항
  해당 쇼핑몰의 추가 약관을 조회하는 API 입니다.
   */
  '/terms/custom': {
    params?: never;
    body?: components['schemas']['terms1116014589'];
    data: components['schemas']['terms-custom824775241'];
    error: any;
  };

  /**
   * 약관 상세 조회하기 (ver 1.1)
   * @description ## 부가설명 및 특이사항
  특정 약관(약관번호 기준)을 상세 조회하는 API 입니다. (ver 1.1)
  치환하고 싶은 문구를 replacementPhrase 항목에 [key:value]형태로 넣어서 치환할 수 있습니다.
  
  ## 화면 예시
  <a target='_blank' href='http://image.toast.com/aaaaahb/api-description/member/common/get_terms_termsno.png'><img src='http://image.toast.com/aaaaahb/api-description/member/common/get_terms_termsno.png?autox150'></a>
   */
  '/terms/{termsNo}': {
    params: {
      path: {
        /**
         * @description 조회할 약관 번호
         * @example 1
         */
        termsNo: string;
      };
      query?: never;
    };
    body?: components['schemas']['terms1116014589'];
    data: components['schemas']['terms-termsNo-1990424634'];
    error: any;
  };
}

export interface Put {
  /**
   * 게시글 수정하기
   * @description ## 부가설명 및 특이사항
  
  특정 게시글(게시글 번호 기준)을 수정하는 API 입니다.
  
  첨부파일은 최대 10개까지 업로드 가능합니다.
   */
  '/boards/{boardNo}/articles/{articleNo}': {
    params: {
      path: {
        /**
         * @description 조회할 게시판 번호(숫자) 또는 게시판id(문자열)
         * @example 1 또는 boardId
         */
        boardNo: string;
        /**
         * @description 수정할 게시글 번호
         * @example 0
         */
        articleNo: string;
      };
      query?: never;
    };
    body?: components['schemas']['boards-boardNo-articles-articleNo-665973613'];
    data: any;
    error: any;
  };

  /**
   * 게시글 수정가능 여부 확인하기
   * @description ## 부가설명 및 특이사항
  특정 게시글(게시글 번호 기준)의 수정가능 여부를 확인하는 API 입니다.
  
  비회원으로 작성한 경우, 해당 게시글 작성 비밀번호를 전달해야 합니다.
   */
  '/boards/{boardNo}/articles/{articleNo}/editable': {
    params: {
      path: {
        /**
         * @description 조회할 게시판 번호(숫자) 또는 게시판id(문자열)
         * @example 1 또는 boardId
         */
        boardNo: string;
        /**
         * @description 확인할 게시글 번호
         * @example INTEGER
         */
        articleNo: string;
      };
      query?: never;
    };
    body?: components['schemas']['boards-boardNo-articles-articleNo-editable-149444152'];
    data: any;
    error: any;
  };

  /**
   * 1:1 문의 변경하기
   * @description ## 부가설명 및 특이사항
  특정 1:1 문의(문의번호 기준)를 수정하는 API 입니다.
  
  image 삭제는 '1:1 문의 부분 변경하기' API를 통해 해야합니다.
  
  ## 화면 예시
  <a target='_blank' href='http://image.toast.com/aaaaahb/api-description/member/inquiry/put_inquiries_inquiryNo.png'><img src='http://image.toast.com/aaaaahb/api-description/member/inquiry/put_inquiries_inquiryNo.png?autox150'></a>
   */
  '/inquiries/{inquiryNo}': {
    params: {
      path: {
        /**
         * @description 1:1 문의 번호
         * @example 141
         */
        inquiryNo: string;
      };
      query?: never;
    };
    body?: components['schemas']['inquiries-inquiryNo482104634'];
    data: any;
    error: any;
  };
}

export interface Patch {
  /**
   * 1:1 문의 부분 변경하기
   * @description ## 부가설명 및 특이사항
  특정 1:1 문의(문의번호 기준)를 부분 수정하는 API 입니다.
  
  originalFileNames, uploadedFileNames 이 null 인 경우 첨부파일은 수정되지 않습니다.
  
  ex) {
  "originalFileNames" : null,
  "uploadedFileNames" : null
  }
  
  originalFileNames, uploadedFileNames 이 빈 리스트일 경우 첨부파일은 모두 삭제 됩니다.
  
  ex) {
  "originalFileNames" : [],
  "uploadedFileNames" : []
  }
  
  ## 화면 예시
  <a target='_blank' href='http://image.toast.com/aaaaahb/api-description/member/inquiry/put_inquiries_inquiryNo.png'><img src='http://image.toast.com/aaaaahb/api-description/member/inquiry/put_inquiries_inquiryNo.png?autox150'></a>
   */
  '/inquiries/{inquiryNo}': {
    params: {
      path: {
        /**
         * @description 1:1 문의 번호
         * @example 141
         */
        inquiryNo: string;
      };
      query?: never;
    };
    body?: components['schemas']['inquiries-inquiryNo1319745130'];
    data: any;
    error: any;
  };
}

export interface Delete {
  /**
   * 게시글 삭제하기
   * @description ## 부가설명 및 특이사항
  특정 게시글(게시글 번호 기준)을 삭제하는 API 입니다.
  
  비회원으로 작성한 경우, 해당 게시글 작성 비밀번호를 전달해야 합니다.
   */
  '/boards/{boardNo}/articles/{articleNo}': {
    params: {
      path: {
        /**
         * @description 조회할 게시판 번호(숫자) 또는 게시판id(문자열)
         * @example 1 또는 boardId
         */
        boardNo: string;
        /**
         * @description 삭제할 게시글 번호
         * @example INTEGER
         */
        articleNo: string;
      };
      query?: never;
    };
    body?: components['schemas']['boards-boardNo-articles-articleNo-1875198411'];
    data: any;
    error: any;
  };

  /**
   * 게시글 추천 취소
   * @description 게시글 추천 취소
   */
  '/boards/{boardNo}/articles/{articleNo}/recommend': {
    params: {
      path: {
        /**
         * @description 게시판 번호
         * @example 1
         */
        boardNo: string;
        /**
         * @description 추천할 게시글 번호
         * @example 13
         */
        articleNo: string;
      };
      query?: never;
    };
    body?: never;
    data: any;
    error: any;
  };

  /**
   * 1:1문의 삭제하기
   * @description ## 부가설명 및 특이사항
  특정 1:1 문의(문의번호 기준)를 삭제하는 API 입니다.
  
  ## 화면 예시
  <a target='_blank' href='http://image.toast.com/aaaaahb/api-description/member/inquiry/delete_inquiries_inquiryNo.png'><img src='http://image.toast.com/aaaaahb/api-description/member/inquiry/delete_inquiries_inquiryNo.png?autox150'></a>
   */
  '/inquiries/{inquiryNo}': {
    params: {
      path: {
        /**
         * @description 1:1 문의 번호
         * @example 141
         */
        inquiryNo: string;
      };
      query?: never;
    };
    body?: never;
    data: any;
    error: any;
  };
}

export interface Options {}

export interface Trace {}