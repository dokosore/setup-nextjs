# Next.js のアプリケーションの始め方

## 参考になるリポジトリ

- https://github.com/dokosore/goranavi
- https://github.com/dokosore/cogniplan
- https://github.com/dokosore/eneos-dryice

## 01 Volta の環境構築

- Mac と Windows で違います
- ターミナルで`volta`って打って使えてたら OK

## 02 Next.js アプリの作成

- `npx create-next-app --ts --use-npm {アプリの名前}`

## 03 Volta の環境を合わせる

- `volta pin node@18`
- `volta pin npm@8`

## 04 ESLint と Prettier の設定

- `npm install -D @typescript-eslint/parser @typescript-eslint/eslint-plugin`
- `npm i -D eslint-plugin-import eslint-plugin-unused-imports`
- `npm install -D prettier eslint-config-prettier`

## 05 ファイルのコピー

以下のファイルを全てこのプロジェクトからコピーして、移す

- tsconfig.json
- .eslintrc.json
- .eslintignore
- .prettierrc.json
- .vscode/settings.json
- .vscode/extensions.json

## 05 package.json の Script を整理

- package.json の scripts の部分をこのプロジェクトからコピーしてくる

## 06 ChakraUI のインストール

- `npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion`

## 07 その他ライブラリのインストール

- firebase
- jotai
- react-hook-form
- react-icons

## 08 Firebase エミュレーターの環境構築

- `npm install -g firebase-tools`
- `npx firebase init`

## 09 ディレクトリの整理

- `/src`のディレクトリを作成して、以下のようなディレクトリ構成にする
- このプロジェクトにあるファイルは適宜コピーしてくる

```
主なディレクトリ構造
.
├── README.md
├── data (emulatorのデータを格納)
│   └── v0
├── functions (Firebase Functionsを定義)
│   ├── lib (コンパイル後のJSファイル)
│   ├── src
│   │   ├── env.ts (デモデータ追加用のENV)
│   │   ├── feature (Functionsの各関数)
│   │   ├── firebase (DBとの接続用)
│   │   ├── index.ts (APIの定義)
│   │   └── types (型定義)
│   ├── tsconfig.json
├── public (参照する画像等を格納)
│   ├── favicon.ico
│   ├── images
│   └── vercel.svg
├── src (クライアントサイドのコードを格納, hooksディレクトリもあって良い)
│   ├── components (システム全体で使用するボタンなどのコンポーネント)
│   ├── features (各ページのJSX)
│   ├── firebase (DBとの通信)
│   ├── globalState (全体で使用するState)
│   ├── layouts (レイアウトに関するコンポーネント)
│   ├── middleware.ts (リクエスト時の処理)
│   ├── pages (ルーティング)
│   ├── styles (Styleテーマ)
│   └── types (型定義)
└── tsconfig.json
```
