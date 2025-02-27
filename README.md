<div align="center">
    <img src="https://github.com/skagmltn7/skagmltn7/assets/133394749/f7d4a3b8-b514-4547-9b4b-d3a7401856b5" alt="logo" width="400" height="400"/>
</div>

<div align="center">

#### 요리를 하기 전에 드는 비용 예상 및 최저가로 구매할 수 있는 서비스

</div><div align="center">

![NGINX](https://img.shields.io/badge/NGINX-1.25.3-green)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2.3-brightgreen)
![Ubuntu](https://img.shields.io/badge/Ubuntu-20.04.6%20LTS-orange)
![Node.js](https://img.shields.io/badge/Node.js-20.10.0%20LTS-brightgreen)
![Npm](https://img.shields.io/badge/Npm-10.2.5-yellow)
![JVM](https://img.shields.io/badge/JVM-Docker%20image%20openjdk:17--slim-blue)

</div>

<div align="center">
    <a href="#video">Video</a> • 
    <a href="#features">Features</a> •
    <a href="#contributors">Contributors</a> •
    <a href="#directory-structure">Directory Structure</a> •
    <a href="#project-output">Project Output</a> •
    <a href="#DATA-API">Data Api</a> •
    <a href="https://www.notion.so/devsei/Coffee-Driven-Development-1ea60cd7a4bf455f93c20e308dc88ff7">Notion</a>
</div><div align="center">

📢 본 프로젝트는 2024 Samsung Software Academy For Youth 10기 특화 프로젝트 일환으로 진행되었습니다.

</div>

## 상추

### 배경

- 우리 서비스를 찾는 사람들은 주로 `집에서 요리를 즐기는 분`들이에요. 쉽게 구할 수 있는 식재료와 그 식재료로 만들 수 있는 다양한 요리법에 관심이 많죠. 그리고 요리 비용을 미리 알고 싶어 하며, 가능하다면 가장 저렴한 가격으로 식재료를 구입하고 싶어해요.

- `상추`는 고객이 식재료를 쉽게 찾고, 요리 비용도 바로 알 수 있는 서비스를 만들어 이 문제를 해결하려고 해요!
- `상추`는 고객이 식재료를 최저가로 구매하도록 도와주면서 식재료에 접근을 더 쉽게, 이 식재료로 어떤 요리를 할 수 있을까를 해결해줘요!

### 개발기간

2024.02.22 ~ 2024.04.04 (6주)

### 시스템 아키텍처

![시스템아키텍처](https://github.com/skagmltn7/skagmltn7/assets/133394749/b1439d4f-f9c9-4b32-b831-f5db01206099)


## Features

### 어플리케이션 사용방법

[웹브라우저로 상추 접속하기](https://d-web.sangchu.site/)

### 메인 페이지
<img src="https://github.com/Amsan-null/amsan2/assets/88939170/fedc24bc-3802-4284-816d-415bd576b59e" width="250" height="400" /> 

- 렌더링 될 때마다 1개의 레시피 추천
- 하루마다 10개의 농수산물 식재료 추천 및 온오프라인 최저가 제공

### 농수산물 식재료관련 기능

<img src="https://github.com/Amsan-null/amsan2/assets/88939170/0882b480-b0e8-48ec-84d5-7796d5a58624" width="250" height="400" />  
<img src="https://github.com/Amsan-null/amsan2/assets/88939170/e8e80f04-6577-4573-901b-3578cb9148cb" width="250" height="400" />
<img src="https://github.com/Amsan-null/amsan2/assets/88939170/5cedb607-0d58-45c5-8a44-110b73931784" width="250" height="400" />

- 카테고리별 농수산물 재료 조회 및 검색
- 가격 분석 리포트 제공
- 농수산물 온/오프라인 가격 변동 추이
- 농수산물 목표가 설정/조회 기능
- 최저 가격 정보
- 위치 기반 구매 가능 시장 정보 제공

<hr/>

### 레시피관련 기능


<img src="https://github.com/Amsan-null/amsan2/assets/88939170/474fa02e-aa46-40c0-a0ae-f859577ee1df" width="250" height="400" />
<img src="https://github.com/Amsan-null/amsan2/assets/88939170/4c8b2ee4-7ada-44c5-ad6c-af4840556d13" width="250" height="400" />
<img src="https://github.com/Amsan-null/amsan2/assets/88939170/4c2a40bb-1918-4b3a-8fd3-d720ba77c7f1" width="250" height="400" />
<img src="https://github.com/Amsan-null/amsan2/assets/88939170/2fa38f74-071c-4d97-99df-0d6ebd21adbb" width="250" height="400" />

- 농수산물 재료를 통해 만들 수 있는 레시피
- 해당 레시피 유튜브 영상 제공
- 관심 있는 레시피 `찜하기` 기능
- 레시피에 대한 리뷰글 작성
- 리뷰글에 대한 댓글/대댓글 가능
<hr/>

### 사용자관련 기능

<img src="https://github.com/Amsan-null/amsan2/assets/88939170/00a1391c-3076-4db6-9105-9de400b28965" width="250" height="400" />
<img src="https://github.com/Amsan-null/amsan2/assets/88939170/460a399e-fbc0-41cf-b234-f5f2884f14fb" width="250" height="400" />

- 네이버 OAuth2를 사용한 사용자 인증 기능 구현
- 닉네임 및 프로필 사진 등록
- 팔로워/팔로잉
- 사용자가 작성한 리뷰 글 / 찜한 레시피 목록 조회
- 사용자가 등록한 농수산물 가격의 요약 정보

## Contributors

![be](https://github.com/skagmltn7/skagmltn7/assets/133394749/db1920b7-ac4e-4b03-a9ce-c77ade6b5e38)
![fe](https://github.com/skagmltn7/skagmltn7/assets/133394749/dcc44d55-77c0-4d86-a762-09ee2b827e1b)

### <a href="docs/컨벤션.md">컨벤션</a>


## Directory Structure

<h3> 
<details>
<summary>frontend</summary>
<div markdown="1">

```
📦src
├─📂@types
│  └─📂global
├─📂api
├─📂assets
│  ├─📂icons
│  ├─📂images
     ├─📂lotties
│  └─📂styles
│     └─📂font
├─📂components
│  ├─📂recipe
│  ├─📂user
│  ├─📂review
│  ├─📂ingredients
│  ├─📂report
│  ├─📂routes
│  └─📂common
├─📂pages
│  ├─📂recipe
│  ├─📂Home
│  ├─📂user
│  ├─📂review
│  ├─📂ingredients
│  └─📂report
├─📂constants
├─📂services
│  ├─📂recipe
│  ├─📂review
│  ├─📂recommend
│  ├─📂ingredients
│  ├─📂report
│  └─📂user
└─📂stores
```

</div>
</details>
</h3>

<h3>
<details>
<summary>backend</summary>
<div markdown="1">

```shell
 
📦BE-RecipeService
  └─ src
     └─ main.java.com.cdd.recipeservice
        │           ├─ 📂RecipeServiceApplication.java
        │           ├─ 📂global
        │           │  ├─ 📂annotation
        │           │  ├─ 📂aop
        │           │  ├─ 📂config
        │           │  ├─ 📂domain
        │           │  └─ 📂utils
        │           ├─ 📂infra
        │           │  ├─ 📂config
        │           │  ├─ 📂ingredientInfo
        │           │  ├─ 📂kakao
        │           │  ├─ 📂member
        │           │  ├─ 📂seoul
        │           │  ├─ 📂storage
        │           │  └─ 📂youtube
        │           ├─ 📂ingredientmodule
        │           │  ├─ 📂ingredient
        │           │  │  ├─ 📂application
        │           │  │  ├─ 📂domain
        │           │  │  │  ├─ Ingredient.java
        │           │  │  │  ├─ IngredientRepository.java
        │           │  │  │  └─📂query
        │           │  │  │     ├─ IngredientRepositoryCustom.java
        │           │  │  │     └─ IngredientRepositoryImpl.java
        │           │  │  ├─ 📂dto
        │           │  │  │  └─ 📂response
        │           │  │  ├─ 📂exception
        │           │  │  ├─ 📂presentation
        │           │  │  │  ├─ IngredientController.java
        │           │  │  └─ 📂utils
        │           │  ├─ 📂market
        │           │  ├─ 📂targetprice
        │           │  └─ 📂weeklyprice
        │           └─ 📂recipemodule
        │              ├─ 📂comment
        │              ├─ 📂recipe
        │              └─ 📂review
        └─ 📂resources
           ├─ application.yml
           └─ 📂db.migration # flyway
                 ├─ V1__init.sql
                 ├─ V2__add_basetime_to_market.sql
                 ├─ V3__alter_sale_link_nullable.sql
                 ├─ V4__alter_IngredientDailyPrice_name_relation.sql
                 ├─ V5__rename_id.sql
                 ├─ V6__add_knowhow.sql
                 ├─ V7__alter_knowhow_len.sql
                 ├─ V8__add_marketType.sql
                 └─ V9__add_recipe_id_by_cook_eat.sql
```

</div>
</details>
</h3>


## Project Output

### 와이어프레임
![A408 상추 (1)](https://github.com/Amsan-null/amsan2/assets/88939170/a6285540-16a0-4270-8af3-bd8530c513e0)
### <a href="docs/기능정의서.md">기능정의서</a>
### <a href="docs/와이어프레임.pdf">화면정의서</a>
### <a href="docs/상추 최종발표.pdf">최종발표 PPT</a>

### <a href="docs/ERD.md">ERD

![Member](https://github.com/skagmltn7/skagmltn7/assets/133394749/1e02d832-188c-4b70-9e11-962bac28eb98)
![Ingredient - Recipe](https://github.com/skagmltn7/skagmltn7/assets/133394749/ce7ca759-35e3-4937-9ecd-e633a812ec91)

### <a href="https://www.notion.so/devsei/Web-API-f67d31e4d31141ba8e0260358e69a651">api 명세서</a>

![apiDocs](https://github.com/skagmltn7/skagmltn7/assets/133394749/5f6bf34b-fcd5-4ce9-95b9-ecd456a90ec2)

### <a href="docs/데이터 목록.md">DATA API
