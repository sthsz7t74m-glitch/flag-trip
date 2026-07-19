# FLAG TRIP

世界の国旗を、旅行気分で楽しく学べる Spring Boot 製のクイズゲームです。

## 基本版で遊べること

- 国旗を見て国名を4択で回答
- 国名を見て国旗を4択で回答
- 国旗を見て国名を入力
- 195か国の国旗図鑑・フラッシュカード
- 初級・中級・上級、地域別の出題
- 日本語・英語の切り替え
- 1問ごとの解説／最後にまとめて解説
- 回答速度・コンボ・難易度を使った得点
- 正答率、最高得点、苦手な国、学習済みの国を端末内に保存
- スマートフォン・PCのレスポンシブ表示
- 効果音のON／OFF

## 起動方法

Codespaces のターミナルで次を実行します。

```bash
./mvnw spring-boot:run
```

起動後、`ポート` タブに表示される `8080` の地球マークを押すとゲームを開けます。

テストは次のコマンドで実行できます。

```bash
./mvnw test
node --test tests/game-utils.test.cjs
```

## 主な構成

```text
src/main/java/jp/flagtrip/           Spring Boot
src/main/resources/static/          ゲーム画面
  css/style.css                      デザイン
  data/countries.json                195か国のデータ
  js/game-utils.js                   クイズ共通処理
  js/app.js                          画面・ゲーム処理
tests/                               JavaScriptテスト
```

## 今後追加する予定の機能

- 世界地図を習熟度別に色分け
- 世界パスポートとバッジ
- デイリーチャレンジ
- 同じ端末での2人対戦
- 地域旗を含むエキスパート問題

## データについて

国名・国コードなどの基礎データは `world-countries`、日本語の首都名は Wikidata をもとに生成しています。詳細は [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) を参照してください。
