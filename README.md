### Git push（変更をVercelに反映）
```bash
cd ~/Documents/GitHub/golfsarongreen
git add .
git commit -m "main: "
git push
```
### プロトタイプにpush
```bash
cd ~/Documents/GitHub/golfsarongreen
git add .
git commit -m "prototype: "
git push origin prototype-1
```

### ローカルで動かす。
```bash
cd ~/Documents/GitHub/golfsarongreen
npm run dev
```

# ブランチの確認
git branch

# prototype-1に切り替え（開発・実験用）
git checkout prototype-1

# mainに切り替え（本番用）
git checkout main

# プロトタイプが完成して、本番に反映したい時
git checkout main
git merge prototype-1
git push



# 
では次の作業として、、、（ヘッダーとフッターをいじります。）

ゴール：（ヘッダーのお問い合わせだけは削除し、フッターのサポートの中のお問い合わせだけは残したいです。）

目的：そうすることで、（クレームなどの面倒な問い合わせは避けつつも、本当に必要な人のみが探し出してお問い合わせをするかと。）

課題：（現状のLayout.jsxでは{ name: "お問い合わせ", href: "/contact" }で一元管理されており、どちらかを消しどちらかを残すことができません。便利ですが。）

解決策：（本来は不便ですが、ページ、サポート共にLinkを使わず入力しますか。あなたのアイデアはいかがですか？）