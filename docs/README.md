# Studying

공부한 것을 기록합니다.

## HTTP Method

<b>HTTP Method란?</b>

클라이언트와 서버 사이에 이루어지는 요청(request)과 응답(response) 데이터를 전송하는 방법

GET : 리소스 조회 (가져오기)

POST : 요청 데이터 처리, 주로 데이터 등록에 사용

PUT : 리소스를 대체, 해당 리소스가 없으면 생성

DELETE : 리소스 삭제

## Data fetching 라이브러리

- SWR
- React Query

## as const

readonly, 바꿀 수 없고 읽을 수만 있는 값일 때 사용한다.
[Colors.ts](../src/styles/Colors.ts)

## SOP (Same-Origin Policy)

동일 출처 정책, 웹 브라우저 보안을 위해 프로토콜, 호스트, 포트가 동일한 서버로만 ajax 요청을 주고 받을 수 있도록 한 정책이다.

## CORS (Cross-Origin Resource Sharing)

교차 출처 리소스 공유, 외부 리소스를 사용하기 위한 SOP의 예외 조항으로 추가 HTTP 헤더를 사용하여 브라우저에서 다른 출처의 리소스를 공유하는 방법이다.

## Recoil

[전역 상태 관리 라이브러리](https://recoiljs.org/ko/docs/introduction/getting-started)

```jsx
const { createTodo, todos, deleteTodo, isLoading } = useTodos();
```

더 많아진다면 유지보수에 어렵게 된다. (props drilling) 이를 해결하기 위해 <b>전역 상태관리 라이브러리</b>를 사용할 수 있다.

```jsx
const [전역값, 저장하는 콜백] = useRecoilState()
const 저장하는 콜백 = useSetRecoilState()
```

## React Router

[router](https://reactrouter.com/docs/en/v6/getting-started/overview)
