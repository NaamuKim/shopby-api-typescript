/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/external-scripts': {
    /**
     * 외부스크립트 조회하기
     * @description  ## 부가설명 및 특이사항
     *  외부스크립트 조회
     *
     *  몰에서 사용중인 외부 스크립트 리스트를 불러옵니다.
     */
    get: operations['get-external-scripts'];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    'external-scripts176357485': {
      /**
       * @description 기기 타입 (PC: 피씨, MOBILE: 모바일, BASE: 기본도메인)
       * @example PC
       */
      deviceType: string;
      /**
       * @description 스크립트 타입 (MAIN: 메인 페이지, COMMON_HEAD: 상단 공통영역, COMMON_FOOTER: 하단 공통영역, PRODUCT: 상품 상세 페이지, PRODUCT_LIST: 상품 리스트 페이지, PRODUCT_SEARCH: 상품 검색결과 페이지, CART: 장바구니 페이지, ORDER: 주문하기 페이지, ORDER_DETAIL: 주문상세 페이지, ORDER_COMPLETE: 주문완료 페이지, DISPLAY_SECTION: 메인 상품 분류, MEMBER_JOIN_COMPLETE: 회원가입 완료 페이지, MY_PAGE: 마이페이지)
       * @example MAIN
       */
      pageType: string;
      /**
       * @description 페이지 타입 Label
       * @example 메인 페이지
       */
      pageTypeLabel: string;
      /**
       * @description (DEPRECATED 예정 pageTypeLabel을 사용해주세요.) 스크립트 타입 Label
       * @example 메인 페이지
       */
      scriptTypeLabel: string;
      /**
       * @description 스크립트
       * @example <TEST SCRIPT1>
       */
      content: string;
    }[];
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {
  /**
   * 외부스크립트 조회하기
   * @description  ## 부가설명 및 특이사항
   *  외부스크립트 조회
   *
   *  몰에서 사용중인 외부 스크립트 리스트를 불러옵니다.
   */
  'get-external-scripts': {
    parameters: {
      header: {
        /**
         * @description API 버전
         * @example 1.0
         */
        Version: string;
        /**
         * @description 쇼핑몰 클라이언트 아이디
         * @example test-client-id
         */
        clientId: string;
        /**
         * @description 클라이언트 플랫폼 (PC, MOBILE_WEB, IOS, AOS)
         * @example PC
         */
        platform: string;
      };
    };
    responses: {
      /** @description 200 */
      200: {
        content: {
          'application/json': components['schemas']['external-scripts176357485'];
        };
      };
    };
  };
}
