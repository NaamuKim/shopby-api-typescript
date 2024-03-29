/**
 * This file was generated by openapi-typescript-flatten
 */

import type { components } from '@/shopby-api/openapi-types/shopby-api-types/admin-shop-public.d.ts';

export interface Get {
  /**
   * 몰 정보 조회하기
   * @description ## 부가설명 및 특이사항
  몰 정보를 조회하는 API입니다.
  
  몰 진입 시 전체 카테고리 조회 후 응답값을 localStorage(web), SharedPreference(android), NSUserDefaults(ios)와 같은 로컬 저장소에 두고 재사용하는 방식을 권장합니다.
  
  expire time은 익일 0시로 설정을 권장합니다.
  
  카테고리는 변경 가능하므로 상품상세 API의 카테고리 번호가 로컬 저장소에는 없을 수 있습니다.
  
  그런 경우에는 카테고리 조회 API를 이용하여 로컬 저장소를 갱신해 주십시오.
  
  
  ## CDN으로 대체하면 더 좋은 성능을 낼 수 있습니다.
  해당 API는 상점 정보를 DB를 통해 조회하며, DB에서 데이터를 가져올 때 트래픽이 발생하는 경우 병목 현상으로 인해 API응답이 지연이 되는 경우가 있습니다.
  
  하지만 CDN을 활용해 상점 정보를 가져오게 되면 트래픽 대부분을 CDN캐시 서버에서 처리하기 때문에 트래픽 폭주로 인한 서비스 장애를 사전에 방지할 수 있습니다.
  
  또한 CDN 리소스를  최종 클라이언트에게 전달할 때, 일반 인터넷망이 아닌 전용선을 사용하여 빠르고 안전한 성능을 기대할 수 있습니다.
  
  CDN경로에는 해당 API의 응답값과 동일한 상점 정보가 포함되어있고 해당 정보가 변경되면 5초이내로 CDN파일을 갱신하고 있습니다.
  
  기존과 같이 응답값을 localStorage(web), SharedPreference(android), NSUserDefaults(ios)와 같은 로컬저장소에 두고 재사용하는 방식을 권장합니다.
  
  자세한 개발방법은 아래 링크를 참조하세요.
  
  [https://shopby.works/guide/skin/dev-cover/call-api#call-info](https://shopby.works/guide/skin/dev-cover/call-api#call-info)
   */
  '/malls': {
    params?: never;
    body?: never;
    data: components['schemas']['malls1221953710'];
    error: any;
  };

  /**
   * 현재 몰의 다국어, 환율 설정 조회
   * @description ## 부가설명 및 특이사항
  현재 몰의 다국어, 환율 설정 조회을 조회하는 API 입니다.
   */
  '/malls/internationalization': {
    params?: never;
    body?: never;
    data: components['schemas']['malls-internationalization-996890286'];
    error: any;
  };

  /**
   * [샵바이프리미엄 전용] 몰과 계약한 파트너 목록 조회하기
   * @description ## 부가설명 및 특이사항
  몰과 계약한 파트너 목록을 조회하는 API입니다.
   */
  '/malls/partners': {
    params?: never;
    body?: never;
    data: components['schemas']['malls-partners-200843305'];
    error: any;
  };

  /**
   * 현재 도메인의 보안서버정보 조회하기
   * @description ## 부가설명 및 특이사항
  현재 도메인의 보안서버정보를 조회하는 API입니다.
   */
  '/malls/ssl': {
    params?: never;
    body?: never;
    data: components['schemas']['malls-ssl-953646756'];
    error: any;
  };
}

export interface Head {}

export interface Post {}

export interface Put {}

export interface Patch {}

export interface Delete {}

export interface Options {}

export interface Trace {}
