# shopby-api-typescript

이 패키지는 샵바이 API 의 타입만 제공하는 라이브러리입니다.

## 설치

```bash
npm i -D shopby-api-typescript
```

## 예시
```typescript

import type { Paths } from "shopby-api-typescript"; // generated by openapi-typescript

// Schema Obj
type MyType = components["schemas"]["MyType"];

// Path params
type EndpointParams = Paths["/products/search"]["parameters"];

// Response obj
type SuccessResponse = Paths["/products/search"]["get"]["responses"][200]["content"]["application/json"]["schema"];
type ErrorResponse =
  Paths["/products/search"]["get"]["responses"][500]["content"]["application/json"]["schema"];
```

### 개선하려는 페인포인트
[샵바이 api 문서](https://docs.shopby.co.kr/)를 매번 확인하며 개발하는 것은 생산적이지 않습니다.
하지만 샵바이 문서를 만드는 yaml 파일은 openapi 가이드에 맞추어져 제공되진 않습니다.
그렇기 때문에 샵바이 yaml 파일을 openapi-typescript 를 사용하여 ts 파일을 만드는 경우에는 다음과 같은 문제들이 있었습니다.

- nullable 한 내용들이 optional 하게 처리 되지 않는다.
- enum 형식 데이터들의 description 들이 union 타입으로 잡힌다.
  - Ex:'네이버 페이' | '카카오 페이' -> 'NAVER_PAY' | 'KAKAO_PAY'
- 헤더는 모두 optional 하게 처리 되어야 한다.

