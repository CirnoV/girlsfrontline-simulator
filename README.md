# girlsfrontline-simulator

[![Build Status](https://travis-ci.org/preco21/hitomo.svg?branch=master)](https://travis-ci.org/preco21/hitomo)
[![Dependency Status](https://dependencyci.com/github/preco21/hitomo/badge)](https://dependencyci.com/github/preco21/hitomo)

> 소녀전선 전투 시뮬레이터

[댕댕베이스](http://ddb.kirsi.moe/)에서 개발중인 전투 시뮬레이터 입니다.

## Feature
* 인형 데이터 파싱
* 제대 이동과 타겟팅
* 기본 공격 (HG, SMG, AR, RF, MG, 철혈)
* 진형 버프
* 자가 버프 스킬
* 전체 버프 스킬
* 일부 죽창류 스킬

현재 작업 상황은 [여기에서](https://trello.com/b/KmID8JpE) 확인할 수 있습니다

## Install

```bash
$ git clone https://github.com/DDBase/girlsfrontline-simulator.git
$ cd girlsfrontline-simulator
$ yarn
```

## Usage
코드 테스트

```bash
$ yarn test [TestPathPattern]
```

index.spec.js 테스트

```bash
$ yarn test index
```

전체 테스트

```bash
$ yarn test
```

## License
[LGPL-3.0](./LICENSE)

## API
[API 문서](./src/api.md)
