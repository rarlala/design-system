# Design System Study
2024.09 ~ 진행중

<br />

## 프로젝트 소개
이 프로젝트는 디자인 시스템과 UI 라이브러리를 설계하고 구현하는 데 중점을 둔 학습형 프로젝트입니다. <br/>
Chakra UI 및 Storybook과 같은 실제 사례를 참고하여, 패키지와 서비스를 분리하고 모노레포(monorepo) 환경에서 관리할 수 있도록 설계했습니다.

<br />

## 주요 목표
- 디자인 시스템 구축 경험을 통한 UI 컴포넌트 설계 및 확장성 높은 구조 학습
- CSS Variable을 활용한 효율적이고 일관된 스타일 관리
- nx를 활용하여 모노레포 환경에서의 패키지와 서비스 관리 경험 습득
- Storybook과 Vitest를 통해 UI 컴포넌트 테스트 및 문서화 학습

<br />

## 구현 기능
- 디자인 시스템 구현
  - CSS Variable을 활용한 디자인 토큰 구현
  - Typography 정의
  - Box 컴포넡느 설계
- UI 라이브러리
  - Button
  - Accordion
- 빌드 및 테스트
  - esbuild를 활용한 패키지 빌드
  - Vitest를 활용한 단위 테스트 구현
- 모노레포 환경 관리
  - nx를 활용하여 패키지와 서비스를 구조적으로 관리
- storybook을 활용해 문서화와 테스트 환경 구성

<br />

## 기술 스택
React, vanila-extract, esbuild, Vitest, Storybook


<br />

## 폴더 구조
```
.
├── packages
│   ├── esbuild-config      # esbuild 설정 파일
│   ├── react               # React 기반 UI 컴포넌트 패키지
│   │   ├── component       # 개별 UI 컴포넌트
│   │   └── hooks           # 재사용 가능한 React 훅
│   └── themes              # 디자인 시스템 테마 관련 파일
│       ├── dist            # 빌드된 파일
│       └── src             # 원본 소스 파일
└── services
    └── storybook           # Storybook 구성
        ├── stories         # 컴포넌트별 스토리
        └── test            # 테스트 파일

```
- packages
  각종 패키지를 모아놓은 폴더로, 디자인 시스템, UI 컴포넌트, React 훅, 테마 관련 파일들이 포함됩니다.
  dist: 빌드된 결과물이 저장되는 디렉터리
  src: 원본 소스 코드가 저장되는 디렉터리
- services
  Storybook과 같은 서비스 관련 파일들을 관리합니다.
  stories: 컴포넌트별 시각적 문서를 위한 스토리 파일 저장

