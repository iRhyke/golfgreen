### Git push（変更をVercelに反映）
```bash
cd ~/Documents/GitHub/golfgreen
git add .
git commit -m "説明"
git push
```

### ローカルで動かす。
```bash
cd ~/Documents/GitHub/golfgreen
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