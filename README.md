# MUI Sample

@import "/doc/image/mui.png" {width="100px"}

mui のサンプルプロジェクト

[GitHub Pages](https://esbsystemtakashiyamamoto.github.io/mui-sample/) で内容を確認できる 💡

使い方や機能の確認のために書いていく
✅ マークはサンプルページ実装済みの印 👍

# 使い方

```bash
npm i --force
```

強制インストール
**"mui-image": "^1.0.7"** は MUI v5 までしか対応していない
このリポジトリでは MUI v6 を使っている

# [Material UI](https://mui.com/)

基本的なコンポーネントで永遠に無料らしい
基本的なコンポーネント郡
と、いってもいろいろ出来るし慣れるまで大変

## [✅ App Bar](https://mui.com/material-ui/react-app-bar/)

- アプリケーションのタイトルバー
- いつも使うやつを実装した
- メニューボタンから Drawer でメニューを開ける

## [✅ Drawer](https://mui.com/material-ui/react-drawer/)

- AppBar のメニューボタンを開く
- React Router でページ遷移している
- ルーティングは**App.tsx**にある v
- メニューは**MenuBar.tsx**にダダ書きする
  - この中でなんとかする・分けない・メニューごときに拘らない 👊

## [✅ List](https://mui.com/material-ui/react-list/)

- Drawer でメニューを作るのに使っている
- それ以外で・・・今のところ出番はない

## [✅ Tabs](https://mui.com/material-ui/react-tabs/)

- 何かとよく使う
- **@mui/lab**の Tab を使ったほうがいろいろ楽でいい 👍

## [✅ Autocomplete](https://mui.com/material-ui/react-autocomplete/)

- 何かとよく使う
- データが 5,000 件を超えたら仮想化する必要がある
- いろいろ出来るけど慣れが必要

## [✅ TextField](https://mui.com/material-ui/react-text-field/)

- 何かとよく使う
- 他のコンポーネントと組み合わせて使うことも結構ある

## [✅ Select](https://mui.com/material-ui/react-select/)

- コンボボックス
- Autocomplete で良さそうな気がする

## [✅ Switch](https://mui.com/material-ui/react-switch/)

- 一応基本だし・・・的なモチベーション
- ちょっとめんどくさい
- 標準コンポーネント**StdSwitch**を作った

## [✅ Slider](https://mui.com/material-ui/react-slider/)

- 数値の範囲の入力に便利
- 視覚的にも分かり易そう

## [✅ ToggleButton](https://mui.com/material-ui/react-toggle-button/)

- たくさんある ON/OFF とかに便利そう

## [✅ Popover](https://mui.com/material-ui/react-popover/)

- コンポーネントや操作の説明に便利そう

## [✅ Snackbar](https://mui.com/material-ui/react-snackbar/)

- 処理の結果の通知とかに使う
- 標準コンポーネント**StdSnackBar**を作った

## [✅ SpeedDial](https://mui.com/material-ui/react-speed-dial/)

- 常に画面にメニューを配置しないでいいから画面がスッキリしそう
- 今できる操作だけ表示させれたらいいと思う

## [✅ Dialog](https://mui.com/material-ui/react-dialog/)

- 操作の確認には必須
- 標準コンポーネント**StdDialog**を作った

## [✅ Tooltip](https://mui.com/material-ui/react-tooltip/)

- Popover じゃなくてこっちだった・・・🤪
- この程度で十分使える

## [✅ Transitions](https://mui.com/material-ui/transitions/)

- アニメーションコンポーネント
- 標準コンポーネント**StdTransitions**を作った
  - 値の更新エフェクト**StdFadeUpdateEffect**を作った

## [✅ Table](https://mui.com/material-ui/react-table/)

- 簡単な表形式のテーブル
- データが 1,000 件を超えたら仮想化する必要がある
- 仮想化するといろいろ面倒くさい 🤪

## ✅ BackdropAndSnackbar

- 通知系のコンポーネントをまとめた
- Backdrop と Snackbar は一緒に使うことが多い

# [カスタマイズ](https://mui.com/material-ui/customization/how-to-customize/)

## [✅ カスタマイズ](https://mui.com/material-ui/customization/how-to-customize/)

- MUI 独特のスタイルの当て方がのっている
- CSS の知識が無いと太刀打ち出来ない 🤪

## [✅ Theme](https://mui.com/material-ui/customization/theming/)

- テーマの扱い方

## [✅ SxProps](https://mui.com/system/getting-started/the-sx-prop/)

- sx スタイルの扱い方
- ここも見る 👉[MUI System](https://mui.com/system/getting-started/)

# [MUI X](https://mui.com/x/)

[プラン](https://mui.com/pricing/)によってコンポーネントの使える範囲が違う

| プラン    | 月額 | 買い切り |
| --------- | ---: | -------: |
| Community | 無料 |       -- |
| Pro       |  $15 |     $540 |
| Premium   |  $49 |    $1764 |

課金は開発者単位

## [✅ Data Grid](https://mui.com/x/react-data-grid/)

グリッド形式のコンポーネント
プランによって使える機能の範囲が違う

データテーブルのコンポーネント
仮想行・列を使わなければ無料プランで問題ない

## [✅ Charts](https://mui.com/x/react-charts/)

グラフやチャート・ゲージもある
徐々に機能がリリースされている
プランによって使えるチャートが増える

- ⭕ MUI X Charts を使っても良いとき
  - リアルタイムチャートの必要がない
  - 無料プランで使えるグラフで捌ける

グラフの機能だけで考えれば ChartJS の方が優秀っぽい
要件によって使い分けする

## [✅ Date and Time Pickers](https://mui.com/x/react-date-pickers/)

日付や時間のコンポーネント
地域を指定して日付を扱える

日付や時間の範囲(Range)をサクッと捌きたい場合は有料プランが必要
そういうコンポーネントが有料プランでは使える

---

# まとめる前の公式のリンク

## [Base UI](https://mui.com/base-ui/getting-started/)

・・・そのうち見る

## [Joy UI](https://mui.com/joy-ui/getting-started/)

・・・そのうち見る

# 💡 MUI X COMPONENTS

# [Tree View](https://mui.com/x/react-tree-view/)

ツリービューのコンポーネント
使うときに考えよう

---
