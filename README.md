# 都道府県別の総人口推移グラフ表示アプリ

## 画像

[<img src="https://user-images.githubusercontent.com/44374005/159206332-0121b489-b1db-49d3-b357-7d942e8d6bb8.gif" alt="スクリーンショット">](https://yumemi-code-check.vercel.app/)

## 概要

都道府県の総人口推移をグラフで見れるアプリです。

## 環境構築


1. 以下のサイトからAPIキーを取得

[RESAS-API - 地域経済分析システム（RESAS）のAPI提供情報](https://opendata.resas-portal.go.jp/)

2. .envファイルを作成

```
cp .env.example .env
```

3. 取得したAPIキーを`VITE_OPENDATA_API_KEY`に設定する

```
VITE_OPENDATA_API_KEY={API_KEY}
```

4. パッケージをインストールし、ローカルサーバを起動

```
yarn install
yarn dev
```
